import {Component} from "react";
import {Route, Router, Switch} from "react-router-dom";
import Home from "./components/Home";
import { createBrowserHistory } from 'history'
import './style/App.css';
const newHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={newHistory} basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path='/' component={Home}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
