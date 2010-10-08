---
layout: name
title: Gizmos
section: gizmos
---

<article class="postindex">
    
<ul id="postindex">
{% for post in site.categories.gizmos %}
{% if post.categories contains "gizmos" %}
{% include postindex.html %}
{% endif %}
{% endfor %}
</ul>

</article>

{% for post in site.categories.gizmos %}
{% if post.categories contains "gizmos" %}
{% include postlist.html %}
{% endif %}
{% endfor %}

