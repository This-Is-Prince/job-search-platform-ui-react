import React, { useReducer } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import Reducer from "./Reducer";
import State from "./State";

import AppContext from "./AppContext";
import ChooseJob from "../components/ChooseJob";
import JobModal from "../components/Model/JobModal";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [appState, dispatch] = useReducer(Reducer, State);
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <Router>
        <Switch>
          <Route exact path="/">
            {appState.isJobSearchModalOpen ? (
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
                appState.isJobSearchModalOpen
                  ? "modalAnimateStart"
                  : "modalAnimateEnd"
              }`}
            />
          </Route>
          <Route path="/job/:id">
            {appState.isJobSearchModalOpen ? (
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
                appState.isJobSearchModalOpen
                  ? "modalAnimateStart"
                  : "modalAnimateEnd"
              }`}
            />
            <JobModal />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
