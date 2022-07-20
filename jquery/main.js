// jQuery('.test') // 不返回元素们，返回 api 对象
//     .addClass('red') // this 就是 api
//     .addClass('blue') // this 就是 api
//     .addClass('green'); // 链式操作，添加 red 和 blue 类

// obj.fn(p1) //函数里的this就是obj
// obj.fn.call(obj, p1) 

// const x1 = jQuery('.test') // 不返回元素们，返回 api 对象
//     .find('.child') // this 就是 api

// console.log(x1)
// obj.fn(p1) //函数里的this就是obj
// obj.fn.call(obj, p1) 

const api1 = jQuery('.test') // 不返回元素们，返回 api 对象
// const x = api1.find('.child')
// // .addClass('red').addClass('blue').addClass('green')
// // const oldApi = api2.end().addClass('yellow') 
// x.each((div) => console.log(div))
api1.children().print()