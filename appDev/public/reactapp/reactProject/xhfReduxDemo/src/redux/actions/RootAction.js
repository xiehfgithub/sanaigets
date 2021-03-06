/*
 * action 类型
 */


export const Init_state = 'Init_state_json'
export const ADD = 'ADD';
export const DElET = 'DElET';
export const MULTIPLICATION  = 'multiplication'
export const DIVISION  = 'division'
export const CHANGECOUNTWAY = 'changecountway'
export const CHANGECOUNTFIRSTNUM = 'changecountfirstnum'
export const CHANGECOUNTSECONDNUM = 'changecountsecondnum'
/*
 * 其它的常量
 */

/*
 * action 创建函数
 */

export function add(arr) {
  return { type: ADD, arr }
}
export function del(arr) {
  return { type: DElET, arr }
}
export function multiplication(arr) {
  return { type: MULTIPLICATION, arr }
}
export function division(arr) {
  return { type: DIVISION, arr }
}
export function changeCountWay(str) {
  return { type: CHANGECOUNTWAY, str }
}
export function changecountfirstnum(num) {
  return { type: CHANGECOUNTFIRSTNUM, num }
}
export function changecountsecondnum(num) {
  return { type: CHANGECOUNTSECONDNUM, num }
}
export function initState(InitStatesJson) {	
  return { type: Init_state, InitStatesJson }
}

/*
 dispatch(actionName(argObj))
 argObj==action 里的参数会继续传给reducer reducer通过actionName() 生成的动作对象的type  会匹配到一个具体的处理逻辑 进行state对argObj一个处理结果的加入并返回新state  
 reducer通过redux提供的combineReducers 方法自动整合进一个根对象下（内容物同级，若分级则在单个的reducer里加 case 去匹配） 通过createStore(rootReducer)方法得到store对象  并把它传入app根节点
 组件中 通过connect(select)(Index) 方法把一些当前组件所需的相关state变量引入加以展示 处理 这样就可以实现数据统一由store管控修改各组件分别响应
 ---hfx20171122
 * */