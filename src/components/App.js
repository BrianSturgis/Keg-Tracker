import React from "react";
import KegControl from "./KegControl";


function App(){
  return (
    <React.Fragment>
      <div className="container">
        <div className="header">Keg Tracker</div>
        <div className="content">keg details </div>
        <div className="footer">
          <h3>buttons</h3>
          <KegControl />
        </div>
      </div>
    </React.Fragment>

)
}

export default App;