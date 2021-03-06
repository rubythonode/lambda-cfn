#!/usr/bin/env node

var cli = require('../lib/cli');

var parsed;
try { parsed = cli.parse(process.argv.slice(2), process.env); }
catch (err) { return finished(err); }

cli.main(parsed, finished);

function finished(err, data) {
  if (err) console.log(err.message);
  if (data) console.log(JSON.stringify(data, null, 2));
  process.exit(err ? 1 : 0);
}
