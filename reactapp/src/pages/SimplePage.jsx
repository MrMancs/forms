/* SimplePage.jsx */
import React from "react";
import EmailInput from "../components/EmailInput/EmailInput";
export default class SimplePage extends React.Component {
    state = {
        email: ""
    }

    setEmail = function(email) {
        this.setState({email})
        console.log(email)
    }

    handleFormSubmit = e => {
        e.preventDefault()

        console.log(e)
    }

    handleEmailBlur = e => {
        console.log(e)
    }

    handleEmailChange = email => {
        console.log(email)
        this.setState({email})
    }

    handleFormReset = e => {
        console.log("handleReset", e)
        this.setState({email: ""})
    }

    render() {
        return (
            <div id="content-simple" className="tab-content active">
            <h2>Simple Email Form</h2>
                <form onSubmit={this.handleFormSubmit} onReset={this.handleFormReset}>
                    <EmailInput onEmailChange={this.handleEmailChange}/>
                    <button type="submit">Submit</button>
                    <input type="reset" value={"Reset"}/>
                </form>
            </div>
        )
    }    
}