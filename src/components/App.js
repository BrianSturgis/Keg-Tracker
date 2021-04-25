import React from "react";
import KegControl from "./KegControl";


function App(){
  return (
    <React.Fragment>
      <div className="container">
        <div className="logo"></div>
        <div className="header"></div>
        <div className="nav">
        </div>
        <div className="content"></div>
        <div className="footer"></div>
        <KegControl />
      </div>
    </React.Fragment>

)
}

export default App;