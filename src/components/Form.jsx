import dollar from '../assets/icon-dollar.svg'
import person from '../assets/icon-person.svg'
import { useEffect, useState } from 'react'

const Form = ({
  billAmount,
  setBillAmount,
  numberOfPeople,
  setNumberOfPeople,
  setTipPercent,
}) => {
  const [customTip, setCustomTip] = useState()
  const [selectRadio, setSelectRadio] = useState()

  const isRadioSelected = (value) => selectRadio === value

  const handleRadioClick = (e) => {
    setSelectRadio(e.target.value)
    setCustomTip('')
  }

useEffect(() => {
  billAmount == 0 ? setSelectRadio('') : null
}, [billAmount])


  // https://stackoverflow.com/a/28838789/18399182
  const handleBillChange = (e) => {
    setBillAmount(
      e.target.value
        .replace(/[^0-9.]/g, '')
        .replace(/(\..*?)\..*/g, '$1')
        .replace(/^0[^.]/, '0')
        .replace(/(\.\d{2}).+/g, '$1')
    )
  }

  const handlePeopleChange = (e) => {
    setNumberOfPeople(e.target.value.replace(/\D/g, ''))
  }

  const handleTipAmount = (e) => {
    setTipPercent(e.target.value)
  }

  const handleCustom = (e) => {
    setSelectRadio('')
    setCustomTip(
      e.target.value
        .replace(/[^0-9.]/g, '')
        .replace(/(\..*?)\..*/g, '$1')
        .replace(/^0[^.]/, '0')
        .replace(/(\.\d{2}).+/g, '$1')
    )
  }

  return (
    <div className="form">
      <div className="form-group">
        <label className="label" htmlFor="bill">
          Bill
        </label>

        <div className="number-wrapper">
          <img src={dollar} aria-hidden="true" className="icon" />
          <input
            type="text"
            id="bill"
            className="number-input"
            placeholder="0"
            value={billAmount}
            onChange={handleBillChange}
          />
        </div>
      </div>

      <div className="tip-selection">
        <label className="label" htmlFor="tip">
          Select Tip %
        </label>
        <div className="tip-amount-wrapper">
          <div className="tip-amount">
            <input
              onChange={handleRadioClick}
              checked={isRadioSelected('5')}
              type="radio"
              value="5"
              name="tip"
              onInput={handleTipAmount}
            />
            <div className="tip-btn">5%</div>
          </div>
          <div className="tip-amount">
            <input
              onChange={handleRadioClick}
              checked={isRadioSelected('10')}
              type="radio"
              value="10"
              name="tip"
              onInput={handleTipAmount}
            />
            <div className="tip-btn">10%</div>
          </div>
          <div className="tip-amount">
            <input
              onChange={handleRadioClick}
              checked={isRadioSelected('15')}
              type="radio"
              value="15"
              name="tip"
              onInput={handleTipAmount}
            />
            <div className="tip-btn">15%</div>
          </div>
          <div className="tip-amount">
            <input
              onChange={handleRadioClick}
              checked={isRadioSelected('25')}
              type="radio"
              value="25"
              name="tip"
              onInput={handleTipAmount}
            />
            <div className="tip-btn">25%</div>
          </div>
          <div className="tip-amount">
            <input
              onChange={handleRadioClick}
              checked={isRadioSelected('50')}
              type="radio"
              value="50"
              name="tip"
              onInput={handleTipAmount}
            />
            <div className="tip-btn">50%</div>
          </div>

          <div className="tip-amount">
            <input
              type="text"
              placeholder="Custom"
              className="number-input tip-custom"
              value={customTip}
              onChange={handleCustom}
              onInput={handleTipAmount}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="label" htmlFor="number-of-people">
          Number of People
        </label>

        <div className="number-wrapper">
          <img src={person} aria-hidden="true" className="icon" />
          <input
            type="text"
            id="bill"
            className="number-input"
            placeholder="0"
            value={numberOfPeople}
            onChange={handlePeopleChange}
          />
        </div>
      </div>
    </div>
  )
}
export default Form
