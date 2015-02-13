{% assign participant=include.participant %}

 <section class="main-content text-center participant">
 <div class="container">

 <div class="image push-left">
   <img src="{{participant.image}}"/>
 </div>
 <div class="info push-left">
  <ul class="name">
   {{ participant.name }}
  </ul>
  {% if participant.twitter %}
    <ul class="twitter">
     <a href="https:/twitter.com/{{ participant.twitter }}">@{{ participant.twitter }}</a>
    </ul> 
  {% endif %}
  {% if participant.blog %}
    <ul class="blog">
     <a href="{{ participant.blog }}">{{ participant.blog }}</a>
    </ul> 
  {% endif %}
  <div class="own-words">
   {{ participant.output  }}
  </div> 
 </div>
 </div>
 </section>

