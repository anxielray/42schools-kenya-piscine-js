/*Create two functions which accept a string, and return a string:

    RNA: that converts a DNA strand into its compliment RNA strand.
    DNA: that converts an RNA strand into its compliment DNA strand.

Compliments:

DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U

Each strand must be represented as upper case string, without spaces, eg: "ATCG" is a valid DNA strand.*/

function DNA(input) {
  if (input.length < 4 && input !== "") {
    throw new Error("Invalid DNA strand length");
  } else if (input === "") {
    return "";
  }
  let result = "";
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "G" || input[i] === "g") {
      result += "C";
    } else if (input[i] === "C" || input[i] == "c") {
      result += "G";
    } else if (input[i] === "U" || input[i] === "u") {
      result += "A";
    } else if (input[i] === "A" || input[i] === "a") {
      result += "T";
    }
    continue;
  }
  return result.toUpperCase();
}

function RNA(input) {
  if (input.length < 4 && input !== "") {
    throw new Error("Invalid DNA strand length");
  } else if (input === "") {
    return "";
  }
  let result = "";
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "G" || input[i] === "g") {
      result += "C";
    } else if (input[i] === "C" || input[i] === "c") {
      result += "G";
    } else if (input[i] === "T" || input[i] === "t") {
      result += "A";
    } else if (input[i] === "A" || input[i] === "a") {
      result += "U";
    }
    continue;
  }
  return result.toUpperCase();
}
// console.log(RNA("TAGC"));
