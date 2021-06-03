document.querySelector(".menu_boutton").addEventListener("click",()=>{
	console.log("aaaaa")
	if(document.querySelector(".menu_mobile").style.display=="flex"){
	document.querySelector(".menu_mobile").style.display="none"}
	else document.querySelector(".menu_mobile").style.display="flex"

})