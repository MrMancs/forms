import React from "react";

export default class EmailInput extends React.Component {
    state = {
        email: ""
    }

    setEmail = function(email) {
        this.setState({email})
        console.log(email)
    }


    render() {
        return(
            <div>
                <label htmlFor="simpleEmail">Email address:</label>
                <input type="email" id="simpleEmail" name="simpleEmail" placeholder="name@example.com" required autoComplete="on" onChange={e => this.setEmail(e.target?.value)} onBlur={this.handleEmailBlur} />
            </div>
        )
    }
}