import {Component} from "react";
import NicknameForm from './NicknameForm'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="site-info">
                    <h2 className="site-title">
                        Name It
                    </h2>
                    <div className="site-description">
                        <p>
                            Just enter two words and select if you want to add postfix / special characters / adjective :)
                            If all the checks are activated you'll get something like
                        </p>
                        <code>߷ VibrantDaMaverick ߷</code>
                    </div>
                </div>
                <NicknameForm/>
            </div>
        );
    }
}

export default Home;
