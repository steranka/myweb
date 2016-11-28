//import jquery from 'jquery'
import React, {Component} from 'react';

import request from 'superagent';
//import {Button} from 'react-bootstrap'

class SuperAgentTest extends Component {
    state = {
        textAreaValue: `server/public/index.html`,
        jsonFormatted: "",
        jsonRaw: "",
        webResult: ""
    }

    componentDidMount() {
        console.log('SuperAgentTest.componentDidMount')
    }

    componentDidUpdate(prevProps) {
        console.log('SuperAgentTest.componentDidUpdate')
    }

    handleTextAreaChange = (ev) => {
        console.log("handleTextAreaChange got : ", ev.target.value)
        this.setState({'textAreaValue': ev.target.value})
    }

    onSubmit = (ev) => {
        request.get(this.state.textAreaValue)
            .query({'bookId' : '123'})
            .end( (err, res) => {
                console.log('err=',err);
                console.log('res=', res);
                this.setState({webResult: JSON.stringify(res.body || res.text)});
            });
        console.log('onSubmit returning');
    }



    render() {
        return (
            <div>
                ok2
                <form>
                    <textarea className="JsonTextInput" multiple="true"
                              onChange={this.handleTextAreaChange} value={this.state.textAreaValue}></textarea>
                    <br/>
                    <input type="button" className="success" onClick={this.onSubmit} value="Submit"/>
                    <br/>
                </form>


                {this.state.webResult}
            </div>
        )
    }
}


export default SuperAgentTest;
