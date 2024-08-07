try {
  console.log(strHello);
} catch (error) {
  console.error(error);
}

try {
  throw new Error("This is an error");
} catch (error) {
  console.error(error);
}

console.log("End");
