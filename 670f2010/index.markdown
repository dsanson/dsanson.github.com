---
title: Philosophy 670
layout: phil670
section: main
feed: atom.xml

---

<article class="postindex">
    
<ul id="postindex">
{% for post in site.categories.670f2010 %}
{% if post.categories contains "670f2010" %}
{% include postindex.html %}
{% endif %}
{% endfor %}
</ul>

</article>

{% for post in site.categories.670f2010 %}
{% if post.categories contains "670f2010" %}
{% include postlist.html %}
{% endif %}
{% endfor %}