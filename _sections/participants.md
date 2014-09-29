---
order_no: 5
about: participate
contained: true
title: "<span class='text-line-through'>Speakers</span> Participants"
---
<ol class="participants-list">
  <li>
    <a href="https://github.com/rinkkasatiainen/codefreeze.fi#readme" class="toggle-git-help"><img src="images/user-add.jpg"/></a>
    <span class="name">You?</span>
    <a href="https://github.com/rinkkasatiainen/codefreeze.fi#readme" class="toggle-git-help">Register with only one commit</a>
  </li>

{% for participant in site.participants  %}	
  <li>
    <img src="{{ participant.image }}" />
    <span class="name">{{ participant.name }}</span>
    {% if participant.twitter != null  %}
      <a href="https://twitter.com/{{ participant.twitter }}">@{{ participant.twitter }}</a>
    {% else %}
      &nbsp;
    {% endif %}
  </li>
{% endfor %}
</ol>
