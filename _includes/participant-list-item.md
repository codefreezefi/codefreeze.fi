{% assign participant=include.participant%}
  <li class="flex-item">
    <img src="{{ participant.image }}" />
    <span class="name">{{ participant.name }}
    <br/>
    {% if participant.twitter != null  %}
      <a href="https://twitter.com/{{ participant.twitter }}">@{{ participant.twitter }}</a>
    {% else %}
      &nbsp;
    {% endif %}
    </span>
  </li>
