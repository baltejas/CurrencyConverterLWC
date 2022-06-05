import { LightningElement, track } from 'lwc';
import convert from '@salesforce/apex/CurrencyConverterService.convert';

export default class CurrencyConverter extends LightningElement {

  sourceCurrency = 'USD';
  targetCurrency = 'GBP';
  amount = '';
  @track convertedAmount;

  get options() {
    return [
        { label: 'US Dollar', value: 'USD' },
        { label: 'Great Britian Pound', value: 'GBP' },
        { label: 'Indian Rupee', value: 'INR' }
    ];
  }

  handleSourceChange(event) {
    this.sourceCurrency = event.detail.value;
  }

  handleTargetChange(event) {
    this.targetCurrency = event.detail.value;
  }

  handleAmountChange(event) {
    this.amount = event.detail.value;
  }
  
  handleConvert(event) {
    convert({sourceCurrency:this.sourceCurrency, targetCurrency:this.targetCurrency, amount: this.amount}).then(result => {
        this.convertedAmount = result;
        console.log(result);
    });
  }

}