---
title: Assignments
layout: philXXX
section: assignments

---

<article class="postindex">
    
<ul id="postindex">
{% for post in site.categories.XXXTYYYY %}
{% if post.categories contains "assignments" %}
{% include postindex.html %}
{% endif %}
{% endfor %}
</ul>

</article>

{% for post in site.categories.XXXTYYYY %}
{% if post.categories contains "assignments" %}
{% include postlist.html %}
{% endif %}
{% endfor %}