/*
 * @Author: xhf
 * @Date:   2017-07-14 09:00
 * @Last Modified time: 2017-11-17 12:00
 */
/*css*/
import '../asset/css/style.scss';
import '../asset/css/reset.css';
import '../asset/css/testless.less';

/*React*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*react-router-dom用法*/
import {
	BrowserRouter,	
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';

/*redux*/
import { createStore } from 'redux'
import rootReducer from 'Redux/reducers/RootReducer'
let store = createStore(rootReducer)
import { Provider } from 'react-redux'

/*components*/
import Index from 'components/index/Index';
import Second from 'components/second/Second';


class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	
	    }
	}
	render() {
	    return (	      	      		
      		<div>
		        <Route exact path="/" component={Index} />
		        <Route exact path="/index" component={Index} />
		        <Route exact path="/second" component={Second} />	
      		</div>		
	    );
	}
}
//<BrowserRouter />需要配合服务端代码才能正常打包运行 否则会一片白版 所有为了简单的演示可见效果暂且用哈希模式HashRouter
ReactDOM.render(<Provider store={store}><HashRouter><App /></HashRouter></Provider>,  document.getElementById("app"));

//ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,  document.getElementById("app"));





/*测试redux状态是否正常-引进action方法方便下面调用*/
import {initState, add ,del ,multiplication ,division, changeCountWay, changecountfirstnum,changecountsecondnum} from 'Redux/actions/RootAction'

// 打印初始状态
console.log("打印初始状态:%O",store.getState())
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
//初始app所需数据
let InitStatesJson = {
	type:"initDataBase",
	appName:"xhf-redux-react",
	createTime:"2017-11-20",
	countNumb1: 1,
	countNumb2: 2
}
//store.dispatch({type:"Init_state_json",InitStatesJson:InitStatesJson}) 经过RootAction的生产方法浓缩成   store.dispatch(initState(InitStatesJson))
store.dispatch({type:"Init_state_json",InitStatesJson})
//store.dispatch(initState(InitStatesJson))



// 发起一系列 action
console.log("=======================<<<<<redux-start>>>>>===========================")
let countArr = [store.getState().initAppStates.countNumb1,store.getState().initAppStates.countNumb2];
//store.dispatch(changecountfirstnum(110))
//store.dispatch(changecountsecondnum(120))
store.dispatch(add(countArr))
store.dispatch(del(countArr))
store.dispatch(multiplication(countArr))
store.dispatch(division(countArr))
store.dispatch(changeCountWay('-'))
store.dispatch(changeCountWay('*'))
setTimeout(function(){store.dispatch(changecountfirstnum(110))}.bind(store),3000)
console.log("=======================<<<<<redux-end>>>>>===========================")

// 打印最终状态
console.log("打印最终状态:%O",store.getState())
// 停止监听 state 更新
unsubscribe();


///*redux基本思想用法  */
//  store有dispatch方法一个 action 
//  
//  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓---action---可以为用来描述如何处理事件的参数的对象或者是返回该对象的函数---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//  const ADD_TODO = 'ADD_TODO'
//  ActionAddTodo = {
//	  type: ADD_TODO,
//	  text: 'Build my first Redux app'
//	}
//   	等同于
//  function ActionAddTodo(text) {
//	  return {
//	    type: ADD_TODO,
//	    text
//	  }
//	}
//  
//  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓---reducer---真正的处理函数---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//	function rootReducer(state = {}, action) {
//	  return {
//	    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//	    todos: todos(state.todos, action)
//	  }
//	}
//	 	等同于
//	const rootReducer = combineReducers({
//	  visibilityFilter,
//	  todos
//	})
//	
//	↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓---store---一开始注册一次把根的reducer注册进来后  他就取代了reducer位置等于直接接收actions 通过匹配type然后计算    后面只需要调用dispatch/getState/subscribe/方法就好---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//	import { createStore } from 'redux'
//	import rootReducer from './reducers'
//	let store = createStore(rootReducer)
//	使用:
//	// 打印初始状态
//	console.log(store.getState())
//	// 注意 subscribe() 返回一个函数用来注销监听器
//	let unsubscribe = store.subscribe(() =>
//	  console.log(store.getState())
//	)
//	// 发起一系列 action
//	store.dispatch(ActionAddTodo())
//
//	// 停止监听 state 更新
//	unsubscribe();
