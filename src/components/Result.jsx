import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ investmentData }) {
  const parsedData = calculateInvestmentResults(investmentData);

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {parsedData.map((item) => {
            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>
                  {formatter.format(
                    item.valueEndOfYear -
                      investmentData.initialInvestment -
                      item.annualInvestment * item.year,
                  )}
                </td>
                <td>
                  {formatter.format(
                    investmentData.initialInvestment +
                      item.annualInvestment * item.year,
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
