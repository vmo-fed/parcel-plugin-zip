var path = require('path');
const { exec } = require('child_process');

console.log(process.env.NODE_ENV, 'env');

module.exports = function (bundler) {
  bundler.on('bundled', (bundle) => {
    if (process.env.NODE_ENV === 'development') {
      return;
    }
    console.log('zip...');
    const zipDir = path.dirname(bundle.name);
    const zipFile = zipDir + '.zip';

    exec(`zip -r ${zipFile} ${zipDir}/*`, (error) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

      console.log('zip completed');
    });
  });
};
