
const conversionRates = {
  meter: 1,
  kilometer: 0.001,
  mile: 0.000621371,
  foot: 3.28084
};

function convert() {
  const input = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(input)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  const valueInMeters = input / conversionRates[fromUnit];
  const convertedValue = valueInMeters * conversionRates[toUnit];

  resultDiv.textContent = `Result: ${convertedValue.toFixed(4)} ${toUnit}`;
}
