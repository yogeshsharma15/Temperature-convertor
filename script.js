function convertTemperature() {
  const temperatureInput = document.getElementById('temperature').value;
  const unitSelect = document.getElementById('unit');
  const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

  if (!temperatureInput || isNaN(temperatureInput)) {
    alert('Please enter a valid temperature.');
    return;
  }
  let result;
  switch (selectedUnit) {
    case 'celsius':
      result = convertToCelsius(parseFloat(temperatureInput));
      break;
    case 'fahrenheit':
      result = convertToFahrenheit(parseFloat(temperatureInput));
      break;
    case 'kelvin':
      result = convertToKelvin(parseFloat(temperatureInput));
      break;
    default:
      alert('Invalid unit selection.');
      return;
  }
  document.getElementById('result').innerText = `Converted Temperature: ${result.toFixed(2)} ${selectedUnit.toUpperCase()}`;
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function convertToKelvin(celsius) {
  return celsius + 273.15;
}
