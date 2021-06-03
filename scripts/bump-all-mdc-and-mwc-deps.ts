import { execFileSync } from 'child_process';
import * as fs from 'fs';
import * as globby from 'globby';
import * as path from 'path';

const packagesDir = path.resolve(__dirname, '../..');

interface PackageJson {
  name: string;
  dependencies?: { [mdcwPkg: string]: string };
  devDependencies?: { [mdcwPkg: string]: string };
}

function isMdcWebPackage(mdcwPkg: string): boolean {
  return mdcwPkg.startsWith('@material/') && !mdcwPkg.startsWith('@material/mwc-');
}

function isMwcWebPackage(mdcwPkg: string): boolean {
  return mdcwPkg.startsWith('@material/mwc-');
}

function main() {
  const newMdcVersion = execFileSync('yarn', ['info', '@material/base', 'version'], {
    encoding: 'utf8',
  }).trim();

  const newWdcVersion = execFileSync('yarn', ['info', '@material/mwc-base', 'version'], {
    encoding: 'utf8',
  }).trim();

  console.log(`Found latest MDC Web version: ${newMdcVersion}`);
  console.log(`Found latest MWC Web version: ${newWdcVersion}`);

  const packageJsonPaths = globby.sync([
    path.join(packagesDir, '**', 'package.json'),
    `!${path.join(packagesDir, '**', 'node_modules')}`,
  ]);
  let anyChanged = false;
  for (const absPath of packageJsonPaths) {
    const pj = JSON.parse(fs.readFileSync(absPath, 'utf8')) as PackageJson;
    if (!pj.dependencies && !pj.devDependencies) {
      continue;
    }
    console.log(`Checking ${pj.name}`);
    let changed = false;

    const updateDependencies = (dependencies: Record<string, string>) => {
      for (const [pkg, oldVersion] of Object.entries(dependencies)) {
        const newVersion = isMdcWebPackage(pkg) ? newMdcVersion : isMwcWebPackage(pkg) ? newWdcVersion : '';
        if (newVersion) {
          if (oldVersion !== newVersion) {
            dependencies[pkg] = newVersion;
            console.log(`\tUpdating ${pkg} from ${oldVersion} to ${newVersion}`);
            changed = true;
            anyChanged = true;
          }
        }
      }
    };

    if (pj.dependencies) {
      updateDependencies(pj.dependencies);
    }
    if (pj.devDependencies) {
      updateDependencies(pj.devDependencies);
    }
    if (changed) {
      console.log(`\tWriting new package.json`);
      fs.writeFileSync(absPath, JSON.stringify(pj, null, 2) + '\n', 'utf8');
    }
  }
  if (anyChanged) {
    // Set an output value for consumption by a GitHub Action.
    // https://help.github.com/en/articles/development-tools-for-github-actions#set-an-output-parameter-set-output
    console.log(`::set-output name=new-mdc-version::${newMdcVersion}`);
    console.log(`::set-output name=new-mwc-version::${newMdcVersion}`);
    console.log(`\nRemember to run yarn!`);
  }
}

main();
