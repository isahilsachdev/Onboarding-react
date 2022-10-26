import React, { useState } from 'react'
import success from "../../assets/success.png"
import Button from '../Button';

const Launch = ({switchTab}) => {
  const [isLaunch, setIsLaunch] = useState(false);
  return (
    <div>
      <img style={{ width: '70px', height: '70px'}} src={success} alt="success" />
      <h2>Congratulations, Eren!</h2>
      <p>You have completed onboarding, You can start using the Eden!</p>
      <Button heading="Launch" onClick={() => {setIsLaunch(true)}} />
      {isLaunch && (
        <p>Thank you for Onboarding.</p>
      )}
    </div>
  )
}

export default Launch