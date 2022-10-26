import React, { useState } from 'react'
import Button from '../Button';
import "./WorkSpace.css"

const WorkSpace = ({switchTab}) => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceUrl, setWorkspaceUrl] = useState("");

  return (
    <div>
      <div>
        <h2>Welcome! First things first...</h2>
        <p>You can always change them later.</p>
      </div>
      <div className="form-fields">
        <div>
          <label htmlFor="workspace-name">Workspace Name</label>
          <input placeholder="Eden" type="text" name="workspace-name" value={workspaceName} onChange={(e) => setWorkspaceName(workspaceName => e.target.value)} />
        </div>
        <div>
          <div>
            <label htmlFor="workspace-url">Workspace URL</label>
            <span>{`( optional )`}</span>
          </div>
          <div>
            <div className="disabled-url">www.eden.com/</div>
            <input placeholder="Example" className="url-input" type="text" name="workspace-url" value={workspaceUrl} onChange={(e) => setWorkspaceUrl(workspaceUrl => e.target.value)} />
          </div>
        </div>
      </div>
      <Button heading="Create Workspace" onClick={() => switchTab("3")} />      
    </div>
  )
}

export default WorkSpace