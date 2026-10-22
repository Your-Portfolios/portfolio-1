import { test as base, expect } from "@playwright/test";

// Includes recoverable React hydration errors, which are logged to the console
// rather than always being thrown as uncaught page errors.
const test = base.extend<{ browserErrors: string[] }>({
  browserErrors: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("response", response => {
      if (response.url().includes("/_next/") && response.status() >= 400) {
        errors.push(`Failed Next.js asset: ${response.status()} ${response.url()}`);
      }
    });
    await use(errors);
    expect(errors, "No hydration errors, missing modules, or failed chunks").toEqual([]);
  }, { auto: true }],
});

test("hydrates correctly across repeated reloads with a warm browser cache", async ({ page }) => {
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt === 0) await page.goto("/");
    else await page.reload();
    await expect(page).toHaveTitle("Awais Ali | Full Stack Software Engineer");
    await expect(page.getByRole("heading", { level: 1 })).toHaveAccessibleName("Awais Ali");
    await expect(page.locator("#education")).toContainText("Oct 2020 - Nov 2024");
    // Exercise dynamically loaded icon modules after every reload.
    await page.getByRole("tab", { name: "Backend systems" }).click();
    await expect(page.getByRole("heading", { name: "APIs, authentication & data" })).toBeVisible();
    await page.getByRole("tab", { name: "Client delivery" }).click();
    await expect(page.getByRole("heading", { name: "Responsive interfaces & managed content" })).toBeVisible();
  }
});

test("project filters and modal work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Zaz Mart", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Personal Showcase", exact: true }).click();
  const project = page.getByRole("heading", { name: "Authentication Platform", exact: true });
  await project.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText("Registration, OTP & protected dashboard");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.getByRole("button", { name: "Client Projects", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Asim Textile", exact: true })).toBeVisible();
});

test("navigation and resume preview work without horizontal overflow", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) await page.getByRole("button", { name: "Toggle navigation menu" }).click();
  const aboutLink = page.getByRole("link", { name: "About", exact: true });
  await (isMobile ? aboutLink.last() : aboutLink.first()).click();
  await expect(page.getByRole("heading", { name: "About Me", exact: true })).toBeInViewport();
  if (isMobile) await page.getByRole("button", { name: "Toggle navigation menu" }).click();
  await page.getByRole("button", { name: isMobile ? "View / Download Resume" : "Resume", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.locator("iframe")).toHaveAttribute("src", "/Awais_Ali_Software_Engineer_CV.pdf#toolbar=1&navpanes=0");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test("contact form has a working fallback or handles provider responses", async ({ page }) => {
  let submissions = 0;
  // Never send an actual email, even if the owner configured a real access key.
  await page.route("https://api.web3forms.com/submit", async route => {
    submissions++;
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true }) });
  });
  await page.goto("/");
  await page.getByLabel("Your Name").fill("Browser Test");
  await page.getByLabel("Your Email").fill("test@example.com");
  await page.getByLabel("Project / Role Details").fill("Automated verification. No email should be sent.");
  await page.getByRole("button", { name: "Send Inquiry" }).click();
  await expect(page.getByText(/Contact service is not configured|Message Transmitted!/)).toBeVisible();
  if (submissions === 0) {
    await expect(page.getByRole("status")).toContainText("email me directly");
  }
});

test("built assets, metadata routes, and chat API respond correctly", async ({ request }) => {
  for (const path of ["/Awais_Ali_Software_Engineer_CV.pdf", "/favicon.ico", "/favicon.svg", "/icon.svg", "/og-image.png", "/robots.txt", "/sitemap.xml"]) {
    const response = await request.get(path);
    expect(response.ok(), path).toBe(true);
    if (path.endsWith(".pdf")) expect(response.headers()["content-type"]).toContain("application/pdf");
  }
  const reply = await request.post("/api/chat", { data: { messages: [{ content: "Tell me about experience" }] } });
  expect(reply.ok()).toBe(true);
  expect((await reply.json()).reply).toContain("Exeonic");
  const invalid = await request.post("/api/chat", { data: { messages: [] } });
  expect(invalid.status()).toBe(400);
});
