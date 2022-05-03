import { newE2EPage } from '@stencil/core/testing';

describe('home-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<home-component></home-component>');

    const element = await page.find('home-component');
    expect(element).toHaveClass('hydrated');
  });
});
