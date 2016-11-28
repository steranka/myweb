var React = require("react");
var ReactDOM = require("react-dom");

var HelloUI = require("./HelloUI.jsx");
import JsonFormatter from "./JsonFormatter.jsx"
import SuperAgentTest from "./SuperAgentTest.jsx"

console.log("ENTER: Running Single Page Application");


class ClientApp extends React.Component {

    render() {
        // Important Note: You can only return ONE dom element so you must wrap
        // the other elements into a single node (e.g., <div>, or another element)
        //return (<h1>hi</h1>)
        return (
            <div>
                <SuperAgentTest/>
                <p>This is a ReactJS Single Page Application.</p>
                <p>There are two calls to the HelloUI component that appear below</p>
                <HelloUI arg="This is the HelloUI component being rendered in reactJS"/>
                <p>And next one is</p>
                <HelloUI arg="a second call to it" color="#D0C9FF"/>
                <JsonFormatter/>
            </div>

        );
    }
}

window.onload = function loaded(event){
    console.log("PAGE LOADED - Dom is ready to be accessed!");
    var whereToLoad = document.getElementById("reactjs-app");
    if (whereToLoad == null){
        // TODO: Clean this up by appending a <div> to the body and loading there
        whereToLoad = document.body;
    }
    //React.render(BrowserApp, whereToLoad);
    ReactDOM.render(<ClientApp/>, whereToLoad);
};
console.log("EXIT:  Running Single Page Application");
