
currentScroll = 0
didScroll = false
# on scroll, let the interval function know the user has scrolledO
# run hasScrolled() and reset didScroll status
setInterval( () ->
  if (didScroll)
    hasScrolled()
    didScroll = false;
, 250)

hasScrolled = () ->
  if ( $(@).scrollTop() < currentScroll )
    showNavi()
  else
    hideNaviIfNeeded()
  currentScroll = $(@).scrollTop();
   # do stuff here...

showNavi = () =>
  $('#navigation').removeClass('is-hidden')
  $('#navigation').addClass('is-visible')

hideNaviIfNeeded = () ->
  if currentScroll > 100
    $('#navigation').addClass('is-hidden')
    $('#navigation').removeClass('is-visible')


(($) ->
  ) jQuery

$(window).scroll( (event) ->
    didScroll = true;
);
