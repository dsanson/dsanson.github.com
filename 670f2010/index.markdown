---
title: Philosophy 670
layout: phil670
section: home
feed: atom.xml

---

<article class="postindex">

<h1><a href="announcements">Announcements</a></h1>
<ul>
{% for post in site.categories.670f2010 %}
<li><span class="postdate">{{ post.date | date_to_string }}</span>: <a class="title" href="{{ post.url }}">{{ post.title }}</a> </li>
{% endfor %}
</ul>
</article>
