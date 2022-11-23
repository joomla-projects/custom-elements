import { expect, test } from '@playwright/test';

const url = 'http://localhost:3000/tests/alert/alert.html';

test.describe('<joomla-alert-levels>', () => {
  test('Custom Element script is loaded', async ({ page }) => {
    await page.goto(url);
    await expect(page.locator('joomla-alert.levels')).toBeDefined();
  });

  test('Has type info', async ({ page }) => {
    await page.goto(url);
    await expect(page.locator('joomla-alert.levels')).toHaveAttribute('type', 'info');
  });

  test('Respects type attribute change, any unsupported value', async ({ page }) => {
    await page.goto(url);
    const element = await page.locator('joomla-alert.levels');
    await element.evaluate(node => node.setAttribute('type', 'unknown'));
    await expect(element).toHaveAttribute('type', 'info');
  });

  test('Respects type attribute change, warning', async ({ page }) => {
    await page.goto(url);
    const element = page.locator('joomla-alert.levels');
    await element.evaluate(node => node.setAttribute('type', 'warning'));
    await expect(element).toHaveAttribute('type', 'warning');
  });

  test('Respects type attribute change, danger', async ({ page }) => {
    await page.goto(url);
    const element = page.locator('joomla-alert.levels');
    await element.evaluate(node => node.setAttribute('type', 'danger'));
    await expect(element).toHaveAttribute('type', 'danger');
  });

  test('Respects type attribute change, success', async ({ page }) => {
    await page.goto(url);
    const element = page.locator('joomla-alert.levels');
    await element.evaluate(node => node.setAttribute('type', 'success'));
    await expect(element).toHaveAttribute('type', 'success');
  });

  test('Has the right text', async ({ page }) => {
    await page.goto(url);
    const element = page.locator('joomla-alert.levels p');
    const text = await element.evaluate(node => node.innerText)
    await expect(text).toEqual('Has some text');
  });
});

test.describe('<joomla-alert-dismiss>', () => {

  test('Has a close button', async ({ page }) => {
    await page.goto(url);
    const element = await page.locator('joomla-alert.dismiss');
    const dismiss = await element.evaluate(node => node.hasAttribute('dismiss'));
    await expect(dismiss).toBeTruthy();
  });

  test('Respects button attribute change, false', async ({ page }) => {
    await page.goto(url);
    const element = await page.locator('joomla-alert.dismiss');
    await element.evaluate(node => node.setAttribute('dismiss', 'false'));
    const dismiss = await element.evaluate(node => node.getAttribute('dismiss'));
    const button = await page.locator('joomla-alert.dismiss .joomla-alert--close');
    const buttons = await page.locator('joomla-alert.dismiss > button');
    await expect(dismiss).toEqual('false');
    await expect(buttons).toBeUndefined;
    await expect(button).toBeUndefined;
  });

  test('Respects button attribute change, true', async ({ page }) => {
    await page.goto(url);
    const element = await page.locator('joomla-alert.dismiss');
    await element.evaluate(node => node.setAttribute('dismiss', 'true'));
    const dismiss = await element.evaluate(node => node.getAttribute('dismiss'));
    const button = await page.locator('joomla-alert.dismiss > button');
    const isBtn = await button.evaluate(node => node instanceof HTMLButtonElement);
    await expect(dismiss).toEqual('true');
    await expect(isBtn).toBeTruthy();
  });

  test('Method close removes the alert', async ({ page }) => {
    let ex;
    await page.goto(url);
    const element = await page.locator('joomla-alert.dismiss');
    page.waitForTimeout(1050)
    await element.evaluate(node => node.close());
    await (await page.locator('body')).evaluate(node => { ex = node.querySelector('joomla-alert.dismiss')});
    await expect(ex).toBeUndefined();
  });
});
