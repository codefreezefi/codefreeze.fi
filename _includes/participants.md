<section class="main-content text-center">
  <h2><a name="participants"></a><span class='text-line-through'>Speakers</span> Participants</h2>
  {% for participant in site.participants  %}	
      <div class="participant">
      <div class="name">{{ participant.name }}</div> 
      <p>{{ participant.twitter }}</p> 
      </div>
  {% endfor %}
</section>

