---
title: Readings
layout: philXXX
section: readings

---

<article class="postindex">
    
<ul id="postindex">
{% for post in site.categories.XXXTYYYY %}
{% if post.categories contains "readings" %}
{% include postindex.html %}
{% endif %}
{% endfor %}
</ul>

</article>

{% for post in site.categories.XXXTYYYY %}
{% if post.categories contains "readings" %}
{% include postlist.html %}
{% endif %}
{% endfor %}
