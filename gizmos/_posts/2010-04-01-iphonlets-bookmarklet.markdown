---
layout: gizmos-post
title: iPhonlets Bookmarklet
section: gizmos
comments: 1
excerpt: A bookmarklet that makes it possible to bookmark bookmarklets in browsers that only allow you to bookmark the page you are on. This includes Mobile Safari, the browser on iOS.
---

This is a meta-bookmarklet: it is a bookmarklet that makes it possible to bookmark bookmarklets in browsers that only allow you to bookmark the page you are on. This includes Mobile Safari, the browser iOS. It also includes Opera Mini, I am told.

This is not the only bookmarklet that does this. The "[Grady Morgan Bookmarklet](http://www.ipodtouchfans.com/forums/showthread.php?t=91132)" did something similar but has gone missing; the [CSS Ninja](http://www.thecssninja.com/javascript/iphone-bookmarklet) wrote a bookmarklet that does the same thing. And Chris Johnsen has a [Bookmarklet to view Bookmarklets](http://chrisjohnsen.github.com/view-bookmarklets-bookmarklet/) that takes a different approach to solving the same problem.

A bookmarklet is a link of the form `href="javascript:blah"`. Rather than taking you to a new webpage, it executes a bit of javascript on the page that you have already loaded. The iPhonlets bookmarklet changes all `href="javascript:blah"` links on a page to `href="http://example.com/#javascript:blah"` links. (As a visual cue, it surrounds converted links in a yellow box.) Once this has been done, you can follow the link to `http://example.com#javascript:blah` and bookmark the page. You can then edit the bookmark, deleting the `http://example.com/#` bit from the URL, leaving just the `javascript:blah` bit. 

The process is a pain, but it is less of a pain than any other option, and it works.

I realize that my instructions are hard to follow. The [CSS Ninja](http://www.thecssninja.com/javascript/iphone-bookmarklet) provides screen shots detailing how it is done. So does the site for the [iTransmogrify](http://joemaller.com/___) bookmarklet.

To install the iPhonlets bookmarklet, drag this link -- 
<a class="bml" href="javascript:function%20F()%20{var%20i,L;L=document.links;for%20(i=0;i<L.length;i++)%20{if%20(L[i].protocol==%22javascript:%22)%20{L[i].href=%22http://example.com/#%22+L[i].href;L[i].style.padding=%225px%22;L[i].style.border=%22thin%20solid%20#ccc%22;L[i].style.background=%22#ff3%22;L[i].style.color=%22#000%22;}}};F();">iPhonlets</a> -- to the toolbar on your desktop computer and sync your bookmarks with your iPhone.

Just kidding. You can do that, but you can also use the bookmarklet to install itself: click once on the bookmarklet above, right now, on your iPhone. It should turn yellow. Now click on it again, bookmark the resulting page, and edit out the `http://example.com/#` bit. Isn't it fabulous that you can use it to install itself?

For those interested in tweaking the bookmarklet, here is the human readable source:

~~~{.Javascript}
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
~~~

Wondering why you'd want bookmarklets on your iPhone? Take a look at 

+   [17 powerful bookmarklets for your iPhone](http://www.lifeclever.com/17-powerful-bookmarklets-for-your-iphone/)
+   [marklets.com](http://marklets.com)

