import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from './Components/Launches.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launch from './Components/Launch';
import logo from "./assets/logo.jpg";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: "20%",display: 'block',margin: 'auto'}}
          />
          <Route exact path='/' component={Launches}/>
          <Route exact path='/launch/:flight_number' component={Launch}/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
