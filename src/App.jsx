import logo from './assets/logo.svg'
import Form from './components/Form'
import Output from './components/Output'
import { useEffect, useState } from 'react'

function App() {
  const [billAmount, setBillAmount] = useState()
  const [tipPercent, setTipPercent] = useState()
  const [numberOfPeople, setNumberOfPeople] = useState()

  const [totalTipPerPerson, setTotalTipPerPerson] = useState()
  const [totalPerPerson, setTotalPerPerson] = useState()

  useEffect(() => {
    let tip = billAmount * (tipPercent / 100)

    if (tipPercent) {
      setTotalPerPerson(
        (parseFloat(billAmount) + tip) /
          (numberOfPeople > 0 ? numberOfPeople : 1)
      )
    } else {
      setTotalPerPerson(billAmount / (numberOfPeople > 0 ? numberOfPeople : 1))
    }

    setTotalTipPerPerson(tip / (numberOfPeople > 0 ? numberOfPeople : 1))
  }, [billAmount, numberOfPeople, tipPercent])

  return (
    <div className="wrapper">
      <h1>
        <img src={logo} alt="Splitter logo" />
      </h1>
      <div className="container">
        <Form
          billAmount={billAmount}
          setBillAmount={setBillAmount}
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
          setTipPercent={setTipPercent}
        />
        <Output total={totalPerPerson} totalTipPerPerson={totalTipPerPerson} setBillAmount={setBillAmount} setNumberOfPeople={setNumberOfPeople}/>
      </div>
    </div>
  )
}

export default App
