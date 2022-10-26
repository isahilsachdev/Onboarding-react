import React, { useState } from 'react'
import "./UseCase.css"
import singleUser from "../../assets/singleUser.png"
import multiUser from "../../assets/multiUser.png"
import Button from '../Button';

const UseCase = ({ switchTab }) => {
  const [useCase, setUseCase] = useState("");

  return (
    <div>
      <div>
        <h2>How are you planning to use Eden?</h2>
        <p>We'll streamline your setup experience accordingly.</p>
      </div>
      <div className="plan-container">
        <div onClick={() => setUseCase("1")} className={`plan-box ${useCase === "1" && "active"}`}>
          <img src={singleUser} alt="single-user" />
          <h5>For myself</h5>
          <p>Write better, Think more clearly. Stay organised</p>
        </div>
        <div onClick={() => setUseCase("2")} className={`plan-box ${useCase === "2" && "active"}`}>
          <img src={multiUser} alt="multi-user" />
          <h5>With my team</h5>
          <p>Wikis, docs, tasks and projects, all in one place.</p>
        </div>
      </div>
      <Button heading="Create Workspace" onClick={() => switchTab("4")} />      
    </div>
  )
}

export default UseCase