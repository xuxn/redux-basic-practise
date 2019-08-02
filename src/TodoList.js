import React, { Component } from 'react'; 
import store from './store' 
import {changeInputAction, clickBtnAction, deleteItemAction, getListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'
 
class TodoList extends Component { 
    constructor(props){
        super(props)
        this.state = store.getState()    // 组件要使用store
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)  //订阅Redux的状态
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            store.dispatch(action) 
        })
    }
    changeInputValue(e){ //改变Redux里边State的值就要创建Action对象， 一般有两个属性， 第一个是对Action的描述，第二个是要改变的值 
        const action = changeInputAction(e.target.value)
        store.dispatch(action) //通过dispatch()方法传递给store, 和store有了联系, 把接收到的action自动转发给Reducer
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        let action = clickBtnAction()
        store.dispatch(action)
    }   
    deleteItem(index){
        let action = deleteItemAction(index)
        store.dispatch(action)
    }
    render() { 
        return ( 
           <TodoListUI 
           inputValue={this.state.inputValue}
           list={this.state.list}
           changeInputValue={this.changeInputValue}
           clickBtn={this.clickBtn}
           deleteItem={this.deleteItem} />
        );
    }
}
 
export default TodoList;