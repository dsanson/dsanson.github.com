---
title: Philosophy 670
layout: phil670
section: main
feed: atom.xml

---

<article class="postindex">

<ul>
{% for post in site.categories.670f2010 %}
<li {% if forloop.index > 5 %}class="old-post" {% endif %}><span class="postdate">{{ post.date | date_to_string }}</span>: <a class="title" href="{{ post.url }}">{{ post.title }}</a>  {% if post.comments %}<span class="comments">(<a href="{{ post.url }}#disqus_thread">View Comments</a>)</span>{% endif %} </li>

{% endfor %}
</ul>
</article>

{% for post in site.categories.670f2010  %}
<article>
  <h1><a class="title" href="{{ post.url }}">{{ post.title }}</a> {% if post.comments %}<span class="comments">(<a href="{{ post.url }}#disqus_thread">View Comments</a>)</span>{% endif %}
  </h1>
  {{ post.content }}
  <hr>
</article>
{% endfor %}