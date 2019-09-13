//栈的封装

//封装栈类
function Stack(){
  //栈中属性
  this.items = []

  //栈的相关操作
  //1.将元素压入栈
  Stack.prototype.push = function (ele) {
    this.items.push(ele)
  }
  //2.从栈中取出元素
  Stack.prototype.pop = function () {
    return this.items.pop()
  }
  //3.查看栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1]
  }
  //4.判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length == 0
  }
  //5.获取栈中元素的个数
  Stack.prototype.size = function () {
    return this.items.length
  }
  //6.toString方法
  Stack.prototype.toStrin = function () {
    let resultString = ''
    for(let i = 0; i<this.items.length; i++){
      resultString += this.items[i] + '-'
      
    }
    return resultString
  }
}

//栈的使用
const s = new Stack()
const arr = [2,3,4,5]
s.push(2)
s.push(3)
s.push(7)
s.push(5)
console.log(s.peek())
console.log(s.items)
console.log(s.toStrin())
const r = s.size()
console.log(r)