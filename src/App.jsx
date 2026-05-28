import {useState} from "react";

import UserInput from "./components/UserInput";

function App() {
  const [ investmentData, setInvestmentData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  })

    function handleInputChange(e){
        const {id, value} = e.target;
        setInvestmentData(prev => ({
            ...prev,
            [id]: Number(value)
        }))
    }

  return (
    <>
    <UserInput data={investmentData} handleInputChange={handleInputChange} />

    
    </>
  )
}

export default App
