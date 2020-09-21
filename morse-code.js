const inquirer = require("inquirer");

let morseCode = {};
morseCode["a"] = "._ ";
morseCode["b"] = "_... ";
morseCode["c"] = "_._. ";
morseCode["d"] = "_..";
morseCode["e"] = ". ";
morseCode["f"] = ".._. ";
morseCode["g"] = "__. ";
morseCode["h"] = ".... ";
morseCode["i"] = ".. ";
morseCode["j"] = ".___ ";
morseCode["k"] = "_._ ";
morseCode["l"] = "._.. ";
morseCode["m"] = "__ ";
morseCode["n"] = "_. ";
morseCode["o"] = "___ ";
morseCode["p"] = ".__. ";
morseCode["q"] = "__._ ";
morseCode["r"] = "._. ";
morseCode["s"] = "... ";
morseCode["t"] = "_ ";
morseCode["u"] = ".._ ";
morseCode["v"] = "..._ ";
morseCode["w"] = ".__ ";
morseCode["x"] = "_.._ ";
morseCode["y"] = "_.__ ";
morseCode["z"] = "__.. ";
morseCode["0"] = "_____ ";
morseCode["1"] = ".____ ";
morseCode["2"] = "..___ ";
morseCode["3"] = "...__ ";
morseCode["4"] = "...._ ";
morseCode["5"] = "..... ";
morseCode["6"] = "_.... ";
morseCode["7"] = "__... ";
morseCode["8"] = "___.. ";
morseCode["9"] = "____. ";
morseCode[" "] = "/";
morseCode["."] = "<>";
inquirer
  .prompt([
    {
      name: "encode",
      message: "what do you want to be converted to morse code",
      type: "input",
    },
  ])
  .then((data) => {
    let toBeConverted = data.encode;
    let convertedValue = "";
    for (let times = 0; times < toBeConverted.length; times++) {
      convertedValue += morseCode[toBeConverted[times].toLowerCase()];
    }
    console.log(convertedValue);
  });
