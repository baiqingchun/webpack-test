import _ from 'lodash';
function buttonCreat(element,text) {
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML =text;

    element.appendChild(br);
    element.appendChild(button);
    return button
    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.

}
function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    let btn1 = buttonCreat(element,'Click me and look at the console!')
    let btn2 = buttonCreat(element,'test.js 测试')

    btn1.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        var print = module.default;

        print();
    });
    btn2.onclick = e=>import(/* webpackChunkName: "test" */'./test').then(module=>{
        var test = module.test
        test()
    })

    return element;
}
document.body.appendChild(component());