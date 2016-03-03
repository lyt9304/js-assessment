exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null,arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str1) {
    return function(str2){
      return str1+", "+str2;
    }
  },

  makeClosures : function(arr, fn) {
    var res=[];
    for(var i=0;i<arr.length;i++){
      res.push((function(i){
        return function(){
            return fn(arr[i]);
        }      
      })(i));
    }
    return res;
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn.call(null,str1,str2,str3);
    }
  },

  useArguments : function() {
    var sum=0;
    for (var i = 0; i < arguments.length; i++) {
      sum+=arguments[i];
    };
    return sum;
  },

  callIt : function(fn) {
    return fn.apply(null,Array.prototype.slice.call(arguments,1));
  },

  partialUsingArguments : function(fn) {
    var arg1=Array.prototype.slice.call(arguments,1);
    return function(){
      var arg2=Array.prototype.slice.call(arguments);
      if(!arg1){
          arg1=[];
      }
      return fn.apply(null,arg1.concat(arg2));
    }
  },

  curryIt : function(fn) {

    var _cache=[];
    var _expectNum=fn.length;
    
    function runFunc(){
      return fn.apply(null,_cache);
    }

    function curry(fn){
      return function(nowarg){
        _cache.push(nowarg);
        if(_cache.length===_expectNum){
          return runFunc(fn);
        }else{
          return curry.apply(null,fn);
        }
      } 
    }

    return curry(fn);
  }
};
