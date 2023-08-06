// code your solution here
function superbowlWin(arr) {
    let answer = arr.find(element => element.result === "W")
    if (answer) {
      return answer.year;
    } else {
      undefined;
    }
  }

