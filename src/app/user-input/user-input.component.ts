import { Component, EventEmitter, inject, Inject, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initialInvestmentModel } from '../../models/initial-InvestmentModel';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() investmentSubmitted = new EventEmitter<initialInvestmentModel>();

  onSubmit() {
    this.investmentSubmitted.emit({
      initialInvestment: this.enteredInitialInvestement,
      duration: this.enteredDuration,
      expectedReturn: this.enteredExpectedReturn,
      annualInvestment: this.enteredAnnualInvestement
    });
  }

  enteredInitialInvestement: number = 0;
  enteredAnnualInvestement: number = 0;
  enteredExpectedReturn: number = 5;
  enteredDuration: number = 10;
}
