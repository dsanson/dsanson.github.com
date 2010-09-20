---
title: Readings
layout: phil670
section: readings

---

<article class="postindex">
<ul>
{% for post in site.categories.670f2010 %}
{% if post.categories contains "readings" %}
<li {% if forloop.index > 5 %}class="old-post" {% endif %}><span class="postdate">{{ post.date | date_to_string }}</span>: <a class="title" href="{{ post.url }}">{{ post.title }}</a>  {% if post.comments %}<span class="comments">(<a href="{{ post.url }}#disqus_thread">View Comments</a>)</span>{% endif %} </li>
{% endif %}
{% endfor %}
</ul>
</article>

{% for post in site.categories.670f2010 %}
{% if post.categories contains "readings" %}
<article>
  <h1><a class="title" href="{{ post.url }}">{{ post.title }}</a> {% if post.comments %}<span class="comments">(<a href="{{ post.url }}#disqus_thread">View Comments</a>)</span>{% endif %}
  </h1>
  {{ post.content }}
  <hr>
</article>
{% endif %}
{% endfor %}