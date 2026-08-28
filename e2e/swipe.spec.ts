import { expect, test } from "@playwright/test";

test("likes Ioana into Matches", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Kindred" })).toBeVisible();
  await expect(page.getByTestId("author-credit")).toContainText("Alghisi Alessandro Paolo");

  await page.getByTestId("finder-window").click();
  await page.keyboard.press("ArrowRight");
  await page.getByTestId("nav-matches").click();
  await expect(page.getByTestId("match-ioana")).toBeVisible();
});

test("passes Ioana then likes Matei without a match", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("button-pass").click();
  await page.getByTestId("button-like").click();
  await page.getByTestId("nav-matches").click();
  await expect(page.getByTestId("match-ioana")).toHaveCount(0);
  await expect(page.getByTestId("match-matei")).toHaveCount(0);
});
