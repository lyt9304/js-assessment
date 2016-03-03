exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
  	return fn.apply(obj);
  },

  alterObjects : function(constructor, greeting) {
  	constructor.prototype.greeting='What\'s up';
  },

  iterate : function(obj) {
  	var res=[];
  	for(var prop in obj){
  		if(obj.hasOwnProperty(prop)){
  			res.push(prop+": "+obj[prop]);
  		}
  	}
  	return res;
  }
};
