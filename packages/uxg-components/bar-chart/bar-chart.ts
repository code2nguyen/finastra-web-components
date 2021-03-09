import { customElement, html, LitElement } from 'lit-element';
import { createChart, createTemplateResult, flatTemplate } from '@finastra/chart';
import { bar } from '@finastra/chart/geoms/bar';
import { style } from './bar-chart-css';

@customElement('fds-bar-chart')
export class BarChart extends LitElement {
  static styles = style;
  content = html`Bar chart`;

  connectedCallback() {
    super.connectedCallback();
    const chart = createChart([], { width: 500, height: 500 });
    chart.pipe(bar()).subscribe(data => {
      console.log(data.templateTree);
      console.log(flatTemplate(data.templateTree));
      this.content = createTemplateResult(flatTemplate(data.templateTree));
      this.requestUpdate();
    });
  }
  render() {
    return this.content;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-bar-chart': BarChart;
  }
}
