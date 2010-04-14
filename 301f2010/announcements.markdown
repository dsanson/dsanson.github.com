---
title: Announcements
layout: phil301
section: main

---

{% for post in site.categories.301f2010 %}
<article>
  <h1><a class="title" href="{{ post.url }}">{{ post.title }}</a> {% if post.comments %}<span class="comments">(<a href="{{ post.url }}#disqus_thread">View Comments</a>)</span>{% endif %}
  </h1>
  {{ post.content }}
  <hr>
</article>
{% endfor %}