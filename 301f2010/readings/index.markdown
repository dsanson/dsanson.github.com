---
title: Readings
layout: phil301
section: readings
---

<article class="postindex">
    
<ul id="postindex">
{% for post in site.categories.301f2010 %}
{% if post.categories contains "readings" %}
{% include postindex.html %}
{% endif %}
{% endfor %}
</ul>

</article>

{% for post in site.categories.301f2010 %}
{% if post.categories contains "readings" %}
{% include postlist.html %}
{% endif %}
{% endfor %}