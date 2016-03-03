exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	var t;
    function counter () {
      
      console.log(start);
      start+=1;

      if(start<=end){
        timeout = setTimeout(counter, 100);
      }
    }

    counter();

    return {
      cancel : function () {
        clearTimeout(timeout);
      }
    };
  }
};
