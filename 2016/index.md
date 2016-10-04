---
layout: sub-page
---

{% assign sorted_pages = site.y2016 | sort:"order_no" %}


{% for section in sorted_pages | sort:order_no %}

{% capture section_path  %}{{ site.collections.y2016.relative_directory }}/sections{% endcapture %}

{% if section.relative_path contains section_path  %}

 <section class="main-content text-center">


   {% if section.contained %}
    <div class="container">
   {% endif %}

   <h2>{{ section.title }}</h2>
   <p>{{ section.output  }}</p>
   <p class="author">{{ section.author }}</p>
   {% if section.contained   %}
   </div>
   {% endif %}
 </section>
{% endif %}

{% endfor %}
