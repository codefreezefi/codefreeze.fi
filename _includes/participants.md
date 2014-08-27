<section class="main-content text-center">
  <h2><a name="participants"></a><span class='text-line-through'>Speakers</span> Participants</h2>
     <div class="participant">
        <div class="name"><a href="https://github.com/rinkkasatiainen/codefreeze.fi">You?</a></div>
     </div>
  {% for participant in site.participants  %}	
      <div class="participant">
      <div> <span class="name">{{ participant.name }}</span>: @{{ participant.twitter }}</div> 
  {% endfor %}
</section>

