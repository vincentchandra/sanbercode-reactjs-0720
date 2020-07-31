import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 style={{textAlign:"center"}}>Form Pembelian Buah</h1>
      <div style = {{display:"block"}}>
        <div className = "sub" >Nama Pelanggan</div>
        <input style = {{display:"inline-block"}} type="text" name="name"></input>
      </div>
      <div style = {{display:"block", paddingTop:"20px"}}>
       <div className="sub">Daftar Item</div>
       <div style={{display:"inline-block",}}>
         <div style={{display:"block"}}>
           <input style = {{display:"inline-block"}} type="radio" name="fruit" value="semangka"></input>
           <label for="semangka">Semangka</label>
         </div>
         <div style={{display:"block"}}>
          <input style = {{display:"inline-block"}} type="radio" name="fruit" value="jeruk"></input>
          <label for="jeruk">Jeruk</label>
         </div>
         <div style={{display:"block"}}>
           <input style = {{display:"inline-block"}} type="radio" name="fruit" value="nanas"></input>
           <label for="nanas">Nanas</label>
         </div>
         <div style={{display:"block"}}>
           <input style = {{display:"inline-block"}} type="radio" name="fruit" value="salak"></input>       
           <label for="salak">Salak</label>    
         </div>
         <div style={{display:"block"}}>
           <input style = {{display:"inline-block"}} type="radio" name="fruit" value = "anggur"></input>
           <label for="anggur">Anggur</label>
         </div>
       </div>
      </div>
    </div>
    

  );
}

export default App;
