console.log(11);
// 安装run code 插件 可以直接输出运行结果
let obj = {
    name:'张三',
    age:18,
    person:{
        gender:'男'
    }
}

function observer(value){
    if (typeof value !== 'object' || typeof value === 'null') {
        return
    }
    for(const key in value){
        defineReactive(value,key,value[key])
    }
}

function defineReactive(target,key,value){
    observer(value)
    Object.defineProperty(target,key,{
        get(){
            return value
        },
        set(newValue){
            if (newValue !== value) {
                observer(obj) // 这里调用一次会出现 obj.person = { score:60 } 这种赋值情况
                value = newValue

                console.log('视图更新了'+ obj.name)
            }
        }
    })
}

observer(obj)

obj.name ='李四'
obj.person.gender = '女'