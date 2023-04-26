import React from "react";
import Nav from "./Nav";
import ForegroundInterface from "./ForegroundInterface";

import { DialogueData } from "./data";


const LandingPage = () => {


  return (
    <div>
      <header>
        <h1 className="header">Visual Noval ReactJS</h1>
        {/* <Nav /> */}
      </header>

      <main>
        <ForegroundInterface data={DialogueData}/>
        <div className="intro-div">
          <p>This is a simple visual noval template made with React JS.</p>
        </div>
        
      </main>

      <footer className="contact" id="contact">
        <p>
          <strong>Email :</strong> tira.zzhang@gmail.com
        </p>
        <p>
          <strong>Website :</strong> www.artstation.com/ziyuzhang1
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
