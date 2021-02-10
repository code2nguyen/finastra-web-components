import {LitElement, html, css, property, customElement} from 'lit-element';

@customElement('product-card')
export class ProductCard extends LitElement {
  @property({type: String}) label: any;

  static get styles() {
    return css`
      .product-card {
        cursor: pointer;
        width: 88px;
        height: 58px;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.16),
          0 4px 5px 0 rgba(0, 0, 0, 0.112), 0 1px 10px 0 rgba(0, 0, 0, 0.096);
        text-align: center;
        transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
        display: block;
        position: relative;
        padding: 16px;
        border-radius: 4px;
        background: bottom left / 100% 120% no-repeat
            url("data:image/svg+xml,%3Csvg version='1.1' id='L  _1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 320 246' style='enable-background:new 0 0 320 246;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M320,0v218.3c-2.8,2.1-5.7,4.2-8.6,6.2c-57.1,39.1-132,15.1-180.5,3.3C114.2,223.8,65.3,206.1,0,194V0H320z'/%3E%3C/svg%3E%0A"),
          linear-gradient(90deg, var(--color-gradient));
      }
      .uxg-card-product-name {
        height: 100%;
        vertical-align: middle;
        position: relative;
        margin-top: 0;
        top: 22%;
        color: var(--color-primary);
      }
      .uxg-h4 {
        font: 700 24px/28px Futura EF, futura-pt, Futura, Hind, Verdana,
          Arial Black, sans-serif;
        letter-spacing: normal;
        margin: 0 0 16px;
      }
    `;
  }

  render() {
    return html`
      <div class="product-card">
        <span class="uxg-h4 uxg-card-product-name">${this.label}</span>
      </div>
    `;
  }
}
