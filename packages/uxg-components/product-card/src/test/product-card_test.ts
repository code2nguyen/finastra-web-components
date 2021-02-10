import {fixture, html} from '@open-wc/testing';
import {assert} from 'chai';
import {ProductCard} from '../product-card.js';

suite('product-card', () => {
  test('is defined', () => {
    const el = document.createElement('product-card');
    assert.instanceOf(el, ProductCard);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<product-card></product-card>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="product-card">
        <span class="uxg-h4 uxg-card-product-name"></span>
      </div>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<product-card label="Test"></product-card>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="product-card">
        <span class="uxg-h4 uxg-card-product-name">Test</span>
      </div>
    `
    );
  });
});
