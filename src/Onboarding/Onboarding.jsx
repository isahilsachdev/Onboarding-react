import React, { useState } from 'react'
import Launch from '../Components/Launch/Launch';
import Name from '../Components/Name/Name';
import UseCase from '../Components/UseCase/UseCase';
import WorkSpace from '../Components/WorkSpace/WorkSpace';
import "./Onboarding.css";
import edenLogo from "../assets/eden.png"

const Onboarding = () => {
  const [tab, setTab] = useState("1");
  
  const switchTab = (tabNum) => {
    setTab(tabNum);
  };

  const renderTabDetails = () => {
    return (
      tab === "1" ? (
        <Name switchTab={switchTab} />
      ) : tab === "2" ? (
        <WorkSpace switchTab={switchTab} />
      ) : tab === "3" ? (
        <UseCase switchTab={switchTab} />
      ) : (
        <Launch switchTab={switchTab} /> 
      )
    )
  };

  return (
    <div className="onboarding-component">
      <div className="onboarding-header">
        <img src={edenLogo} alt="eden-logo" />
        <h3>
          Eden
        </h3>
      </div>

      <div className="onboarding-tabs">
        <div className="tab-pills-component active">
          <div className="tab-pills" onClick={() => setTab("1")}>1</div>
          <div className="tab-connecting-line" />
        </div>
        <div className={`tab-pills-component ${tab >= "2" && 'active'}`}>
          <div className="tab-connecting-line" />
          <div className="tab-pills" onClick={() => setTab("2")}>2</div>
          <div className="tab-connecting-line" />
        </div>
        <div className={`tab-pills-component ${tab >= "3" && 'active'}`}>
          <div className="tab-connecting-line" />
          <div className="tab-pills" onClick={() => setTab("3")}>3</div>
          <div className="tab-connecting-line" />
        </div>
        <div className={`tab-pills-component ${tab === "4" && 'active'}`}>
          <div className="tab-connecting-line" />
          <div className="tab-pills" onClick={() => setTab("4")}>4</div>
        </div>
      </div>

      <div className="onboarding-form">
        {
          renderTabDetails()
        }
      </div>
    </div>
  )
}

export default Onboarding