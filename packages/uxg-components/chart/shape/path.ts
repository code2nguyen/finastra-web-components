import { SVGPath, toPath } from '../models/svg-path';
import { template } from '../utils/template';

export interface PathProps {
  d: SVGPath;
  className?: string;
  [other: string]: any;
}

export function path({ d, className = 'fds-path', ...others }: PathProps) {
  return template`<path ...=${others} class="${className}" d=${toPath(d)} />`;
}
