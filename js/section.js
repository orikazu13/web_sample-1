$(document).ready(function() {
  $('#pagepiling').pagepiling({
    anchors: ['page1', 'page2', 'page3','page4'],
    // スクロール方向
    direction: 'vertical', //horizontal: 水平 vertical: 垂直
    easing: 'linear',
    navigation: {
      'textColor': '#fff',
      'bulletsColor': '#fff',
      'position': 'right'
    },
    scrollingSpeed: 1000,
    sectionSelector: '.contents',
    onLeave: function(index, nextIndex, direction){
      $('#cssmenu ul li a').each(function(){
        var $href = $(this).attr('href');
        if(location.href.match($href)) {
          $($href).attr('class','active');
        } else {
          $($href).removeAttr('class');
        }
      });
      onClick();
    }
  });
});
