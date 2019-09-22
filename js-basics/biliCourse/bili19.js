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
  }
}

let pq = new PriorityQueue()