var React = require("react");
var myCount = 0;

// From StackOverflow
// http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeColor2(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

var HelloUI = React.createClass( {
    // Called only once and then values are cached by the React framework
    getDefaultProps: function() {
        // The default properties below are used in the render function
        // if the caller doesn't set the argument.  This is similar to a default
        // argument value in Java, C#, or python.  Conceptually these should be treated
        // as pass by value and not changed in the render function.
        // Properties are "IN" only, not IN/OUT
        var rtn = {
            arg: "(you need to set the propery arg in order for this default message to go away",
            color: "#ffe87c", // If caller doesn't pass it then a default color is used
        };
        console.log("HelloUI.getDefaultProps returns " + JSON.stringify(rtn));
        return rtn;
    },
    // Called once every time <HelloUI/> is used in JSX
    getInitialState: function() {
        // The state is something that can change by the component
        var rtn = {
            // If the caller passed a color, then use it, otherwise use the default color
            // NOTE: state should ALWAYS be set before Render is called, so set it here
            // not in render()
            myColor: this.props.color,
            numTimesColorChanged: 0
        };
        console.log("HelloUI.getInitialState returns " + JSON.stringify(rtn));
        return rtn;
    },
    render: function () {
        // WRONG, never call setState in the render function!
        // if (typeof this.state.myColor === "undefined") { setState({myColor: this.props.color}); }

        console.log("HelloUI.render state = " + JSON.stringify(this.state));

        return (
            <div style={{ backgroundColor: this.state.myColor }} onClick={this.onClick}>
                <p>{this.props.arg} counter is {myCount++} and then some</p>
            </div>);
    },
    onClick: function(){
        // Change the color by darkening it
        var newColor = shadeColor2(this.state.myColor, .20);
        var newCount = this.state.numTimesColorChanged + 1;
        var newState = {
            myColor: newColor,
            numTimesColorChanged: newCount
        };

        // NOTE: setState() will trigger a re-render
        this.setState(newState);

        // console.log("HelloUI.onClick newState = " + JSON.stringify(this.state)); // WRONG
        // BUG/FEATURE ALERT: I can't use this.state  because it might not be
        // updated (yet).  See NOTE in https://facebook.github.io/react/docs/component-api.html
        // which says: Accessing this.state after calling this method can potentially return
        // the existing value.

        console.log("HelloUI.onClick newState = " + JSON.stringify(newState));
        return;
    }
});

module.exports = HelloUI;
