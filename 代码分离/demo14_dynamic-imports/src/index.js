async function getComponent() {


    var element = document.createElement('div');

    const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');


    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
});

// import _ from 'lodash';
//
// function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');
//
//     // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//     btn.innerHTML = 'Click me and check the console!'
//     btn.onclick = printMe
//     element.appendChild(btn)
//     return element;
// }
//
// document.body.appendChild(component());