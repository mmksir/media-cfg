'use strict';

const pkg = require('../package.json');

function main() {
  console.log(`media-cfg ${pkg.version}`);
}

if (require.main === module) {
  main();
}

module.exports = { main };
