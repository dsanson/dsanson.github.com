---
title: Readings
layout: philXXX
section: readings

---

<article class="postindex">
<ul>
{% for post in site.categories.XXXTYYYY %}
{% if post.categories contains "readings" %}
<li {% if forloop.index > 5 %}class="old-post" {% endif %}><span class="postdate">{{ post.date | date_to_string }}</span>: <a class="title" href="{{ post.url }}">{{ post.title }}</a>  {% if post.comments %}<span class="comments">(<a href="{{ post.url }}#disqus_thread">View Comments</a>)</span>{% endif %} </li>
{% endif %}
{% endfor %}
</ul>
</article>

{% for post in site.categories.XXXTYYYY %}
{% if post.categories contains "readings" %}
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
{% endif %}
{% endfor %}