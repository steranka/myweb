var React = require("react");

var HelloUI = require("./HelloUI.jsx");

console.log("ENTER: Running Single Page Application");


var BrowserApp = React.createClass({
    render: function () {
        // Important Note: You can only return ONE dom element so you must wrap
        // the other elements into a single node (e.g., <div>, or another element)
        return (
            <div>
                <p>This is a ReactJS Single Page Application.</p>
                <p>There are two calls to the HelloUI component that appear below</p>
                <HelloUI arg="This is the HelloUI component being rendered in reactJS"/>
                <p>And next one is</p>
                <HelloUI arg="a second call to it" color="#D0C9FF"/>
            </div>

        );
    }
});

window.onload = function loaded(event){
    console.log("PAGE LOADED - Dom is ready to be accessed!");
    var whereToLoad = document.getElementById("reactjs-app");
    //React.render(BrowserApp, whereToLoad);
    React.render(<ClientApp/>, whereToLoad);
};
console.log("EXIT:  Running Single Page Application");
