window.jQuery = function(selectorOrArray){
    let elements
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray);
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray;
    }
    const api = {
        oldApi: selectorOrArray.oldApi,
        addClass(className){
            for(let i=0; i<elements.length; i++){
                elements[i].classList.add(className);
            }
            return this;
            // 链式操作
        },
        find(selector){
            let array = [];
            for(let i=0; i<elements.length; i++){
                // array.push(elements[i].querySelectorAll(selector));
                array = array.concat(Array.from(elements[i].querySelectorAll(selector)));
            }
            array.oldApi = this // this 就是 api
            return jQuery(array);
        },
        end(){
            return this.oldApi; // this 就是当前的 api // api2
        },
    }
    return api;
}