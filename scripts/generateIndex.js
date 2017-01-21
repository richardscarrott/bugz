const { compose, map, filter, equals, not, allPass } = require('ramda');
const { readdirSync, statSync } = require('fs');
const { join, basename, extname } = require('path');

const isFile = file => statSync(file).isFile();

const isNotIndex = compose(not, equals('index.js'));

const getFiles = src =>
  filter(
    allPass([ file => isFile(join(src, file)), isNotIndex ]),
    readdirSync(src)
  );

const format = file => `export { default as ${file} } from './${file}';`;

const stripExt = file => basename(file, extname(file));

const print = compose(console.log, format, stripExt);

map(print, getFiles(join(__dirname, '../src')));
