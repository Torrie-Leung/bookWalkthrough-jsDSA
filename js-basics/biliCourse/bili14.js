//队列的封装-FIFO
function Queue() {
  //属性
  this.items = []
  //方法
  //1.将元素加入队列
  Queue.prototype.enqueue = function (ele) {
    this.items.push(ele)
  }
  //2.从队列中删除前端元素
  Queue.prototype.dequeue = function () {
    return this.items.shift()
  }
  //3.查看前端的元素
  Queue.prototype.front = function () {
    return this.items[0]
  }
  //4.查看队列是否为空
  Queue.prototype.isEmpty = function () {
    return this.items.length == 0
  }
  //5.查看队列中元素的个数
  Queue.prototype.size = function () {
    return this.items.length
  }
  //6. toString
  Queue.prototype.toStrin = function () {
    let resultString = ''
    for(let i = 0; i<this.items.length;i++){
      resultString += this.items[i] + '/'
    }
    return resultString
  }
}

//使用队列
const q = new Queue()

//题目：击鼓传花改造版
function passFlower(nameList,num){
  //1.创建1个队列结构
  let queue = new Queue()
  //2.将所有人依次加入到队列中
  for(let i = 0; i< nameList.length; i++){
    queue.enqueue(nameList[i])
  }
  console.log(queue.toStrin())
  //3.开始数数字 
  while(queue.size() > 1){
    //非num时重新加入队列掉末尾,是则删除
    for(let i = 0; i<num - 1; i++){
      queue.enqueue(queue.dequeue())
      console.log(queue.toStrin())
    }
    queue.dequeue()
  }
  let winner =queue.front()
  
  let winner_index = nameList.indexOf(winner)
  console.log('winner is: ', winner,winner_index)
}

passFlower(['yoshi','mario','toad'],3);