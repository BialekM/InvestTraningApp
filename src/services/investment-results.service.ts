// Use the below code as a help
// e.g., integrate it into a service or component

import { Inject, Injectable } from "@angular/core";
import { initialInvestmentModel } from "../models/initial-InvestmentModel";

@Injectable({providedIn: 'root'})

export class InvestmentResultsService {
  calculateInvestmentResults(data: initialInvestmentModel): any[] {
  const annualData = [];
  let investmentValue = data.initialInvestment;

  for (let i = 0; i < data.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
    investmentValue += interestEarnedInYear + data.annualInvestment;
    const totalInterest =
      investmentValue - data.annualInvestment * year - data.initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: data.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
    });
  }

  return annualData;
}
}
