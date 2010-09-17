---
title: Assignments
layout: phil301
section: assignments

---

<article class="postindex">
<ul>
{% for post in site.categories.301f2010 %}
{% if post.categories contains "assignments" %}
<li {% if forloop.index > 5 %}class="old-post" {% endif %}><span class="postdate">{{ post.date | date_to_string }}</span>: <a class="title" href="{{ post.url }}">{{ post.title }}</a>  {% if post.comments %}<span class="comments">(<a href="{{ post.url }}#disqus_thread">View Comments</a>)</span>{% endif %} </li>
{% endif %}
{% endfor %}
</ul>
</article>