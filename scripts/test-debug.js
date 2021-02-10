var exec = require('child_process').exec;

const args = require('minimist')(process.argv.slice(2));

if (args.packages && args.packages.length > 0) {
    let packages = args.packages.split(',');
    packages.forEach(function (package, index) {
        console.log('Debug package ' + package + '...');
        exec("yarn --cwd packages/"+ package  +" test", function (error, stdout, stderr) {
            if (error) {
                console.error(package + " exec error: " + error);
                return;
            };
            if (stdout) {
                console.log(package + " stdout: " + stdout);
            };
            if (stderr) {
                console.error(package + " stderr: " + stderr);
            };
        });
    });
}
else
{
    console.error('You must specified the packages to debug !');
    console.info('For testing all the modules run: yarn test');
}