import library from '../lib/library'

function show() {
   console.log(library.test1.add(1,2))
   console.log(library.test2.join('hello','webpack'))

}
show()