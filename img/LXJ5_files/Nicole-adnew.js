$(function(){
	/*$(".Nicole-ad-li").eq(1).toggle(function(){
		$(".Nicole-QQ-box").css({"opacity":"1"}).fadeIn(500);
	},function(){
		$(".Nicole-QQ-box").css({"opacity":"0"}).fadeOut(500);
	});
	$(".Nicole-ad-li").eq(2).toggle(function(){
		$(".Nicole-share-box").css({"opacity":"1"});
	},function(){
		$(".Nicole-share-box").css({"opacity":"0"});
	});*/
	
	/*function NicoleFlag(X,Y,Num1,Num2){
		var flag=0;
		$(X).eq(Num1).click(function(){
			if(flag==0){
				$(Y).css({"opacity":"1"}).fadeIn(500);
				flag=1;
				$(".Nicole-BOX").eq(Num2).css({"opacity":"0"});
			}else{
				$(Y).css({"opacity":"0"}).fadeIn(500);
				flag=0;
			}
		});
	}

	NicoleFlag(".Nicole-ad-li",".Nicole-QQ-box",1,1);
	NicoleFlag(".Nicole-ad-li",".Nicole-share-box",2,0);
*/
var flag=0;
	 var flag1=0;

	
	$(".Nicole-ad-li").eq(2).click(function(){
		if(flag1==0){
			$(".Nicole-share-box").css({"display":"block"});
			  flag1=1;
			 $(".Nicole-QQ-box").css({"display":"none"});
			 flag=0;
			}else{
			$(".Nicole-share-box").css({"display":"none"});
			  flag1=0;
			}
	});
		
 
		
 



})