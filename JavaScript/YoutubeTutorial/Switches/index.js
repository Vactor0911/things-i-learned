let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Sunday");
    break;
}

let score = 95;
switch (true) {
    case score >= 90:
        console.log("A");
        break;
    case score >= 80:
        console.log("B");
        break;
    case score >= 70:
        console.log("C");
        break;
    case score >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}