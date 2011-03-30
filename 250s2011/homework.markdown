---
title: Homework
layout: phil250
section: homework

---


{% assign cat=site.categories.250s2011 %}
{% assign subcat="homework"%}

<article class="postindex">

<ul id="postindex">
{% for post in cat %}
{% if post.category == subcat %}
{% include postindex.html %}
{% endif %}
{% endfor %}
</ul>

</article>

{% for post in cat %}
{% if post.category == subcat %}
{% include postlist.html %}
{% endif %}
{% endfor %}



