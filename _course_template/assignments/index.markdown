---
title: Assignments
layout: philXXX
section: assignments

---

<article class="postindex">
<ul>
{% for post in site.categories.XXXTYYYY %}
{% if post.categories contains "assignments" %}
<li><span class="postdate">{{ post.date | date_to_string }}</span>: <a class="title" href="{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
</ul>
</article>