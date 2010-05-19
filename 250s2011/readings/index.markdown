---
title: Readings
layout: phil250
section: readings

---

<article class="postindex">
<ul>
{% for post in site.categories.250s2011 %}
{% if post.categories contains "readings" %}
<li><span class="postdate">{{ post.date | date_to_string }}</span>: <a class="title" href="{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
</ul>
</article>
