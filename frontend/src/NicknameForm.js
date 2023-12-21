import {Component} from "react";

class NicknameForm extends Component {
    render() {
        return (
            <form className="nickname-form">
                <div className="form-group">
                    <input type="text" className="form-control" id="testField1" placeholder="testField1"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="testField2" placeholder="testField2"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="testCheckbox1"/>
                    <label htmlFor="testCheckbox1">testCheckbox1</label>
                </div>
                <button onClick={handleClick} type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

const handleClick = async (event) => {
    event.preventDefault();
    console.log('here we\'ll handle btn click');
    // url: http://localhost:8080/generate
};

export default NicknameForm;