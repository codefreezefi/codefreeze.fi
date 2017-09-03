---
layout: sub-page
---

{% assign participants = site.y2017 %}

{% for participant in participants %}
  {% capture participants_path %}{{ participants.relative_directory }}/participants/{% endcapture %}

  {% if participant.relative_path contains participants_path %}

    {% include participant-page.md participant=participant %}

  {% endif %}
{% endfor %}
