import {Component} from "react";

class UserCard extends Component {
    render() {
        return (
            <div className="user-column">
                <img src={this.props.imgLink} alt={this.props.name} className="user-image"/>
                <span className="user-name">{this.props.name}</span>
                <p>{this.props.desc}</p>
                <div className="socials">
                    <a href={`https://www.linkedin.com/in/${this.props.usernameLinkedIn}`} className="linkedin"
                       target="_blank">
                        <img src={`${process.env.PUBLIC_URL}/resources/linkedin.svg`} alt="LinkedIn Logo"/>
                    </a>
                    <a href={`https://github.com/${this.props.usernameGitHub}`} className="github" target="_blank">
                        <img src={`${process.env.PUBLIC_URL}/resources/github.svg`} alt="GitHub Logo"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default UserCard;
