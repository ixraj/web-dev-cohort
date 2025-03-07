/*
You need to determine what action to take based on traffic light colors:

"Red" → Stop
"Yellow" Slow Down
"Green" Go
"Blue" Invalid Color

Problem Statement: Write a function that uses switch-case to return the correct action.
*/

// Note: Read Question Carefully ---

// Mine -------
function trafficLightAction(color) {
  if (color === "Red") {
    return "Stop";
  } else if (color === "Yellow") {
    return "Slow Down";
  } else if (color === "Green") {
    return "Go";
  } else {
    return "Invalid Color";
  }
}

let result = trafficLightAction("Red");
console.log(result);

// Solution -------
function trafficLightAction(color) {
  switch (color.toLowerCase()) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow Down";
    case "green":
      return "Go";
    default:
      return "Invalid Color";
  }
}
