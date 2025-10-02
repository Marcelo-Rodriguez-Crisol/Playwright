import { test, expect } from '@playwright/test';

test('PMT-11 - Logged user purchase', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Nexus 6' }).click();
  await expect(page.getByRole('heading', { name: 'Nexus 6' })).toBeVisible();


  const [alert] = await Promise.all([
    page.waitForEvent('dialog'),
    page.getByRole('link', { name: 'Add to cart' }).click(),
  ]);
  await alert.accept();

  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await expect(page).toHaveURL(/cart\.html/);

  await page.getByRole('button', { name: 'Place Order' }).click();
  const orderModal = page.locator('#orderModal');
  await expect(orderModal).toBeVisible();


  await page.fill('#name', 'Marcelo Crisol');
  await page.fill('#country', 'Argentonia');
  await page.fill('#city', 'Good Aires');
  await page.fill('#card', '1234567812345678');
  await page.fill('#month', '12');
  await page.fill('#year', '30');
  await page.getByRole('textbox', { name: 'CVV:' }).click();
  await page.getByRole('textbox', { name: 'CVV:' }).fill('221');

  await page.getByRole('button', { name: 'Purchase' }).click();


  const sweet = page.locator('.sweet-alert');
  await expect(sweet).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(sweet).toBeHidden();
});
