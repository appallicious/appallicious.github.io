---
layout: page
title: Press Releases
permalink: /press-release/
---

<ul class="post-list">
	{% for release in site.press-release %}
    <li>
      <h2>
        <a class="post-link" href="{{ release.url | relative_url }}">{{ release.title | escape }}</a>
      </h2>
    </li>
  {% endfor %}
</ul>
