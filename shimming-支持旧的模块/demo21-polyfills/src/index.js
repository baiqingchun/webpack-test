import _ from 'lodash';
function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

 fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
         console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
         console.log(json)
       })
   .catch(error => console.error('Something went wrong when fetching this data: ', error))