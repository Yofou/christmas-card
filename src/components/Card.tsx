import { useEffect, useState } from 'react'
import '../styles/card.css'

export const Card = () => {
  const [isBlur, setIsBlur] = useState(true)
  const [cardNumber, setCardNumber] = useState<string | null>(null)
  const [cardPin, setCardPin] = useState<string | null>(null)

  const onClick = () => {
    setIsBlur(false)
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const number = urlParams.get('cardNumber');
    const pin = urlParams.get('cardPin');

    if (pin == null || number == null) {
      return
    }

    setCardNumber(number)
    setCardPin(pin)
  }, [])

  if (cardNumber == null || cardPin == null) {
    return <></>
  }

  return <div 
    className={`card digital eight text-left mt-4 transition-[filter] ${isBlur ? 'blur-sm' : ''}`}
    onClick={onClick}
  >
      <div className="card-top">
        <span>Virtual</span>
        <img className='scale-150 translate-x-[-20px]'  src="/assests/uk.svg" />
      </div>
      <div className="card-bottom">
        <div className="card-name">
          <p className='title'>Card Number</p>
          <p className='value'>{cardNumber}</p>

          <p className='title'>Pin</p>
          <p className='value'>{cardPin}</p>
        </div>
      </div>
    </div>
}
