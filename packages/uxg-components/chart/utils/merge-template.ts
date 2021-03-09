import { Template } from '../models/chart-model';
import { TemplateTree } from '../models/chart-model';

export const CHILDREN = '...children';

export function injectTemplate(parentTpl: Template, childTpl: Template): Template {
  const childrenIndex = getChildIndex(parentTpl);

  if (!childrenIndex) return parentTpl;

  const splitItems = [
    parentTpl.strings[childrenIndex.itemIndex].substr(0, childrenIndex.offset) + childTpl.strings[0],
    childTpl.strings[childTpl.strings.length - 1] +
      parentTpl.strings[childrenIndex.itemIndex].substr(childrenIndex.offset + CHILDREN.length),
  ];

  return {
    strings: [
      ...parentTpl.strings.slice(0, childrenIndex.itemIndex),
      splitItems[0],
      ...childTpl.strings.slice(1, childTpl.strings.length - 1),
      splitItems[1],
      ...parentTpl.strings.slice(childrenIndex.itemIndex + 1),
    ],
    values: [
      ...parentTpl.values.slice(0, childrenIndex.itemIndex),
      ...childTpl.values,
      ...parentTpl.values.slice(childrenIndex.itemIndex),
    ],
  };
}

export function concatTemplate(tpls: TemplateTree[]): Template {
  const flattedTpls = tpls.map(tpl => flatTemplate(tpl));

  return flattedTpls.reduce((result, tpl) => {
    const resultLastIndex = result.strings.length - 1;
    const lastItem = result.strings[resultLastIndex] + ' ' + tpl.strings[0];
    return {
      strings: [...result.strings.slice(0, resultLastIndex), lastItem, ...tpl.strings.slice(1)],
      values: [...result.values, ...tpl.values],
    };
  });
}

export function cloneTemplate(tpl: Template): Template {
  return {
    strings: [...tpl.strings],
    values: [...tpl.values],
  };
}

function getChildIndex(template: Template) {
  for (let index = template.strings.length - 1; index >= 0; index--) {
    const item = template.strings[index];
    const childrentIndex = item.indexOf(CHILDREN);
    if (childrentIndex > -1) {
      return {
        itemIndex: index,
        offset: childrentIndex,
      };
    }
  }
  return null;
}

export function flatTemplate(ttree: TemplateTree): Template {
  if (ttree.children) {
    const child = concatTemplate(ttree.children);
    return injectTemplate(ttree, child);
  }
  return cloneTemplate(ttree);
}
