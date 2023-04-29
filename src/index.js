import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar, FooterComp, Home, Info, Contact
} from "./components"
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/400.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const fonts = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
  },
  
});

ReactDOM.render(
<ThemeProvider theme={fonts}>
<CssBaseline/>
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/info" element={<Info/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  <FooterComp/>
</Router>
</ThemeProvider>,




document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();