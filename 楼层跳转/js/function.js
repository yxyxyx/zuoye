function getClass(classname,range){
  	var range=range?range:document;
	if(range.getElementsByClassName){
		return range.getElementsByClassName(classname)
	}else{
		var all=range.getElementsTagName("*");
		var narrow=[];
		for(i=0;i<all.length;i++){
			if(checkClass(arr[i],className)){
				narrow.push(all[i]);
			}
		}
       return narrow;
	}
 }

function $(selecter,range){
  var range=range?range:document;
	var first=selecter.charAt(0);
	if(first=="#"){
		return range.getElementById(selecter.substring(1));
	}else if(first=="."){
		return getClass(selecter.substring(1),range);
	}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
		return range.getElementsByTagName(selecter);
	}else if(/^<[a-z][a-z1-6]{0,10}$/.test(selecter)){
        return document.createElement(selecter.slice(1,-1));
	}
}




// function getStyle(obj,attr){
//                 if(obj.currentStyle){
//       return obj.currentStyle[attr];
//     }else{
//       return getComputedStyle(obj,null)[attr];
//     }
//  }

 
//  function getChilds(obj,type){
// 		var type=type?type:false
// 		var childs=obj.childNodes;
//         var temp=[];
// 		if(type===false){
// 			for(var i=0;i<childs.length;i++){
// 				if(childs[i].nodeType==1){
// 					temp.push(childs[i]);
// 				}
// 			}
// 		}else if(type===true){
//             for(var i=0;i<childs.length;i++){
//             	if(childs[i].nodeType==1||(childs[i].nodeType
//             		==3&&!(/^\s+$/.test(childs[i].nodeValue)))){
//             		temp.push(childs[i]);
//             	}
//             }
// 		}return temp;
// 	}

//  //getFist

//  function getFist(obj){
//      return getChilds(obj)[0];
//  }

// //getNext
//  function getNext(obj,type){
//  	var type=type?type:false;
//  	var next=obj.nextSibling;
//  	if(type===false){
//           if(!next){
//           	return false;}
//           	while(next.nodeType==3&&/^\s+$/.test(next.nodeValue)||next.nodeType==8){
//           		next=next.nextSibling;
//           		if(!next){
//           			false;
//           	}
//           }
//  	     }else if(type===ture){
//  	     	if(!next){
//           	return false;
//             }
//           	while(next.nodeType==3&&/^\s+$/.test(next.nodeValue)||next.nodeType==8){
//           		next=next.nextSibling;
//           		if(!next){
//           			false;
//           	}
//           }
//        return next;
//      }


//      function insertAfter(){
//      	var type=type?type:false;
//      	var pos=getNext(next,type);
//      	var parsent=next.parentNode;
//      	if(!pos){
//             parsent.appendChild(obj);
//      	}else{
//      		parsent.insertBefore(obj,pos);
//      	}
//      }