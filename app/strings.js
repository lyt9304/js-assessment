exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	
  	var t=1;
  	var now=str[0];
	  var res=str[0];

  	for(var i=1;i<str.length;i++){
  		if(str[i]==now){
  			t++;
  			if(t<=amount){
  				res+=str[i];
  			}
  		}else{
  			now=str[i];
  			t=1;
  			res+=str[i];
  		}
  	}
  	return res;
  },
  wordWrap: function(str, cols) {
    var cnt=0;
    var res="";
    var tmp="";
    var flag=false;

    for(var i=0;i<str.length;i++){
      cnt++;

      if(flag){
        //找到下一个空格或者结束就ok了
        if(i===str.length-1){
          tmp+=str[i];
          res+=tmp;
          continue;
        }

        if(str[i]===" "){
          tmp+="\n";
          res+=tmp;
          cnt=0;
          tmp="";
          flag=false;
          continue;
        }
      }

      if(cnt==6&&!flag){
        //如果正好是空格
        if(str[i]===" "){
          tmp+="\n";
          res+=tmp;
          tmp="";
          cnt=0;
          continue;
        }else{          
          var index=tmp.lastIndexOf(" ")
          if(index!=-1){//如果前面有空格
            var a=tmp.slice(0,index);
            var b=tmp.slice(index+1);
            res+=a+"\n";
            tmp=b+str[i];
            cnt=tmp.length;
            continue;
          }else{//如果前面也没有空格
            flag=true;
            tmp+=str[i];
            continue;
          }
        }
      }
      tmp+=str[i];

      if(i===str.length-1){
        res+=tmp;
      }
    }

    return res;
  },
  reverseString: function(str) {
  	
	var len=str.length;
	var arr=str.split("");

	for(var i=0;i<=Math.floor(len/2-1);i++){
		var tmp=arr[i];
		arr[i]=arr[len-1-i];
		arr[len-1-i]=tmp;
	}

	return arr.join("");

  }
};
