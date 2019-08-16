
function component() {
    alert(1234)
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    $('body').append('<h1>你好啊</h1>')
    return element;
}

document.body.appendChild(component());