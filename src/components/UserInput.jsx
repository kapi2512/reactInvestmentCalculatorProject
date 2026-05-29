export default function UserInput({ data, handleInputChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input
          type="number"
          id="initialInvestment"
          value={data.initialInvestment}
          onChange={handleInputChange}
        />
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input
          type="number"
          id="annualInvestment"
          value={data.annualInvestment}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="expectedReturn">Expected Return (%)</label>
        <input
          type="number"
          id="expectedReturn"
          value={data.expectedReturn}
          onChange={handleInputChange}
        />

        <label htmlFor="duration">Duration (years)</label>
        <input
          type="number"
          id="duration"
          value={data.duration}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
