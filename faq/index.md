---
layout: sub-page
---

{% assign sorted_pages = site.faq | sort:order_no %}

{% for section in sorted_pages %}	
 <section class="main-content text-center">
   {% if section.contained %}
    <div class="container">
   {% endif %}

   <h2>{{ section.sub-title }}</h2> 
   <p>{{ section.output  }}</p>
   {% if section.contained   %}
    </div>
   {% endif %}
 </section>
{% endfor %}

