---
layout: gizmos-post
title: Using OSU EZProxy For Your Files
section: gizmos
comments: 0
excerpt: An htaccess file that redirects off-campus visitors through OSU's EZProxy server.
---

## Important Note ##

As of December 2011, this no longer works on the ASC web server, as ASC decided to move us over to a server running Microsoft IIS 6.0, rather than Apache, and there is no way to do this using Microsoft IIS 6.0. Oh well.

<del>


## Important Note ##

To get this work, you'll have to ask the [library IT division](http://library.osu.edu/sites/it/ER/index.php) to add your resource to the list of resources that work with OSU's EZProxy server. Keep in mind that this is a hack, so responsibility for making sure it continues to work lies with **you**, not the library IT staff.

## How To ##

Want part of your OSU webpage to be protected behind OSU's EZProxy server? Create a subfolder (e.g., sanson7/local/), create a text file named ".htaccess" in that folder, containing the following lines:

~~~{.Apache}
RewriteEngine On
RewriteCond %{REMOTE_ADDR} !^164\.107
RewriteCond %{REMOTE_ADDR} !^140\.254
RewriteCond %{REMOTE_ADDR} !^128\.146
RewriteCond %{REMOTE_ADDR} !^192\.68\.143 
RewriteCond %{REMOTE_ADDR} !^192\.12\.205 
RewriteCond %{REMOTE_ADDR} !^67\.39\.90 
RewriteCond %{REMOTE_ADDR} !^75\.12\.69
RewriteRule (.*) http://proxy.lib.ohio-state.edu/login?url=http://%{SERVER_NAME}%{REQUEST_URI} [R,L]
~~~

Now anyone who attempts to open something within that folder from off-campus will be automatically redirected through OSU's EZProxy service.

Too complicated? Download [this file](rename_to_dot_htaccess.txt), upload it to the appropriate folder on the webserver, and rename it to ".htaccess" (best to rename it after it is on the server; file names that begin with periods get special treatment on many operating systems).

</del>
