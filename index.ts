import { Terminal } from "@xterm/xterm";

const term = new Terminal({
  disableStdin: false,
});

term.open(document.querySelector("#terminal") as HTMLElement);
term.write("Nooooo dont turn 25 ur so beautifullll");
