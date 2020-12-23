import { Component } from '@angular/core';
import { numberToWordConverter } from './utility/numberToWordConverter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  inputNumber: String = '';
  outputWords: String = '';

  clickConvert(inputNumber) {
    if (!inputNumber) {
      alert('Please enter a number');
      this.clearInputAndOutputs();
      return;
    } else {
      const positiveIntegerRegex = /^[0-9]*$/ //includes zero
      const isValidPositiveInteger = positiveIntegerRegex.exec(inputNumber);

      if (!isValidPositiveInteger) {
        alert('Invalid Input - Not a positive integer');
        this.clearInputAndOutputs();
        return;
      } else if (inputNumber.toString().length > 9) {
        alert('Invalid Input - Only numbers under 1 billion are currently supported');
        this.clearInputAndOutputs();
      } else {
        this.outputWords = numberToWordConverter(inputNumber);
      }
    }
  }

  clearInputAndOutputs() {
    this.inputNumber = '';
    this.outputWords = '';
  }

}
