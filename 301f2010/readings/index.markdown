---
title: Readings
layout: phil301
section: readings

---

<article class="postindex">
<ul>
{% for post in site.categories.301f2010 %}
{% if post.categories contains "readings" %}
<li><span class="postdate">{{ post.date | date_to_string }}</span>: <a class="title" href="{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
</ul>
</article>