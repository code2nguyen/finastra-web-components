import {html, fixture, expect} from '@open-wc/testing';
import {ProductCard} from '../product-card.js';
import '../product-card.js';

describe('ProductCard', async () => {
  it('has a default label "N/A"', async () => {
    const el: ProductCard = await fixture(html`<product-card></product-card>`);
    expect(el.label).to.equal('N/A');
  });

  it('can override the label via attribute', async () => {
    const el: ProductCard = await fixture(
      html`<product-card label="Test"></product-card>`
    );
    expect(el.label).to.equal('Test');
  });

  it('', async () => {
    const el: ProductCard = await fixture(html`<product-card></product-card>`);
    await expect(el.shortLabel('Test Label')).to.equal('TL');
  });

  it('', async () => {
    const el: ProductCard = await fixture(html`<product-card></product-card>`);
    await expect(el.shortLabel('Test Really Long Label')).to.equal('TRL');
  });

  it('', async () => {
    const el: ProductCard = await fixture(html`<product-card></product-card>`);
    await expect(el.shortLabel('TestLongLabelWithoutWhiteSpace')).to.equal(
      'TESTLO'
    );
  });

  it('passes the a11y audit', async () => {
    const el: ProductCard = await fixture(html`<product-card></product-card>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
