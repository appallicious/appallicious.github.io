---
layout: page
title: Products
permalink: /products/
---

Appallicious is a data collection and aggregation company that creates products to help banks, businesses and government create opportunity, savings, efficiency and value from all types of data.

Our products include solutions for the following:

<div id='products-img-container'>
	{% for product in site.products %}
		<a href="{{ product.url | relative_url }}"><img class='product-type' src="/assets/{{ product.name }}.png" /></a>
	{% endfor %}
</div>