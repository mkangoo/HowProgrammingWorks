"use strict";
class Logger {
  constructor(level) {
    this.color = Logger.color[level] || Logger.color.info;
  }
  log(s) {
    const date = new Date().toISOString();
    console.log(this.color + date + "\t" + s);
  }
}
Logger.color = {
  warning: "\x1b[1;33m",
  error: "\x1b[1;31m",
  info: "\x1b[1;37m",
};

const warning = new Logger("warning");
const error = new Logger("error");
const debug = new Logger("debug");
const slow = new Logger("slow");

warning.log("Hello");
error.log("World");
debug.log("lo");
slow.log("Po");
