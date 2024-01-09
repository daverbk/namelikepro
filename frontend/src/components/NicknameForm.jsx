import React, {Component} from 'react';
import button from "bootstrap/js/src/button";

const SERVER_URL = 'https://yenblbldi3tdmmnpkl5weli74q0wixih.lambda-url.eu-north-1.on.aws';

class NicknameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            hasPostfix: false,
            hasSpecialCharacters: false,
            hasAdjective: false,
            nickname: null,
            error: ''
        };
    }

    fetchData = async (event) => {
        event.preventDefault();

        if (this.state.firstName.trim().length === 0) {
            this.setState({error: 'first name is required'});
            return;
        }

        const {firstName, lastName, hasPostfix, hasSpecialCharacters, hasAdjective} = this.state;

        this.setState({
            firstName: '',
            lastName: '',
            hasPostfix: false,
            hasSpecialCharacters: false,
            hasAdjective: false,
            error: ''
        });

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'text/plain', 'spring.cloud.function.definition': 'generate'},
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                hasPostfix: hasPostfix,
                hasSpecialCharacters: hasSpecialCharacters,
                hasAdjective: hasAdjective
            })
        };

        try {
            const response = await fetch(SERVER_URL, requestOptions);
            const data = await response.json();
            this.setState({nickname: data});
        } catch (error) {
            console.error(error);
        }

        window.dataLayer.push({
            'event': 'nickname generated'
        });
    };

    handleFirstNameChange = (event) => {
        this.setState({firstName: event.target.value});
    };

    handleLastNameChange = (event) => {
        this.setState({lastName: event.target.value});
    };

    handleHasPostfixChange = (event) => {
        this.setState({hasPostfix: event.target.checked});
    };

    handleHasSpecialCharactersChange = (event) => {
        this.setState({hasSpecialCharacters: event.target.checked});
    };

    handleHasAdjectiveChange = (event) => {
        this.setState({hasAdjective: event.target.checked});
    };

    handleCopyToClipboard = (event) => {
        event.preventDefault();
        const copyText = document.getElementById("generation-result").innerText;
        navigator.clipboard.writeText(copyText);
    }

    render() {
        const {firstName, lastName, hasPostfix, hasSpecialCharacters, hasAdjective, nickname, error} = this.state;

        return (
            <form className="nickname-form">
                <div className="form-group">
                    <input
                        type="text"
                        value={firstName}
                        onChange={this.handleFirstNameChange}
                        className="form-control"
                        id="firstName"
                        placeholder="First Name"
                    />
                    <label className="firstname" htmlFor="firstName">* is required</label>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        value={lastName}
                        onChange={this.handleLastNameChange}
                        className="form-control"
                        id="lastName"
                        placeholder="Last Name"
                    />
                </div>
                <div className="form-check">
                    <input className="form-check-input"
                           type="checkbox"
                           value={hasPostfix}
                           id="hasPostfix"
                           checked={hasPostfix}
                           onChange={this.handleHasPostfixChange}
                    />
                    <label className="form-check-label">
                        Has Postfix?
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input"
                           type="checkbox"
                           value={hasSpecialCharacters}
                           id="hasSpecialCharacters"
                           checked={hasSpecialCharacters}
                           onChange={this.handleHasSpecialCharactersChange}
                    />
                    <label className="form-check-label">
                        Has Special chars?
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input"
                           type="checkbox"
                           value={hasAdjective}
                           id="hasAdjectiveChange"
                           checked={hasAdjective}
                           onChange={this.handleHasAdjectiveChange}
                    />
                    <label className="form-check-label">
                        Has Adjective?
                    </label>
                </div>
                <button onClick={this.fetchData} type="submit" className="start-button">
                    generate
                </button>
                <div className="result">
                    {nickname === null ? <p></p> :
                        <div className="result-container">
                            <p id={"generation-result"}>{nickname.resultNickname}</p>
                            <button onClick={this.handleCopyToClipboard}>Copy to clipboard</button>
                        </div>
                    }
                </div>
                <div className="error">
                    {error === null ? '' : error}
                </div>
            </form>
        );
    }
}

export default NicknameForm;
