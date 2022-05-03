import { newSpecPage } from '@stencil/core/testing';
import { HomeComponent } from '../home-component';

describe('home-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HomeComponent],
      html: `<home-component></home-component>`,
    });
    expect(page.root).toEqualHtml(`
      <home-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </home-component>
    `);
  });
});
