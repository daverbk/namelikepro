import {Component} from "react";
import {Route, Router, Switch} from "react-router-dom";
import Home from "./components/Home";
import { createBrowserHistory } from 'history'
import './style/App.css';
import AboutUs from "./components/AboutUs";
const newHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={newHistory}>
                <Switch>
                    <Route path='/' component={Home}/>
                    <Route path='/about' component={AboutUs}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
