/**
clone from https://github.com/material-components/material-components-web-components/blob/master/scripts/watcher.js
*/

const watch = require('node-watch');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const watchOptions = {
  recursive: true,
  filter: path => {
    if (path.indexOf('node_modules') > -1) {
      return false;
    }
    return /.(?:scss)$/.test(path);
  },
};

watch('packages/uxg-components', watchOptions, (_event, fileName) => {
  addToQueue(fileName);
});

let updating = false;

async function addToQueue(fileName) {
  if (updating) {
    return;
  }
  console.log(`saw change to ${fileName}`);
  updating = true;
  let execPromise;
  console.log('building theme and component styles');
  execPromise = exec('yarn build:styling');
  try {
    const { stdout } = await execPromise;
    console.log(stdout);
  } catch ({ stdout, stderr }) {
    console.log(stdout);
    console.log('ERROR:', stderr);
  }
  console.log('watcher build complete!');
  updating = false;
}

console.log('watcher styling started!');
