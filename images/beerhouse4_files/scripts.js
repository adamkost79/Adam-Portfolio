(function() {
  var __sections__ = {};
  (function() {
    for(var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
      __sections__[s[i]] = true;
  })();
  (function() {
  if (!__sections__["homepage-shop-by-category"] && !window.DesignMode) return;
  try {
    
$(document).ready(function(){
  $('.shop-by-category .block-title').on('click', function() {
    if ($(this).next('.widget-content').hasClass('active')) {
      $('.widget-content').removeClass('active').slideUp();
      $('.block-title, .menu__item').removeClass('open');
    } else {
      $('.widget-content').removeClass('active').slideUp();
      $('.block-title, .menu__item').removeClass('open');
      $(this).next('.widget-content').addClass('active').slideDown();
      $(this).addClass('open').closest('.menu__item').addClass('open');
    }
  });
});

  } catch(e) { console.error(e); }
})();

})();
