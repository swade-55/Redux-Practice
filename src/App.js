import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useSelector} from 'react-redux'
function App() {
  const cart = useSelector(state=>state.cart)
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
  // useEffect(()=>{
  //   const sendRequest = async ()=>{
  //     const res = await fetch('http://localhost:3001/cartItems',{
  //       method:'PUT',
  //       body:JSON.stringify(cart)})
  //       const data = await res.data.json()

  //   }
  //   sendRequest();
    
  // },[cart])
  return (
    <div className="App">
    {!isLoggedIn && <Auth />}
    {isLoggedIn && <Layout />}
      
    </div>
  );
}

export default App;
