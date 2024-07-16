function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  // display yae show kr rha hai kae display wali jaga pr jo value hai wo '' empty ho jae
  // function calculateResult() {
  //   const display = document.getElementById('display');
  //   try {
  //     display.value = eval(display.value);
  //   } catch {
  //     display.value = 'Error';
  //   }
  // }
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      // Use math.evaluate to safely evaluate the mathematical expression
      const result = math.evaluate(display.value);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }