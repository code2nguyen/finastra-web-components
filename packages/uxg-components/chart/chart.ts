import { of, Observable } from 'rxjs';
import { ChartModel, Size, Template } from './models/chart-model';
import { template } from './utils/template';

export function createChart(data: any, containerSize: Size): Observable<ChartModel> {
  return of({
    containerSize,
    data,
    mapping: new Map(),
    templateTree: chartTemplate(containerSize),
  });
}

export function chartTemplate(size: Size): Template {
  return template`<svg
        width=${size.width}
        height=${size.height}
        viewBox="0 0 ${size.width} ${size.height}"
        version="1.1">...children</svg>`;
}
