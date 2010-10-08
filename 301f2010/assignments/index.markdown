---
title: Assignments
layout: phil301
section: assignments

---

<article class="postindex">
    
<ul id="postindex">
{% for post in site.categories.301f2010 %}
{% if post.categories contains "assignments" %}
{% include postindex.html %}
{% endif %}
{% endfor %}
</ul>

</article>

{% for post in site.categories.301f2010 %}
{% if post.categories contains "assignments" %}
{% include postlist.html %}
{% endif %}
{% endfor %}