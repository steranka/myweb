var React = require("react");
var $ = require("jQuery");
var bootstrap = require("bootstrap");
React.Bootstrap = require("react-bootstrap");
var _ = require("lodash");
var logMixin = require("./logMixin.js").logMixin;

if (typeof window.globalCount === "undefined"){
    window.globalCount = 1; // first time this FormatJsonPage jsx has been loaded
} else {
    window.globalCount++;
}

// Count the number of times the render method has been called
var myCount = 0;

// Lifecycle methods are:
//    Creation          Updates              Teardown              Notes
// require()                                                       ReactClass is created
// getDefaultProps                                                 Only called once when object is used
// getInitialState      getInitialState
// componentWillMount   componentWillMount
// render               render
// componentDidMount    componentDidMount
//                                           componentWillUnmount
//                                                                 ReactClass is destroyed


var FormatJsonPage = React.createClass({
    // Mixins take the functions defined on these other objects and add them to my object!
    // mixins: [logMixin, baseObj2, baseObj3],
    mixins: [logMixin],
    propTypes: {
        // Declare the properties you are expecting or allowing (optional) the call
        myColor: React.PropTypes.string,
        msg: React.PropTypes.string
        // Other propTypes are:
        // onChange: React.PropTypes.func,
        // category: React.PropTypes.oneOf(['News','Photos']).isRequired,
        // Want more see https://facebook.github.io/react/docs/reusable-components.html
    },

    getDefaultProps: function () {
        var rtn = {
            myColor: "#ffe87c"
        };
        console.log("ENTER/EXIT: FormatJsonPage.getDefaultProps: rtn=", rtn);
        return rtn;
    },

    getInitialState: function () {
        console.log("ENTER: FormatJsonPage.getInitialState: this.props=", this.props);
        this.myInstanceCount = 0;
        var rtn = {
            myColor: this.props.myColor,
        };
        console.log("EXIT : FormatJsonPage.getInitialState: rtn=", rtn);
        return rtn;
    },

    //componentWillMount: function(){
    //    console.log("FormatJsonPage.componentWillMount: this.state=", this.state);
    //},
    //
    //componentWillUnmount: function(){
    //    console.log("FormatJsonPage.componentWillUnmount: this.state=", this.state);
    //},
    //
    render: function () {
        // Use the last color the state had (by default) but let caller override
        // by passing a property
        var useColor = this.props.myColor || this.state.myColor;

        this.myInstanceCount++;
        myCount++;
        console.log("ENTER/EXIT: FormatJsonPage.render this.state.myColor=" + this.state.myColor
            + ", myCount=" + myCount + ", myInstanceCount=" + this.state.myInstanceCount
            + ", globalCount=" + window.globalCount);
        //return React.createElement("p", null, this.props.arg);
        // Use the last color state unless state is passed as a property

        return (
            <div className="btn" {...this.props} style={{ backgroundColor: useColor}}>
                This FormatJsonPage element can be copied and used as a starting point
                for all of your future React UI components.
                <p show={this.props.msg}>msg is {this.props.msg}</p>
                <p>this.myInstanceCount is {this.myInstanceCount}.  The number of times render() has been called for this instance.</p>
                <p>module counter is {myCount}.  The number of times render() has been called for this module.</p>
                <p>window.globalCounter is {window.globalCount}.  The number of times this jsx module has been loaded.</p>
            </div>
        );
    }
});


var FormatJsonPageExample = React.createClass( {
    getInitialState: function(){
        return { colorA: "lightgrey"};
    },

    render: function () {
        return (
            <div>
                The current color is {this.state.colorA}.  Click the button to change it
                <button onClick={this.changeColor}>Change Color</button><br/>

                This is one FormatJsonPage (the default)<br/>
                <FormatJsonPage/><br/>
                This is another FormatJsonPage with green background<br/>
                <FormatJsonPage myColor={this.state.colorA}/><br/>
                And last I can pass my own styles to override things if I wanted to<br/>
                <FormatJsonPage style={{font: "Arial,10pt"}} myColor="lightblue" msg="Hello World!"/><br/>
                And a default again, but see how props were changed!<br/>
                <FormatJsonPage/><br/>
            </div>
        );
    },

    changeColor: function(){
        var useColor = (new Date().getSeconds() % 2) ? "yellow" : "lightgreen";
        console.log("changeColor", useColor);
        this.setState({colorA: useColor});
    }
});


module.exports.FormatJsonPage = FormatJsonPage;
module.exports.FormatJsonPageExample = FormatJsonPageExample;
