exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	return num>>(bit-1)&1;
  },

  base10: function(str) {
  	return parseInt(str,2);
  },

  convertToBinary: function(num) {
  	var res=[];
  	while(num>0){
  		res.unshift(num%2);
  		num=(num-num%2)/2;
  	}
  	if(res.length<8){
  		for(var i=0;i<8-res.length;i++){
  			res.unshift(0);
  		}
  	}
  	return res.join("");
  },

  multiply: function(a,b) {
  	var r1,r2,m;

  	try{
  		r1=a.toString().split(".")[1].length;
  	}catch(e){
  		r1=0;
  	}

  	try{
  		r2=b.toString().split(".")[1].length;
  	}catch(e){
  		r2=0;
  	}

  	m=Math.pow(10,Math.max(r1,r2));
  	return (a*m)*(b*m)/m/m;
  }
};
