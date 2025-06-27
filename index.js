"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xterm_1 = require("@xterm/xterm");
var term = new xterm_1.Terminal({
    disableStdin: false,
});
term.open(document.querySelector("#terminal"));
term.write("Nooooo dont turn 25 ur so beautifullll");
