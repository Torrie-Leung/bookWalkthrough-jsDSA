//Priority queue
function PriorityQueue() {
  //创建内部类
  function QueueEle(ele,priority) {
    this.ele = ele
    this.priority = priority
  }
  //封装属性
  this.items = []

  //实现插入方法
  PriorityQueue.prototype.enqueue = function (ele,priority) {
    //1.创建QueueEle对象
    let queueEle = new QueueEle(ele,priority)

    //2.判断队列是否为空
    if(this.items.length == 0) {
      this.items.push(queueEle)
    }else{
      let added = false;
      for (let i = 0; i< this.items.length; i++){
        if(queueEle.priority < this.items[i].priority){
          this.items.splice(i,0,queueEle)
          added = true
          break
        }
      }
      if(!added){
        this.items.push(queueEle)
      }
    }
  }
  //方法
  //2.从队列中删除前端元素
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift()
  }
  //3.查看前端的元素
  PriorityQueue.prototype.front = function () {
    return this.items[0]
  }
  //4.查看队列是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length == 0
  }
  //5.查看队列中元素的个数
  PriorityQueue.prototype.size = function () {
    return this.items.length
  }
  //6. toString
  PriorityQueue.prototype.toString = function () {
    let resultString = ''
    for(let i = 0; i<this.items.length;i++){
      resultString += this.items[i].ele + '-' + this.items[i].priority + ' '
    }
    return resultString
  }
}

let pq = new PriorityQueue()

pq.enqueue('ABC',12)
pq.enqueue('ABA',1)
pq.enqueue('ABB',2)

console.log(pq.toString())