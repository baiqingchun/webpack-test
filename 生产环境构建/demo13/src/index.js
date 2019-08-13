import _ from 'lodash';
import printMe from './print'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe
    element.appendChild(btn)
    return element;
}

console.log("aaaaaaa:", process.env.NODE_ENV)

if (process.env.NODE_ENV !== 'production') {

    console.log('llllllllllllllllllllllllllllllllllllll',process.env.NODE_ENV);
}

if (process.env.NODE_ENV === 'production') {

    console.log('ssssssssssssssssssssssss',process.env.NODE_ENV);
}
document.body.appendChild(component());