import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from './Components/Launches.jsx';
import logo from "./assets/logo.jpg";
const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: "20%",display: 'block',margin: 'auto'}}
        />
        <Launches/>
      </div>
    </ApolloProvider>
  );
}

export default App;
