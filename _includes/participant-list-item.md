{% assign participant=include.participant%}
  <li>
    <img src="{{ participant.image }}" />
    <span class="name">{{ participant.name }}</span>
    {% if participant.twitter != null  %}
      <a href="https://twitter.com/{{ participant.twitter }}">@{{ participant.twitter }}</a>
    {% else %}
      &nbsp;
    {% endif %}
  </li>
