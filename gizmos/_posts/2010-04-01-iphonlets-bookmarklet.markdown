---
layout: gizmos-post
title: iPhonlets Bookmarklet
section: gizmos
comments: 1
---

This is a meta-bookmarklet: it is a bookmarklet that makes it possible to add  bookmarklets directly to browsers that don't allow you to bookmark javascript links, like Mobile Safari and Opera Mini. 

It is not the only bookmarklet that does this. The "[Grady Morgan Bookmarklet](http://www.ipodtouchfans.com/forums/showthread.php?t=91132)" did something similar; the [CSS Ninja](http://www.thecssninja.com/javascript/iphone-bookmarklet) also has a bookmarklet that does the same thing.

The bookmarklet changes all `href="javascript:blah"` links on a page to `href="http://example.com/#javascript:blah"` links. (As a visual cue, it surrounds converted links in a yellow box.) You can then follow the link to `http://example.com#javascript:blah` and bookmark it. You can then edit the bookmarked address, deleting the `http://example.com/#` bit, leaving just the `javascript:blah` bit. The process is a pain, but it is less of a pain than any other option, and it works.

My instructions aren't great. The [CSS Ninja](http://www.thecssninja.com/javascript/iphone-bookmarklet) provides screen shots detailing how it is done.

To use, drag this link -- 
<a class="bml" href="javascript:function%20F()%20{var%20i,L;L=document.links;for%20(i=0;i<L.length;i++)%20{if%20(L[i].protocol==%22javascript:%22)%20{L[i].href=%22http://example.com/#%22+L[i].href;L[i].style.padding=%225px%22;L[i].style.border=%22thin%20solid%20#ccc%22;L[i].style.background=%22#ff3%22;L[i].style.color=%22#000%22;}}};F();">iPhonlets</a> -- to your browser's toolbar on your computer and sync your bookmarks with your iPhone.

Just kidding. You can do that, of course, but to add the bookmarklet directly to your iPhone, you need to first use the bookmarklet to transform itself (and all the other bookmarklets on this page). So click once on the bookmarklet above, right now, on your iPhone. It should turn yellow. Now click on it again, bookmark the resulting page, and edit out the `http://example.com/#` bit. Isn't it fabulous that you can use it to install itself?

For those interested in tweaking the bookmarklet, here is the human readable source:

	function F() {
	 var i,L;
	 L=document.links;
	 for (i=0;i<L.length;i++) {
	  if (L[i].protocol=="javascript:") {
	   L[i].href="http://example.com/#"+L[i].href;
	   L[i].style.padding="5px";
	   L[i].style.border="thin solid #ccc";
	   L[i].style.background="#ff3";
	   L[i].style.color="#000";
	  }
	 } 
	};
	F();

Wondering why you'd want bookmarklets on your iPhone? Take a look at 

+   [17 powerful bookmarklets for your iPhone](http://www.lifeclever.com/17-powerful-bookmarklets-for-your-iphone/)
+   [marklets.com](http://marklets.com)

