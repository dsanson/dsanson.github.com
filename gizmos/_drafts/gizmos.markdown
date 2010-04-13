%
% David Sanson
% September 11, 2009
meta-toc: 1
meta-page: 1

## Unofficial OSU Philosophy Department Colloquia Calendar

This is not the [official calendar](http://philosophy.osu.edu/news/colloquia/default.cfm) for our department colloquia. This is an unofficial google calendar which I maintain for my own use. It differs from the official calendar in a few important ways:

1. I (try to) include *all* philosophy talks at OSU, not just official colloquia.
2. I include talks as soon as they've been scheduled.

<iframe src="http://www.google.com/calendar/embed?showDate=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=400&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=pgpbqbvg98d0a0opno8n688tsc%40group.calendar.google.com&amp;color=%235A6986&amp;ctz=America%2FNew_York" style=" border-width:0; margin-left: auto; margin-right: auto" width="500" height="400" frameborder="0" scrolling="no"></iframe>

+   Use this link to subscribe to the calendar in your feed reader: [xml](http://www.google.com/calendar/feeds/pgpbqbvg98d0a0opno8n688tsc%40group.calendar.google.com/public/basic)
+   Use this link to subscribe to the calendar in your calendar software: [ical](http://www.google.com/calendar/ical/pgpbqbvg98d0a0opno8n688tsc%40group.calendar.google.com/public/basic.ics)

## OSU EZProxy Bookmarklet

This "[bookmarklet](http://en.wikipedia.org/wiki/Bookmarklet)" allows for easy access to OSU-restricted resources from off-campus, via the OSU EZProxy service. To use, drag this link -- <a class="bml" href="javascript:location.href=location.href.replace(/(http:\/\/.*?)\//,%22$1.proxy.lib.ohio-state.edu/%22)">OSU Proxify</a> -- to your browser's bookmark toolbar. When you arrive at a site that requires the proxy, like [this article on jstor](http://links.jstor.org/sici?sici=0031-8191%28195901%2934%3A128%3C12%3ATGTO%3E2.0.CO%3B2-Q), click on the bookmarklet, and you will be redirected to [the proxified version](http://www.jstor.org.proxy.lib.ohio-state.edu/view/00318191/ap060108/06a00040/0) of the site's url (you will be asked to login first).

## Using OSU EZProxy For Your Files

Want part of your OSU webpage to be protected behind OSU's EZProxy server? Create a subfolder (e.g., sanson7/local/), create a text file named ".htaccess" in that folder, containing the following lines:

	RewriteEngine On
	RewriteCond %{REMOTE_ADDR} !^164\.107
	RewriteCond %{REMOTE_ADDR} !^140\.254
	RewriteCond %{REMOTE_ADDR} !^128\.146
	RewriteCond %{REMOTE_ADDR} !^192\.68\.143 
	RewriteCond %{REMOTE_ADDR} !^192\.12\.205 
	RewriteCond %{REMOTE_ADDR} !^67\.39\.90 
	RewriteCond %{REMOTE_ADDR} !^75\.12\.69
	RewriteRule (.*) http://proxy.lib.ohio-state.edu/login?url=http://%{SERVER_NAME}%{REQUEST_URI} [R,L]

Now anyone who attempts to open something within that folder from off-campus will be automatically redirected through OSU's EZProxy service.

Too complicated? Download [this file](rename_to_dot_htaccess.txt), upload it to the appropriate folder on the webserver, and rename it to ".htaccess" (best to rename it after it is on the server; file names that begin with periods get special treatment on many operating systems).

I suspect this use of OSU's EZProxy service is unsupported, perhaps even frowned upon. I've tested it on my OSU humanities web folder and it worked. It hasn't worked for me on externally hosted web sites. YMMV.

## iPhonlets Bookmarklet

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

