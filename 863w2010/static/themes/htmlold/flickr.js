function jsonFlickrFeed(feed){
		try {
			var ran_number=Math.floor(Math.random()*feed.items.length);
			currentImage = feed.items[ran_number];
			imagetitle=currentImage.title;
			imagelink=currentImage.link;
			imageURL=currentImage.media.m; 
			showMedium(imageURL,imagelink,imagetitle);
		}
		catch(err) {}
}

function loadFlickr() {
	var myURL = "http://api.flickr.com/services/feeds/photos_public.gne?id=40808145%40N00&tags=picforhomepage&format=json";
	var headID = document.getElementsByTagName("head")[0];         
	var newScript = document.createElement('script');
	newScript.type = 'text/javascript';
	newScript.src = myURL;
	headID.appendChild(newScript);  
}

function showMedium(imgURL,imgLink,imgTitle) {
	y='<a href="'+imgLink+'">';
	y+='<img class="shadowed" ';
	y+='src="'+imgURL+'" title="'+imgTitle+'"></a>';
	document.getElementById('picframe').innerHTML=y;
}
