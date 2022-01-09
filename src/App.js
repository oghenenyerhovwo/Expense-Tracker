// importing tools from node modules
import {Container} from "react-bootstrap"
import React, {useEffect} from 'react';
import {useDispatch} from "react-redux"

// importing components
import Header from "./components/Header"
import TransactionBoard from "./components/TransactionBoard"
import TransactionBalance from "./components/TransactionBalance"
import TransactionHistory from "./components/TransactionHistory"
import AddTransaction from "./components/AddTransaction"
import AlertComponent from "./components/AlertComponent"

// importing functions and objects from other files
import {getItems} from "./actions/listActions"

// importing css
import "./App.css"
import "./bootstrap.min.css"


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])
  return (
    <div>
      <div className="app-container"> 
        <Container > 
          <AlertComponent />
          <Header />
          <TransactionBalance />
          <TransactionBoard />
          <TransactionHistory />
          <AddTransaction />
        </Container>
      </div>
    </div>
  );
}

export default App;
