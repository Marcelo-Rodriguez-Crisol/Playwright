import { test, expect } from '@playwright/test';

test('PMT-01 - Guest user purchase', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Nexus' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('textbox', { name: 'Total: 650 Name:' }).click();
  await page.getByRole('textbox', { name: 'Total: 650 Name:' }).fill('Marcelo Crisol');
  await page.getByRole('textbox', { name: 'Country:' }).click();
  await page.getByRole('textbox', { name: 'Country:' }).fill('Argentonia');
  await page.getByRole('textbox', { name: 'City:' }).click();
  await page.getByRole('textbox', { name: 'City:' }).fill('Good Airs');
  await page.getByRole('textbox', { name: 'Credit card:' }).click();
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('1234567812345678');
  await page.getByRole('textbox', { name: 'Month:' }).click();
  await page.getByRole('textbox', { name: 'Month:' }).fill('12');
  await page.getByRole('textbox', { name: 'Year:' }).click();
  await page.getByRole('textbox', { name: 'Year:' }).fill('30');
  await page.getByRole('textbox', { name: 'CVV:' }).click();
  await page.getByRole('textbox', { name: 'CVV:' }).fill('221');
  await page.getByRole('button', { name: 'Purchase' }).click();
    
  const sweet = page.locator('.sweet-alert');
  
  await expect(sweet).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(sweet).toBeHidden();
  await page.getByRole('button', { name: 'OK' }).click();

});
