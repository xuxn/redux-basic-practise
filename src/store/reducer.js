import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'   //增删改查，那查不可能用一次, 可能很多地方都会用到，这样我们直接引入文件使用就可以
const defaultState={
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state=defaultState, action) =>{  //state: 是整个项目中需要管理的数据信息
    //console.log(state,action)   //state: 指的是原始仓库里的状态。  action: 指的是action新传递的状态。 

    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))  //深度拷贝state
        //console.log(newState)
        newState.inputValue = action.value 
        //console.log(newState)
        return newState
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))  //深度拷贝state
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        console.log(newState.inputValue)
        return newState
    } 
    if(action.type === DELETE_ITEM){ 
        let newState = JSON.parse(JSON.stringify(state))  //深度拷贝state 
        newState.list.splice(action.index, 1)
        return newState
    }  
    if(action.type === GET_LIST){ 
        let newState = JSON.parse(JSON.stringify(state))  //深度拷贝state 
        newState.list = action.data.data.list
        return newState
    } 
    return state
}  //有管理能力的模块出现, reducer必须是纯函数, 返回的结果是由传入的值决定的，而不是其它的东西决定的