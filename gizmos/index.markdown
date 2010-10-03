---
layout: name
title: Gizmos
section: gizmos
---

<article class="postindex">
<ul>
{% for post in site.categories.gizmos %}
<li><a class="title" href="{{ post.url }}">{{ post.title }}</a> {% if post.comments %}<span class="comments">(<a href="{{ post.url }}#disqus_thread">View Comments</a>)</span>{% endif %}</li>
{% endfor %}
</ul>
</article>

<hr>

{% for post in site.categories.gizmos %}
<article>
  <h1><a class="title" href="{{ post.url }}">{{ post.title }}</a> {% if post.comments %}<span class="comments">(<a href="{{ post.url }}#disqus_thread">View Comments</a>)</span>{% endif %}
  </h1>
  {% if post.excerpt != null %}
  {{ post.excerpt }}
  <a href="{{ post.url }}">→</a>
  {% else %}
  {{ post.content }}
  {% endif %}
  <hr>
</article>

{% endfor %}

