export interface Template {
  strings: readonly string[];
  values: unknown[];
}
export interface TemplateTree extends Template {
  children?: TemplateTree[];
}

export interface Size {
  width: number;
  height: number;
}

export interface ChartModel {
  data: any;
  containerSize: Size;
  mapping: Map<string, any>;
  templateTree: TemplateTree;
}
