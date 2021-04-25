import React from "react";
import KegControl from "./KegControl";


function App(){
  return (
    <React.Fragment>
      <div className="container">
        
        <div className="header">header</div>
        <div className="nav">
          <div className="kegControl">
          </div>
        </div>
        <div className="content">content</div>
        <div className="footer">
          <KegControl />
        </div>
      </div>
    </React.Fragment>

)
}

export default App;