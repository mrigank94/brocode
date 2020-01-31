import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import PrimarySearchAppBar from "./components/appBar";
import HomePage from "./components/homePage";

function App() {
    return (
        <>
            <PrimarySearchAppBar/>
            <HomePage/>
        </>
    );
}

export default App;
