const fs = require('fs');
const path = require('path');

const { spawn } = require('child_process');
const { sync: globSync } = require('glob');
const args = require('minimist')(process.argv.slice(2));

const autoWatch = args.autoWatch;
let exitCode = 0;
main();
function main() {
    if (args.packages && args.packages.length > 0) {
        const packages = args.packages.split(',');
        const srcFile = packages.map(p => `packages/${p}/package.json`)
        srcFile.forEach(check);
    } else {
        globSync('packages/**/package.json')
            .filter((p) => !(/\/node_modules\/|\/dist\//).test(p))
            .forEach(check);
        process.exit(exitCode);
    }
}

function check(srcFile) {
    const pkgRoot = findPkgRoot(srcFile);
    const child = spawn('yarn', ["--cwd", pkgRoot, autoWatch ? "test:watch" : "test"], { stdio: 'inherit' });
    child.on('close', (code) => {
        if (code !== 0) {
            console.error('🚨 Error while testing package ' + package);
        }
    });
}

function findPkgRoot(srcFile) {
    const packagesDir = 'packages';
    const pathFromPackagesDir = path.relative(packagesDir, srcFile);
    const pkgDir = pathFromPackagesDir.split(path.sep)[0];
    const pkgName = pathFromPackagesDir.split(path.sep)[1];
    return path.join(packagesDir, pkgDir, pkgName);
}