window.dom = {
    find(){
        return document.querySelectorAll(arguments[0]);
    },
    style(){
        //  设置 div.style.color
        if(arguments.length === 2){
            arguments[0].style[arguments[1]] = arguments[2];
        }
        //  设置 div.style.color = 'red'
        else if(arguments.length === 3){
            arguments[0].style[arguments[1]] = arguments[2];
        }

    },
    each(){
        //  循环遍历
        for(let i = 0; i < arguments[0].length; i++){
            arguments[1](arguments[0][i], i);
        }
    }
}

const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red'); // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素