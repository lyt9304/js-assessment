exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	var flag=false;
  	var res=[];
  	if(!dirName){
  		dirName=data["dir"];
  	}

  	function recurseDir(data,dirName,flag){
  		var nowfile=data["files"];
  		var nowdir=data["dir"]
  		if(dirName==nowdir){
  			flag=true;
  		}

		for(var i=0;i<nowfile.length;i++){
			if(typeof nowfile[i] === "string"){
				if(flag){
					res.push(nowfile[i]);
				}
			}else{
				recurseDir(nowfile[i],dirName,flag);
			}
		}  	
  	}

  	recurseDir(data,dirName,false);
  	return res;
  },

  permute: function(arr) {
    var all=[];

    function remove(arr,val){
      var tmp=arr.slice();
      var index = tmp.indexOf(val);  
      if (index > -1) {  
          tmp.splice(index,1);  
      }
      return tmp;   
    }

    function recurseArr(str,arr){
      if(arr.length==0){
        all.push(str.split(""));
        return;
      }
      for(var i=0;i<arr.length;i++){
        recurseArr(str+arr[i],remove(arr,arr[i]))
      }
    }

    recurseArr([],arr);

    console.log(all.length);
    console.log(all);


    return all;
  	
  },

  fibonacci: function(n) {
  	if(n==1||n==2){
  		return 1;
  	}
  	return arguments.callee(n-2)+arguments.callee(n-1)
  	
  },

  validParentheses: function(n) {
    function moveSame(arr){
      var res=[];
      var hash={};

      for(var i=0;i<arr.length;i++){
        if(!hash[arr[i]]){
          res.push(arr[i]);
          hash[arr[i]]=1;
        }
      }

      return res;
    }

    function addSitu(arr){
      var res=[];
      for(var i=0;i<arr.length;i++){
        res.push("()"+arr[i]);
        res.push(arr[i]+"()");
        res.push("("+arr[i]+")");
      }
      return res;
    }

    function getParent(n){
      if(n==1){
        return ["()"];
      }else{
        return addSitu(getParent(n-1));
      }
    }

    return moveSame(getParent(n));
  }
};
