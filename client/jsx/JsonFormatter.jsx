//import jquery from 'jquery'
import React, {Component} from 'react';
//import {Button} from 'react-bootstrap'

class JsonFormatter extends Component {
    state = {
        textAreaValue: `{"some":"body", "is": {"going" : "to", "like": "this"}, "when" : "it works2"}`,
        jsonFormatted: "",
        jsonRaw: "",
        showPreFormatted : false,
        debugWhenStateIsCreated:     console.log('creating new JsonFormattera')
    }

    componentDidMount() {
        console.log('JsonFormatter.componentDidMount')
    }

    componentDidUpdate(prevProps) {
        console.log('JsonFormatter.componentDidUpdate')
        console.log(this.state.textAreaValue)
    }
    formatJson = () => {
        let jsonFormatted = null;
        try{
            let tmpJson = JSON.parse(this.state.textAreaValue);
            jsonFormatted = JSON.stringify(tmpJson, null, 4);
            // let jsonFormatted = JSON.stringify(this.state.textAreaValue, null, 2);
            console.log("Have: " + this.state.textAreaValue)
            console.log("formatted = " + jsonFormatted)
            this.setState(
                {
                    'jsonFormatted': jsonFormatted,
                    'textAreaValue': jsonFormatted
                })
        }catch(ex){
            let gotErr = "ERROR: Invalid JSON input."
            this.setState(
                {
                    'jsonFormatted': gotErr,
                })
        }
    }

    handleTextAreaChange = (ev) => {
        console.log("handleTextAreaChange got22a: ", ev.target.value)
        this.setState({'textAreaValue': ev.target.value})
    }

    jsonToHtml = (json) => {
        // Convert every space to a &nbsp;
        json = json.replace(/ /g, "\u00a0" );
        json = json.replace(/\n/g, "<br/>");
        return <div dangerouslySetInnerHTML={{__html: json}}/>
    }

    toTextAreaFormat = (json) => {
        // Convert every space to a &nbsp;
        json = json.replace(/\r?\n/g, "<br/>");
        return <div dangerouslySetInnerHTML={{__html: json}}/>
    }

    toggleCheckbox = (ev) => {
        console.log('toggleCheckbox cur value is ' + this.state.showPreFormatted)
        this.setState( { 'showPreFormatted' : !this.state.showPreFormatted })
    }

    render() {
        return (
            <div>
                <form>
                    <textarea className="JsonTextInput" multiple="true"
                              onChange={this.handleTextAreaChange} value={this.state.textAreaValue}></textarea>
                    <pre hidden={!this.state.showPreFormatted}>Displayed as pre:<br/>{this.state.textAreaValue}</pre>
                    <br/>
                    <input type="button" className="success" onClick={this.formatJson} value="Submit"/>
                    <input type="checkbox" onClick={this.toggleCheckbox} value={this.state.showPreFormatted}/>
                    <br/>
                </form>
                {this.jsonToHtml(this.state.jsonFormatted)}
            </div>
        )
    }
}


export default JsonFormatter;
