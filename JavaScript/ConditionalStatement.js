let a = 1;

if (a === 1) { // If
  console.log("a is 1");
}
else if (a === 2) { // Else If
  console.log("a is 2");
}
else { // Else
  console.log("a is not 1 or 2");
}

// Switch & Case
switch (a) {
  case 1: // === 1 로 비교함
    console.log("a is 1");
    break;
  case 2: // == 2 로 비교함
    console.log("a is 2");
    break;
  default:
    console.log("a is not 1 or 2");
    break;
}
