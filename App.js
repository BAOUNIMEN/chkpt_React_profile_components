import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Section1 from './components/Section1';
// import Section2 from './components/Section2';
// import Section3 from './components/Section3';
// import Test from './components/Test';
// import Profile from './components/Profile';
// import Name
//  from "./components/Name";

import FullName from "./components/profile/FullName";
import Bio from "./components/profile/Bio";
import Profession from "./components/profile/Profession";




function App() {
  const handlName = (FullName) => {
    alert(`${'This user is:IMEN Ben Aoun'}`);
  };
  return (
    <div className="App">
      <body style={{ margin: "150px 100px", fontSize: "1.2rem" }}>
        <h1>Self-Profile </h1>

        <FullName firstName="IMEN" lastName="BenAoun">
          <p>Glad to know you</p>
        </FullName>
        <br />
        <div style={{ border: "black double", marginTop: "20px", }} id="about">
          <Bio FullName="IMEN BenAoun" Age="30" Gender="Female" Interests="Learning, Sport, Music, Taking care of animals" />
        </div>
        <br />
        <div id="profession"><Profession /></div>
        <button onClick={handlName}>User</button>
        
        
      </body>
    </div>
  );
}

export default App;
