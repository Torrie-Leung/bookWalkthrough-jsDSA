//封装链表类
function LinkedList() {
  //内部类：节点类
  function Node(data){
    this.data = data
    this.next = null
  }
  //属性
  this.head = null
  this.length = 0

  //1.追加方法
  LinkedList.prototype.append = function(data){
    //创建新节点
    let newNode = new Node(data)
    let current
    //判断是否添加的是第一个节点
    if(this.length == 0){
      //是第一个节点
      this.head = newNode
    }else{
      //不是第一个节点
      //找到最后一个节点
      current = this.head
      
      while(current.next != null){
        current = current.next
      }
      //最后一个节点指向next
      current.next = newNode
    }
    //length +1
    this.length += 1
  }

  LinkedList.prototype.toString = function () {
    //1.定义变量
    let current = this.head
    let listString = ""
    //2.循环获取各个节点
    while(current){
      listString += current.data + ' '
      current = current.next
    }
    return listString
  }
}

let testList = new LinkedList()

testList.append('abc')
testList.append('ccc')
console.log(testList.toString())

