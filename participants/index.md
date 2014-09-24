---
layout: sub-page
contained: true
---

{% assign participants = site.participants  %}
{% for p in participants %}

 <section class="main-content text-center participants">
 <div class="image push-left">
   <img src="{{p.image}}"/>
 </div>
 <div class="info push-left">
   {{ p.name }}
   {{ p.twitter }}
   {{ p.blog }}
   {{ p.output  }}
 </div>
 </section>
{% endfor %}
