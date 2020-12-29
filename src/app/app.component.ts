import { Component } from '@angular/core';
import { convertNumberToWordIncludeNegatives } from './utility/convertNumberToWord';
import { regexConstants } from './utility/regexConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  inputNumber: String = '';
  outputWords: String = '';
  MAX_NUMBER = 999999999;
  MIN_NUMBER = -999999999;

  clickConvert(inputNumber) {
    if (!inputNumber && inputNumber !== 0) {
      alert('Please enter a number');
      this.clearInputAndOutputs();
      return;
    } else {
      let isValidInteger = regexConstants.POSITIVE_AND_NEGATIVE_INTEGERS.test(inputNumber);
      let inputNumberIntParse = parseInt(inputNumber);

      if (!isValidInteger) {
        alert('Invalid Input - Not a positive or negative integer');
        this.clearInputAndOutputs();
        return;
      } else if (inputNumberIntParse > this.MAX_NUMBER || inputNumberIntParse < this.MIN_NUMBER) {
        alert('Invalid Input - Only numbers under 1 billion or above negative 1 billion are currently supported');
        this.clearInputAndOutputs();
      } else {
        this.outputWords = convertNumberToWordIncludeNegatives(inputNumber.toString());
      }
    }
  }

  clearInputAndOutputs() {
    this.inputNumber = '';
    this.outputWords = '';
  }

}
