# 🔁 Build a Unit Converter App with JavaScript – Project Walkthrough

## 🚀 Project Overview

This project is a **simple and practical Unit Converter app** built using HTML, CSS, and JavaScript. It allows users to convert values between common units like **meters, kilometers, miles, and feet**. The app demonstrates how to handle **user input**, **dropdown selection**, and **basic conversion logic** using JavaScript.

It's ideal for beginners to learn about **DOM manipulation**, **event handling**, and **mathematical operations** in a real-world scenario.

---

### 🔗 GitHub Source Code: *Add your GitHub repo link here*
### 🌐 Live Demo: *Add your live site link here*

---

## 📁 Project Structure
```
  unit-converter-project/
  ├── index.html → Contains the structure and layout of the app.
  ├── style.css → Provides styling for the UI.
  └── script.js → Contains JavaScript logic for converting units.
```

---

🔧 index.html – Layout and Structure

### `<body> and .container Wrapper`
```html
<body>
  <div class="container">
```
- The <body> tag contains all visible content on the page.
- The .container class wraps all content in a styled layout.

---

### `Heading - Main Title`
```
<h1>Unit Converter</h1>
```
- Displays the main heading/title of the application.

### `.form-group - Input and Selection Elements`

```
<div class="form-group">
  <label for="inputValue">Enter Value</label>
  <input type="number" id="inputValue" placeholder="e.g. 100" />
</div>
```
- An input field for entering a value to convert.
- The label provides a description for the input field.

---
### `.form-group - Unit Selection (From)`
```
<div class="form-group">
  <label for="fromUnit">Convert From</label>
  <select id="fromUnit">
    <option value="meter">Meter</option>
    <option value="kilometer">Kilometer</option>
    <option value="mile">Mile</option>
    <option value="foot">Foot</option>
  </select>
</div>
```
- A dropdown (<select>) to choose the unit to convert from.
- The options represent various measurement units.

---

### `.form-group - Unit Selection (To)`

```
<div class="form-group">
  <label for="toUnit">Convert To</label>
  <select id="toUnit">
    <option value="meter">Meter</option>
    <option value="kilometer">Kilometer</option>
    <option value="mile">Mile</option>
    <option value="foot">Foot</option>
  </select>
</div>
```
- A dropdown (<select>) to choose the unit to convert to.
- Similar to the previous selection, but for the destination unit.

---

### `Convert Button`
```
<button onclick="convert()">Convert</button>
```
- A button that triggers the convert() function when clicked, performing the unit conversion.

---

### `Result Display`
```
<div id="result">Result: -</div>
```
- A div element that will display the conversion result. Initially set to - until the conversion is performed.

---

### `<script> - JavaScript File`

```
<script src="./script.js"></script>
```
- Loads the script.js file, which contains the logic for performing the unit conversion

---

### `🎨 style.css – Styling the Application`

### `GLOBAL RESET AND BOX MODEL`
- Removes default spacing added by browsers.
- Sets box-sizing to border-box so padding and border are included in the element's total size.

```
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```
---

### `BODY STYLING`
- Applies a dark background for a modern, sleek look.
- Sets a clean and readable font (Segoe UI).
- Centers the content with flexbox.
- Adds padding around the page for spacing.
- Sets light text for contrast against the dark background.

```
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #121212;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}
```
---

### `MAIN CONTAINER`
- Wraps the entire app content.
- Centers it horizontally and vertically with flex in the body.
- Applies a dark card-like background with padding.
- Adds rounded corners and a subtle glowing shadow.

```
.container {
  background-color: #1e1e1e;
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}
```   
---

### `HEADING / TITLE`
- Centers the heading and gives it a bottom margin for spacing.
- Uses a larger font size for visibility and emphasis.

```
h1 {
  text-align: center;
  margin-bottom: 24px;
  font-size: 1.8rem;
}
```
---

### `FORM-GROUP STYLING`
- Adds margin between form elements.
- Provides clear label styling with font size and color for accessibility.

```
.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 6px;
  color: #bbb;
  font-size: 0.95rem;
}
```
---

### `INPUT AND SELECT`
- Styles input and select elements to have full width.
- Adds padding, a border, and rounded corners for a clean input experience.
- Includes a focus effect to highlight elements when active.

```
input, select {
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid #444;
  border-radius: 8px;
  background-color: #2a2a2a;
  color: #fff;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus, select:focus {
  border-color: #2196f3;
  box-shadow: 0 0 6px #2196f3;
  outline: none;
}

```
---

### `BUTTON STYLING`
- Full width button with padding and a blue background.
- Adds a hover effect for interactivity with a color change.

```
button {
  width: 100%;
  padding: 12px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1976d2;
}

```
---

### `RESULT DISPLAY`
- Styles the result section with centered text and a larger font.
- Applies a color to make the result stand out (light blue).

```
#result {
  text-align: center;
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #90caf9;
}
---

### `🧠 script.js – JavaScript Functionality`

---

### `const conversionRates = {...}`
- This object holds the conversion rates for various units to meters.
- Each unit is mapped to its equivalent value in meters for easy conversion.

```
const conversionRates = {
  meter: 1,
  kilometer: 0.001,
  mile: 0.000621371,
  foot: 3.28084
};
```
---
### `function convert()` 
- Purpose: This function performs the unit conversion when called.
- Retrieves the input value, selected units, and the result element.
- Validates the input to ensure it is a number.
- Converts the input value to meters, then applies the conversion for the desired unit.
- Displays the result in the designated result element with 4 decimal precision.

```js
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
  };

```

---

### `if (isNaN(input))`
- This checks if the entered value is a valid number.
- If not, it prompts the user to enter a valid number by displaying a message in the result section.

```
if (isNaN(input)) {
  resultDiv.textContent = "Please enter a valid number.";
  return;
}
```
---

### `const valueInMeters = input / conversionRates[fromUnit];`
- This converts the input value into meters, which is the base unit for the conversion.
- The fromUnit is used to get the correct conversion factor from the conversionRates object.

---

### `const convertedValue = valueInMeters * conversionRates[toUnit];`
- Once the value is in meters, this line converts the value to the desired unit by multiplying with the appropriate conversion rate for the toUnit.

---
### `resultDiv.textContent = \Result: ${convertedValue.toFixed(4)} ${toUnit}`;`
- Displays the result of the conversion in the resultDiv.
- The toFixed(4) method rounds the result to 4 decimal places for precision.

---

## ✅ Summary of Functions

1. **`convert()`** – Main function that reads user input, calculates the converted value, and updates the result.
2. **`document.getElementById(...).value`** – Retrieves input values from the DOM.
3. **Unit conversion logic** – Applies appropriate formulas between selected units.
4. **`result.innerText`** – Updates the UI with the final converted value.

---

## ✨ Features

| Feature                  | Description                                                  |
|--------------------------|--------------------------------------------------------------|
| 🔁 Unit-to-Unit Conversion | Converts between meters, kilometers, miles, and feet         |
| ✍️ User Input Validation   | Ensures numeric input before performing conversions          |
| 🧮 Accurate Calculation     | Uses standard formulas for reliable conversions              |
| 📲 Responsive Layout        | Adapts to different screen sizes, mobile-friendly            |
| 🧑‍💻 Beginner Friendly       | Simple structure for easy understanding and modification      |


---

## 🎨 UX & Styling Highlights

- **Clean Input Design**: Uses labeled form groups for better accessibility.
- **Responsive Containers**: Ensures usability on mobile and desktop.
- **Modern Font Choices**: Simple and readable font setup.
- **Consistent Button Styling**: Clear call-to-action with spacing and hover effect.

---

## 💾 Data Persistence

- ❌ No data persistence – This app performs on-the-fly conversion with no storage requirements.

---

## 🏁 Conclusion

This **Unit Converter** project is ideal for learning how to:

- Work with form inputs and select elements
- Manipulate the DOM using JavaScript
- Perform mathematical conversions
- Build responsive and accessible layouts

> 💻 [Explore the full project on GitHub](https://github.com/PoonamChauhan229/Unit-Converter-Js-Projects)
