import {Component} from "react";
import NicknameForm from './NicknameForm'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="site-info">
                    <h2 className="site-title">
                        Name It
                    </h2>
                    <div className="site-description">
                        <p>
                            Just enter two words and select if you want to add postfix / special characters / adjective
                            :)
                            If all the checks are activated you'll get something like
                        </p>
                        <code>߷ VibrantDaMaverick ߷</code>
                        <p>
                            p.s. as we are hosting on AWS Lambda, please be patient with the first request,
                            it may take 3-5 seconds to process, all the following requests will be served quickly
                        </p>
                    </div>
                </div>
                <NicknameForm/>
                <a href="/about" className="about-us-btn">About Us</a>
            </div>
        );
    }
}

export default Home;
