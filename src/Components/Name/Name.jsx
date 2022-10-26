import React, { useState } from 'react'
import Button from '../Button';
import "../FormFields.css"

const Name = ({switchTab}) => {
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");

  return (
    <div>
      <div>
        <h2>Welcome! First things first...</h2>
        <p>You can always change them later.</p>
      </div>
      <div className="form-fields">
        <div>
          <label htmlFor="first-name">Full Name</label>
          <input placeholder="Steve jobs" type="text" name="first-name" value={fullName} onChange={(e) => setFullName(fullName => e.target.value)} />
        </div>
        <div>
          <label htmlFor="last-name">Display Name</label>
          <input placeholder="Steve" type="text" name="last-name" value={displayName} onChange={(e) => setDisplayName(displayName => e.target.value)} />
        </div>
      </div>
      <Button heading="Create Workspace" onClick={() => switchTab("2")} />      
    </div>
  )
}

export default Name