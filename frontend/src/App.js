import {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './style/App.css';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<AboutUs/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;
