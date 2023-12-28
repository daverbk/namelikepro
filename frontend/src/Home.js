import {Component} from "react";
import NicknameForm from './NicknameForm'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="site-info">
                    <h2 className="site-title">
                        // change title
                    </h2>
                    <div className="site-description">
                        <p>
                            // change description
                        </p>
                    </div>
                </div>
                <NicknameForm/>
            </div>
        );
    }
}
export default Home;