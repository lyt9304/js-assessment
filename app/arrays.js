exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i=0;i<arr.length;i++){
        if(arr[i]==item){
            return i
        }
    }
    return -1
  },

  sum : function(arr) {
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
  },

  remove : function(arr, item) {
    var tmp=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]!==item){
            tmp.push(arr[i])
        }
    }
    return tmp
  },

  removeWithoutCopy : function(arr, item) {
    for(var i=0;i<arr.length;i++){
        if(arr[i]==item){
            arr.splice(i,1)
            i--
        }
    }
    return arr
  },

  append : function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate : function(arr) {
    arr.pop()
    return arr
  },

  prepend : function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail : function(arr) {
    arr.shift()
    return arr
  },

  concat : function(arr1, arr2) {
    for(var i=0;i<arr2.length;i++){
        arr1.push(arr2[i])
    }
    return arr1
  },

  insert : function(arr, item, index) {
    var tmp=[]
    for(var i=0;i<arr.length;i++){
        if(i==index){
            tmp.push(item)
        }
        tmp.push(arr[i])
    }
    return tmp
  },

  count : function(arr, item) {
    var cnt=0
    for(var i=0;i<arr.length;i++){
        if(arr[i]==item){
            cnt++
        }
    }
    return cnt
  },

  duplicates : function(arr) {
    var map={}
    var res=[]
    for(var i=0;i<arr.length;i++){
        if(typeof map[arr[i]] == "undefined"){
            map[arr[i]]=0
        }
        map[arr[i]]++
    }

    for(key in map){
        if(map[key]>1){
            res.push(Number(key))
        }
    }

    return res
  },

  square : function(arr) {
    return arr.map(function(n){
        return n*n
    })
  },

  findAllOccurrences : function(arr, target) {
    var res=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]==target){
            res.push(i)
        }
    }

    return res
  }
};
