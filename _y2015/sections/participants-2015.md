---
order_no: 1
contained: true
title: "<del>Speakers</del> Participants from 2015"
---

<ol class="participants-list">

{% assign participants = site.y2015 %}

{% for participant in participants %}
 {% capture participants_path %}{{ participants.relative_directory }}/participants/{% endcapture %}
 
 {% if participant.relative_path contains participants_path %}
  {% include participant-list-item.md participant=participant  %} 
 {% endif %}

{% endfor %}

</ol>

