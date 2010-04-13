---
layout: gizmos-post
title: iPhonlets Bookmarklet
section: gizmos
comments: 1
---

This is a meta-bookmarklet: it makes it possible to add any bookmarklet to your iPhone or iPod Touch directly, without syncing to a desktop computer running Safari. (I assume it is similar in function to the "[Grady Morgan Bookmarklet](http://www.ipodtouchfans.com/forums/showthread.php?t=91132)," which has gone missing from the web.)

The bookmarklet changes all `href="java­script:blah"` links on a page to `href="http://osu.edu/mobile/#java­script:blah"` links. (As a visual cue, it surrounds converted links in yellow.) You then visit the link (it will take you to osu's webpage) and bookmark it. You then edit the bookmarked address, deleting the `http://osu.edu/mobile/#` bit. The process is a pain, but it works. (Any suggestions for alternative prefixes? The usual google prefix was giving me trouble...)

This process has been described on a few different sites, which provide iPhone friendly links already for their bookmarklets, and have more complete instructions about how to add them and edit them, including screenshots:

-  [the iTransmogrify website](http://joemaller.com/___?javascript:if%28typeof%28iTransmogrify%29%3D%3D%27undefined%27%29%7Bvar%20s%3Ddocument.createElement%28%27script%27%29%3Bs.src%3D%27http%3A%2F%2Fjoemaller.com%2FiTransmogrify-latest.js%3Fq%3D%27%2B%28new%20Date%29.getTime%28%29%3Bdocument.getElementsByTagName%28%27head%27%29%5B0%5D.appendChild%28s%29%7Dvoid%280%29)
-  [the iClipper website](http://kentbrewster.com/iclipper/)

To use, drag this link -- 
<a class="bml" href="javascript:function%20F()%20{var%20i,L;L=document.links;for%20(i=0;i%3CL.length;i++)%20{if%20(L[i].protocol==%22javascript:%22)%20{L[i].href=%22http://osu.edu/mobile/#%22+L[i].href;L[i].style.padding=%225px%22;L[i].style.border=%22thin%20solid%20%23ccc%22;L[i].style.background=%22%23ff3%22;L[i].style.color=%22%23000%22;}}};F();">iPhonlets</a> -- to your browser's toolbar on your computer and sync your bookmarks with your iPhone.

Just kidding. You can do that, of course, but to add the bookmarklet directly to your iPhone, you need to first use the bookmarklet to transform itself (and all the other bookmarklets on this page). So click once on the bookmarklet above right now. It should turn yellow. Now click on it again, bookmark the resulting page, and edit out the `http://osu.edu/mobile/#` bit. Isn't it fabulous that you can use it to install itself?

For those interested in tweaking the bookmarklet, here is the human readable source:

	function F() {
	 var i,L;
	 L=document.links;
	 for (i=0;i<L.length;i++) {
	  if (L[i].protocol=="javascript:") {
	   L[i].href="http://osu.edu/mobile/#"+L[i].href;
	   L[i].style.padding="5px";
	   L[i].style.border="thin solid #ccc";
	   L[i].style.background="#ff3";
	   L[i].style.color="#000";
	  }
	 } 
	};
	F();

Wondering why you'd want bookmarklets on your iPhone? Take a look at [these](http://www.lifeclever.com/17-powerful-bookmarklets-for-your-iphone/) for starters.

