---
title: Discussion
layout: phil670
section: discuss
---

<article class="postindex">
    
<ul id="postindex">
{% for post in site.categories.670f2010 %}
{% if post.categories contains "discuss" %}
{% include postindex.html %}
{% endif %}
{% endfor %}
</ul>

</article>

{% for post in site.categories.670f2010 %}
{% if post.categories contains "discuss" %}
{% include postlist.html %}
{% endif %}
{% endfor %}