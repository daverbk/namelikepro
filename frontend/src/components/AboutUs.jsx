import {Component} from "react";
import UserCard from "./UserCard";

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <h1>About Us</h1>
                <div className="users">
                    <UserCard
                        name="Andrei Dydzik"
                        imgLink="https://avatars.githubusercontent.com/u/61758606?v=4"
                        desc="doing some crazy stuff with Java & PHP"
                        usernameGitHub="Elovard"
                        usernameLinkedIn="andrei-dydzik"
                    />
                    <UserCard
                        name="David Rabko"
                        imgLink="https://avatars.githubusercontent.com/u/98875282?v=4"
                        desc="🚀 Test Automation Engineer by day, Code Ninja-in-Training by night! 💻"
                        usernameGitHub="daverbk"
                        usernameLinkedIn="daverbk"
                    />
                </div>
                <p className="star-us">
                    If you'd like to support our beginning
                    please smash a star to the
                    <a href="https://github.com/daverbk/namelikepro" target="_blank"> project's repo ⭐</a>
                </p>
            </div>
        );
    }
}

export default AboutUs;
