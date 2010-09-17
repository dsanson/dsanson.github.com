---
title: Philosophy 670
layout: phil670
section: main
feed: atom.xml

---

<article class="postindex">

<ul>
{% for post in site.categories.670f2010 %}
<li><span class="postdate">{{ post.date | date_to_string }}</span>: <a class="title" href="{{ post.url }}">{{ post.title }}</a> </li>
{% endfor %}
<li>
    <a href="javascript:menutoggle();" id="expand-switch">↓Show all↓</a>
    <a href="javascript:menutoggle();" id="collapse-switch">↑Show recent↑</a>
</li>
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