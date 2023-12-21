import {Component} from "react";
import NicknameForm from './NicknameForm'

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Super duper form for nicknames</h2>
                <NicknameForm/>
            </div>
        );
    }
}
export default Home;