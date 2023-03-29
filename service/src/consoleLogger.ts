import fs from 'fs';
import util from 'util';

const logFile = fs.createWriteStream('./console.log', { flags: 'a' });

const log = console.log;
const error = console.error;

console.log = function (...args: any[]) {
  log.apply(console, args);
  logFile.write(util.format.apply(null, args) + '\n');
};

console.error = function (...args: any[]) {
  error.apply(console, args);
  logFile.write(util.format.apply(null, args) + '\n');
};
