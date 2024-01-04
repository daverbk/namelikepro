import React, {Component} from 'react';

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
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                hasPostfix: hasPostfix,
                hasSpecialCharacters: hasSpecialCharacters,
                hasAdjective: hasAdjective
            })
        };

        try {
            const response = await fetch('http://localhost:8080/generate', requestOptions);
            const data = await response.json();
            this.setState({nickname: data});
        } catch (error) {
            console.error(error);
        }
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
                    Submit
                </button>
                <div className="result">
                    {nickname === null ? '' : nickname.resultNickname}
                </div>
                <div className="error">
                    {error === null ? '' : error}
                </div>
            </form>
        );
    }
}

export default NicknameForm;
