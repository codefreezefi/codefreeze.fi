---
layout: sub-page
---

{% assign participants = site.participants  %}
{% for p in participants %}

 <section class="main-content text-center">
   {{ p.output  }}
 </section>
{% endfor %}
