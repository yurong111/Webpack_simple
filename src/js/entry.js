const _ = require('lodash');

function component() {
    var element = document.createElement('div');

       // Lodash, currently included via a script, is required for this line to work
        // Lodash, now imported by this script
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        if (process.env.NODE_ENV != 'production') {
            console.log('env', 'test');
        }
    return element;
}

document.querySelector("body").appendChild(component());
// document.querySelector("#root").appendChild(component());