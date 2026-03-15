import { test, expect } from "@playwright/test"

const BASE = "http://localhost:3099"

const pages = [
  { path: "/", title: "トップページ" },
  { path: "/about", title: "About" },
  { path: "/portfolio", title: "Portfolio" },
  { path: "/skills", title: "Skills" },
  { path: "/contact", title: "Contact" },
  { path: "/privacy", title: "プライバシーポリシー" },
  { path: "/terms-of-service", title: "利用規約" },
]

for (const page of pages) {
  test.describe(page.title, () => {
    test(`${page.path} が正常に表示される`, async ({ page: p }) => {
      const response = await p.goto(`${BASE}${page.path}`, { waitUntil: "networkidle" })
      expect(response?.status()).toBe(200)
    })

    test(`${page.path} にコンソールエラーがない`, async ({ page: p }) => {
      const errors: string[] = []
      p.on("console", (msg) => {
        if (msg.type() === "error") {
          errors.push(msg.text())
        }
      })
      await p.goto(`${BASE}${page.path}`, { waitUntil: "networkidle" })
      // Next.js dev mode の hydration warning は除外
      const criticalErrors = errors.filter(
        (e) => !e.includes("Hydration") && !e.includes("hydrat") && !e.includes("Warning:")
      )
      expect(criticalErrors).toEqual([])
    })

    test(`${page.path} に表示崩れ（JS未ロード）がない`, async ({ page: p }) => {
      await p.goto(`${BASE}${page.path}`, { waitUntil: "networkidle" })
      // body が空でないことを確認
      const bodyText = await p.locator("body").innerText()
      expect(bodyText.length).toBeGreaterThan(10)
    })
  })
}

// ナビゲーション共通要素のテスト
test.describe("共通レイアウト", () => {
  test("Navbar が全ページに表示される", async ({ page }) => {
    for (const pg of pages) {
      await page.goto(`${BASE}${pg.path}`, { waitUntil: "networkidle" })
      const navbar = page.locator("header nav")
      await expect(navbar).toBeVisible()
      // ロゴ
      await expect(page.locator('a[href="/"]').first()).toContainText("shogoworks")
    }
  })

  test("Footer が全ページに表示される", async ({ page }) => {
    for (const pg of pages) {
      await page.goto(`${BASE}${pg.path}`, { waitUntil: "networkidle" })
      const footer = page.locator("footer")
      await expect(footer).toBeVisible()
      await expect(footer).toContainText("shogoworks")
    }
  })

  test("ナビゲーションリンクが正しく遷移する", async ({ page }) => {
    // デスクトップ幅で表示
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto(`${BASE}/`, { waitUntil: "networkidle" })

    // About リンクをクリック
    await page.locator('nav a:has-text("About")').first().click()
    await page.waitForURL("**/about**")
    expect(page.url()).toContain("/about")

    // Portfolio リンクをクリック
    await page.locator('nav a:has-text("Portfolio")').first().click()
    await page.waitForURL("**/portfolio**")
    expect(page.url()).toContain("/portfolio")

    // Skills リンクをクリック
    await page.locator('nav a:has-text("Skills")').first().click()
    await page.waitForURL("**/skills**")
    expect(page.url()).toContain("/skills")

    // Contact ボタンをクリック
    await page.locator('nav a:has-text("Contact")').first().click()
    await page.waitForURL("**/contact**")
    expect(page.url()).toContain("/contact")
  })
})

// ページ固有コンテンツのテスト
test.describe("ページ固有コンテンツ", () => {
  test("トップページにHero・Stats・Services・CTAがある", async ({ page }) => {
    await page.goto(`${BASE}/`, { waitUntil: "networkidle" })
    await expect(page.locator("text=田中 省伍").first()).toBeVisible()
    await expect(page.locator("text=Web開発 × AI").first()).toBeVisible()
    await expect(page.locator("text=Services").first()).toBeVisible()
  })

  test("Aboutページに各セクションがある", async ({ page }) => {
    await page.goto(`${BASE}/about`, { waitUntil: "networkidle" })
    await expect(page.locator("text=EXPERTISE").first()).toBeVisible()
    await expect(page.locator("text=EDUCATION").first()).toBeVisible()
    await expect(page.locator("text=CURRENT ACTIVITIES").first()).toBeVisible()
  })

  test("Portfolioページにプロジェクトが表示される", async ({ page }) => {
    await page.goto(`${BASE}/portfolio`, { waitUntil: "networkidle" })
    await expect(page.locator("text=制作実績").first()).toBeVisible()
    await expect(page.locator("text=筋トレ記録").first()).toBeVisible()
  })

  test("Skillsページにカテゴリが表示される", async ({ page }) => {
    await page.goto(`${BASE}/skills`, { waitUntil: "networkidle" })
    await expect(page.locator("text=Frontend").first()).toBeVisible()
    await expect(page.locator("text=Backend").first()).toBeVisible()
    await expect(page.locator("text=Infrastructure").first()).toBeVisible()
  })

  test("Contactページにフォームがある", async ({ page }) => {
    await page.goto(`${BASE}/contact`, { waitUntil: "networkidle" })
    await expect(page.locator("text=お問い合わせ").first()).toBeVisible()
    await expect(page.locator('input[id="contact-name"]')).toBeVisible()
    await expect(page.locator('input[id="contact-email"]')).toBeVisible()
    await expect(page.locator('textarea[id="contact-message"]')).toBeVisible()
  })
})
