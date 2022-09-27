const Output = ({ total, totalTipPerPerson, setBillAmount, setNumberOfPeople }) => {

  const handleReset = () => {
    setNumberOfPeople('')
    setBillAmount('')
  }

  return (
    <div className="output">
      <div className="output-group">
        <div className="output-row">
          <p className="header">Tip Amount</p>
          <p className="unit">/ person</p>
        </div>
        <p className="output-amount">
          {totalTipPerPerson
            ? `$${parseFloat(totalTipPerPerson).toFixed(2)}`
            : '$0.00'}
        </p>
      </div>
      <div className="output-group">
        <div className="output-row">
          <p className="header">Total</p>
          <p className="unit">/ person</p>
        </div>
        <p className="output-amount">
          {total ? `$${parseFloat(total).toFixed(2)}` : '$0.00'}
        </p>
      </div>
      <div className="total"></div>
      <button type="button" className="btn" onClick={handleReset}>
        RESET
      </button>
    </div>
  )
}
export default Output
