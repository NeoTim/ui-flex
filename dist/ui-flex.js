(function(){
  'use strict';

  $(document).on('ready', function(){

    var toggleClose = $('.flex-toggle-close');
    var toggleFold  = $('.flex-toggle-fold');

    var toggleCloseEvents = {
      aside: toggleAsideClose
    }
    var toggleFoldEvents = {
      aside: toggleAsideFold
    }


    toggleClose.each(function (index, el){
      $(el).on('click',  toggleCloseEvents[ $(el).data('toggle') ]($(el).data('target')) )
    });

    toggleFold.each(function (index, el){
      $(el).on('click',  toggleFoldEvents[ $(el).data('toggle') ]($(el).data('target')) )
    });



    function toggleAsideClose(target){
      target = $("#"+target);
      return function(event){
        target.toggleClass('close-aside')
      }
    }
    function toggleAsideFold(target){
      target = $("#"+target);
      return function(event){
        target.toggleClass('fold-aside')
      }
    }


  });

})();