import { Component, inject, Inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { initialInvestmentModel } from '../models/initial-InvestmentModel';
import { InvestmentResultsService } from '../services/investment-results.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, CurrencyPipe],
})
export class AppComponent {
  resultData: any[] | undefined;

  private investmentResultsService: InvestmentResultsService = inject(
    InvestmentResultsService
  );

  onCalculateInvestmentResults(initialInvestment: initialInvestmentModel) {
    this.resultData =
      this.investmentResultsService.calculateInvestmentResults(
        initialInvestment
      )
  }
}
