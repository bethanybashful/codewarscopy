// Determine offspring sex based on genes XX and XY chromosomes
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

// My solution
function chromosomeCheck(sperm) {
  return sperm == "XY" ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}

// Best solutions
function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
}

const chromosomeCheck = sperm =>
  `Congratulations! You're going to have a ${sperm === `XY` ? `son` : `daughter`}.`;