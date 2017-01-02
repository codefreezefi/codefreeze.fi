{% assign lang = page.lang %}
{% assign sorted_pages = site.pages | sort:"order_no" %}
{% assign headers  = site.headings | sort:"order_no" %}
<div class="site-sub-page" >

{% capture section_path  %}_pages{{ page.permalink }}{% endcapture %}
{% capture heading_path  %}_headings{{ page.permalink }}{% endcapture %}

{% for header in headers | sort:order_no 
  %} {% if header.relative_path contains heading_path  
    %} {{ header }}
  {% endif 
%} {% endfor %}

{% for section in sorted_pages | sort:order_no 
  %}  {% if section.relative_path contains section_path  
  %} 
<section  class="main-content text-center {% 
   if section.class 
   %}{{ section.class }}{% endif %}">
   {{ section.output || markdownify }}
</section>
{% endif 
%} {% endfor %}

