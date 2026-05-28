export default function UserInput({data, handleInputChange}) {



  return (
    <div id="user-input">
      <label>Initial Investment</label>
      <label>Annual Investment</label>

      <div className="input-group">
        <input type="number" min="0" id="initialInvestment" value={data.initialInvestment} onChange={(e) => handleInputChange(e)} />
        <input type="number" min="0" id="annualInvestment" value={data.annualInvestment} onChange={(e) => handleInputChange(e)} />
      </div>

      <div className="input-group">
        <label>Expected Return</label>
        <label>Duration</label>
      </div>

      <div className="input-group">
        <input type="number" min="0" id="expectedReturn" value={data.expectedReturn} onChange={(e) => handleInputChange(e)} />
        <input type="number" min="0" id="duration" value={data.duration} onChange={(e) => handleInputChange(e)} />
      </div>
    </div>
  );
}
