---
layout: sub-page
title: Kiilopää
---

{% assign sorted_pages = site.kiilopaa_sections | sort:"order_no" %}

{% for section in sorted_pages | sort:order_no %}	
 <section class="main-content text-center">
   {% if section.contained %}
    <div class="container">
   {% endif %}

   <h2>{{ section.title }}</h2> 
   <p>{{ section.output  }}</p>
   {% if section.contained == "true"  %}
    </div>
   {% endif %}
 </section>
{% endfor %}

