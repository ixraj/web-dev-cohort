// 90 <= A
// 80 >= B
// 70 >= C
// 60 >= D
// Fail

// let grade = 90;

function gradeCal(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 80) {
    return "B";
  } else if (marks >= 70) {
    return "C";
  } else if (marks >= 60) {
    return "D";
  } else {
    return "Fail!";
  }
}

let grade = gradeCal(90);
console.log(grade);

// console.log(gradeCal(12))