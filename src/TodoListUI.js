import React from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List } from 'antd'
const TodoListUI = (props)=>{  //无状态组件, 性能要高很多,无状态组件其实就是一个函数（方法）,所以它的性能也比普通的React组件要好
        return ( 
            <div  style={{padding:'25px', width:'500px'}}>
                <div>
                    <Input placeholder={props.inputValue} style={{width:'250px'}}  onChange={props.changeInputValue} />
                    <Button type="primary" onClick = {props.clickBtn}>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List dataSource={props.list}   renderItem={(item,index)=> (
                        <List.Item style={{justifyContent:'space-between'}}>
                            <div>{item}</div>
                            <Button type="primary"  onClick={()=>props.deleteItem(index)}>删除</Button> 
                        </List.Item>
                    )} />
                </div>
            </div>
        );
    } 
 
export default TodoListUI;