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
      {appState.isJobModalOpen && <ChooseJob classes="modalClose" />}
    </AppContext.Provider>
  );
};

export default App;
