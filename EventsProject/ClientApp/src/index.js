import React from "react";
import ReactDom from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';


const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);

root.render(
    <App />
);
