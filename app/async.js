exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  //link:http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html
  async : function(value) {
  	var dtd = $.Deferred();
  	var tasks = function() {
  		// console.log("执行完毕！");
		dtd.resolve(value);
	}
	setTimeout(tasks, 10);
	return dtd.promise();
  },

  manipulateRemoteData : function(url) {
  	var dtd = $.Deferred();
	$.ajax(url).done(function(data) {
		var res=[];
		var p=data.people;
		// console.log(p);
		for(var i=0;i<p.length;i++){
			res.push(p[i].name);
		}
		dtd.resolve(res.sort());
	});
	return dtd.promise();
  }
  
};
