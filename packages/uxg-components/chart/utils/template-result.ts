import { defaultTemplateProcessor, SVGTemplateResult } from 'lit-html';
import { Template } from '../models/chart-model';

export function createTemplateResult(template: Template): SVGTemplateResult {
  return new SVGTemplateResult(
    template.strings as TemplateStringsArray,
    template.values,
    'SVG',
    defaultTemplateProcessor
  );
}
