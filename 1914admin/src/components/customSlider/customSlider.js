import React from 'react'
import {withRouter}from 'react-router-dom'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const root=[
    {
        name:'首页',
        path:'/admin/home',
        key:'/admin/home'
    },
    {
        name:'用户管理',
        path:'/admin/user',
        key:'/admin/user',
        children:[
            {name:'权限管理',path:'/admin/user/root',key:'/admin/user/root'},
            {
                name:'信息管理',
                path:'/admin/user/info',
                key:'/admin/user/info',
                children:[
                    {
                        name:'权限管理1',
                        path:'/admin/user/root',
                        key:'/admin/user/root',
                        children:[
                            {name:'权限管理2',path:'/admin/user/root',key:'/admin/user/root'},
                            {name:'信息管理2',path:'/admin/user/info',key:'/admin/user/info'}
                        ]
                    },
                    {name:'信息管理1',path:'/admin/user/info',key:'/admin/user/info'}
                ]
            }
        ]
    },
    {
        name:'设置',
        path:'/admin/setting',
        key:'/admin/setting'
    }
]

class CustomSlider extends React.Component{
    jump=(path)=>{
        //路由对象
        this.props.history.push(path)
    }
    renderItem=(data)=>{
        //判断children 有sub ，没有 menu.item
        return data.map((item,index)=>{
            if(item.children){
                return(
                    <SubMenu title={item.name}>
                        {this.renderItem(item.children)}
                    </SubMenu>
                )
            }else{
                return(
                    <Menu.Item key={item.index} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
                )
            }
        })
    }
    render(){
        return(
            <Menu style={{ width: 256 }} mode="vertical" theme='dark'>
                {this.renderItem(root)}
                {/*{root.map((item,index)=>{*/}
                    {/*if(item.children){*/}
                        {/*return(*/}
                            {/*<SubMenu title={item.name}>*/}
                                {/*{item.children.map((citem,index)=>{*/}
                                    {/*return <Menu.Item key={citem.index} onClick={this.jump.bind(this,citem.path)}>{citem.name}</Menu.Item>*/}
                                {/*})}*/}
                            {/*</SubMenu>*/}
                        {/*)*/}
                    {/*}else{*/}
                        {/*return(*/}
                            {/*<Menu.Item key={item.index} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>*/}
                        {/*)*/}
                    {/*}*/}

                {/*})}*/}
                {/*<Menu.Item key="3">首页</Menu.Item>*/}
                {/*<SubMenu title='用户管理'>*/}
                        {/*<Menu.Item key="3">Option 3</Menu.Item>*/}
                        {/*<Menu.Item key="4">Option 4</Menu.Item>*/}
                    {/*<SubMenu title='用户管理'>*/}
                        {/*<Menu.Item key="3">Option 3</Menu.Item>*/}
                    {/*</SubMenu>*/}
                {/*</SubMenu>*/}
            </Menu>
)
}
}
export default  withRouter(CustomSlider)