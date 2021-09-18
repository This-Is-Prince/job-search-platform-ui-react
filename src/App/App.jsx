import React, { useReducer } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import Reducer from "./Reducer";
import State from "./State";

import AppContext from "./AppContext";
import ChooseJob from "../components/ChooseJob";

const App = () => {
  const [appState, dispatch] = useReducer(Reducer, State);
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {appState.isJobModalOpen ? (
        <>
          <Header classList="isBlur" />
          <Content classList="isBlur" />
        </>
      ) : (
        <>
          <Header />
          <Content />
        </>
      )}

      <ChooseJob
        classes={`modalClose  ${
          appState.isJobModalOpen ? "modalAnimateStart" : "modalAnimateEnd"
        }`}
      />
    </AppContext.Provider>
  );
};

export default App;
