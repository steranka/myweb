// document.write('It works');
// require("!style!css!./style.css");

// This requires
// webpack entry.js bundle.js --module-bind 'css=style!css'

require("./style.css");
document.write(require("./content.js"));
