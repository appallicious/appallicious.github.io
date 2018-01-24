---
layout: page
title: Products
permalink: /products/
---

<div id='products-img-container'>
	{% for product in site.products %}
		<a href="{{ product.url | relative_url }}"><img class='product-type' src="/assets/{{ product.name }}.png" /></a>
	{% endfor %}
</div>