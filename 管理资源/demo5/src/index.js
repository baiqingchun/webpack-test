import _ from 'lodash';
import './style.css';
import Icon from './icon.png'
import Data from './data.xml'
function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
   console.log(Data)
    return element;
}

function image(){

    var myIcon = new Image()
    myIcon.src = Icon
    myIcon.width = 500
    myIcon.height = 400
    return myIcon
}

document.body.appendChild(component());
document.body.appendChild(image())