---
layout: name
title: Research
section: research
feed: /research/atom.xml
---

<section class="publications">

{% comment %}
<h1>In Progress</h1>
{% for post in site.categories.research %}
{% if post.status == "in-progress" %}
<article class="post">
{{ post.content }}
</article>
{% endif %}
{% endfor %}
{% endcomment %}

<section>
<h1>Papers</h1>
{% for post in site.categories.research %}
{% if post.status == "published" or post.status == "in-review" or post.status == "forthcoming" %}
<article class="post">
{{ post.content }}
</article>
{% endif %}
{% endfor %}
</section>

<section>
<h1>Dissertation</h1>
{% for post in site.categories.research %}
{% if post.status == "dissertation" %}
<article class="post">
{{ post.content }}
</article>
{% endif %}
{% endfor %}
</section>