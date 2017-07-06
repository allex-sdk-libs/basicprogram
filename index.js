var commander = require('commander');

function createBasicProgram (lib) {
  'use strict';
  var node = require('allex_nodehelpersserverruntimelib')(lib);

  function BasicProgram (dirname) {
    this.dirname = dirname;
    this.program = commander;
    this.readPckData();
    this.program.version(this.getVersion());
  }

  BasicProgram.prototype.readPckData = function () {
    this.pckdata = node.packageRead(false, false, this.dirname);
  };

  BasicProgram.prototype.showHelp = function (exit) {
    this.program.help();
    if (exit) process.exit(exit);
  };

  BasicProgram.prototype.getVersion = function () {
    return this.pckdata.version;
  };

  BasicProgram.prototype.go = function () {
    this.program.parse(process.argv);
  };

  return BasicProgram;
}

module.exports = createBasicProgram;
