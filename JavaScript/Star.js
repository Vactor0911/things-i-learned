const steps = 5;
for (let i=-steps + 1; i<steps; i++) {
    console.log( " ".repeat( Math.abs(i) ) + "*".repeat( (steps - Math.abs(i)) * 2 - 1 ) );
}