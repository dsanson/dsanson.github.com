---
layout: name
title: Research — David Sanson
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
{% if post.status == "published" or post.status == "in-review" or post.status == "forthcoming" or post.status == "draft" or post.status == "under-revision" %}
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

<section>
<h1><a href="http://en.wikipedia.org/wiki/Double_dactyl">Double Dactyls</a></h1>
{% for post in site.categories.research %}
{% if post.status == "poetry" %}
<article class="post">
{{ post.content }}
</article>
{% endif %}
{% endfor %}
</section>

