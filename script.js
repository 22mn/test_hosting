	
function clickme(){
	var index = 0;
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			var myObj = JSON.parse(this.responseText);
			index = Math.floor(Math.random() * (Object.keys(myObj).length));
			$("#quote-blk").text(myObj[index.toString()][0]);
			$("#author-blk").text(myObj[index.toString()][1]);
		}
	};
	xmlHttp.open("GET","quotes.txt",true);
	xmlHttp.send();
}

$(document).ready(function(){
	$('#info').popover({title: "<span id='siteInfo'>A <a href='https://www.freecodecamp.com/mgjean' target='_blank'>MGJEAN </a>Site.</span>",
		content: "<span id='siteWish'>Good day amigos!</span>",html:true,placement:"left"});
});
