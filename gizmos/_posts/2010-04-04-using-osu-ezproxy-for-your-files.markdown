---
layout: gizmos-post
title: Using OSU EZProxy For Your Files
section: gizmos
comments: 1
excerpt: An htaccess file that redirects off-campus visitors through OSU's EZProxy server. This **no longer works** with people.cohums.ohio-state.edu urls.
---

**This no longer works** on my OSU humanities web page. It looks like the proxy has been configured to no longer accept people.cohums.ohio-state.edu urls.

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

