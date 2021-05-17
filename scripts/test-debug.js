const { spawn } = require('child_process');

const args = require('minimist')(process.argv.slice(2));

if (args.packages && args.packages.length > 0) {
    const packages = args.packages.split(',');
    const autoWatch = args.autoWatch;
    packages.forEach(function (package, index) {
        console.log('Debug package ' + package + '...');
        const child = spawn('yarn', ["--cwd", "packages/" + package, autoWatch ? "test:watch" : "test"], { stdio: 'inherit' });
        child.on('close', (code) => {
            if (code !== 0) {
                console.error('🚨 Error while testing package ' + package);
            }
        });
    });
}
else {
    console.error('You must specified the packages to debug 🧐 !');
    console.info('👉 For testing all the modules run: yarn test');
}