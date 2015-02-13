
{% for participant in include.collection %}
  {% include participant-list-item.md participant=participant %}
{% endfor %}
