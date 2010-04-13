---
title: Philosophy 301
layout: phil301
section: home
feed: atom.xml

---


<article class="postindex">
    
<h1><a href="announcements">Announcements</a></h1>

<ul>
{% for post in site.categories.301f2010 %}
<li><span class="postdate">{{ post.date | date_to_string }}</span>: <a class="title" href="{{ post.url }}">{{ post.title }}</a>  {% if post.comments %}<span class="comments">(<a href="{{ post.url }}#disqus_thread">View Comments</a>)</span>{% endif %} </li>
{% endfor %}
</ul>
</article>

<hr>

<article>
<div id="recentcomments" class="dsq-widget">
    <h1>Recent Comments</h1>
    <script type="text/javascript" src="http://disqus.com/forums/301/recent_comments_widget.js?num_items=5&hide_avatars=0&avatar_size=24&excerpt_length=200&disqus_category_id=342571">
    </script>
</div>
</article>

