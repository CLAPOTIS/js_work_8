var btns_li=document.getElementsByClassName("btns_li");
var pic=document.getElementsByClassName("pic")[0];
var button_left=document.getElementsByClassName("button_left")[0];
var button_right=document.getElementsByClassName("button_right")[0];
var imagesList=["images/cake_1.jpg","images/cake_2.jpg","images/cake_3.jpg","images/cake_4.jpg","images/cake_5.jpg"];
//点击左右箭头切换图片
button_left.onclick=function(){
		changePic(false);
}
button_right.onclick=function(){
		changePic(true);
}
function changePic(boo){	
	var currPic=pic.getAttribute("src");
	var pos=imagesList.indexOf(currPic);
	if(boo){
		pos++;
		if(pos==5){
			pos=0;
		}
	}else{
		pos--;
		if(pos==-1){
			pos=4;
		}
	}	
	pic.src=imagesList[pos];
	for(var i=0;i<btns_li.length;i++){	
		btns_li[i].style.backgroundColor="#fff";
	}
	btns_li[pos].style.backgroundColor="yellow";
}
//点击btns_li[i]切换图片
for(var i=0;i<btns_li.length;i++){
	btns_li[i].setAttribute("index",i);
	btns_li[i].onmouseover=createDetails;
	btns_li[i].onmouseout=function(){		
		this.lastChild.className="detail_add";
	}
	btns_li[i].onclick=function(){
		for(var i=0;i<btns_li.length;i++){	
			btns_li[i].style.backgroundColor="#fff";
		}
		this.style.backgroundColor="yellow";
		pic.src=imagesList[this.getAttribute("index")];
	}
}
function createDetails(){
	var div=document.createElement("div");
	div.className="detail";
	this.appendChild(div);
	div.innerHTML+="<span class='dot_bottom'></span>\
					<img class='detail_pic' src='"+imagesList[this.getAttribute("index")]+"' alt='文字一'/>";
}
