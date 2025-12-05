import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Python from "../src/course/Python"
import Java from "../src/course/Java"
import DotNet from "../src/course/DotNet"
// import Navbar from './Navbar'
import Navbar from './course/Navbar'
import Register from './course/Register'


const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/python" component={Python}></Route>
                <Route path="/java" component={Java}></Route>
                <Route path="/dotnet" component={DotNet}></Route>
                <Route path="/register" component={Register}></Route>
            </Switch>
        </div>
    )
}

export default App;