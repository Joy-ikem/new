import React, { useState } from 'react';
import "./App.css";
import "./index.css";
import Intro from './Components/Intro';
import Form from "./Components/Form";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative">
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <Form />
      )}
    </div>
  );
};

export default App;
