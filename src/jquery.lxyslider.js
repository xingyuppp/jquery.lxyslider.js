// my first jquery plugin
// A Sider for everything
// author : luxinyu@gmail.com

;(function (factory){
  
  if(typeof define === 'function'){

    define(function(require){

        require('jquery');
        
        return factory( $,document,window )

    })
  }else{

    factory( jQuery,document,window )
  }
  




})(function($,doc,global){


var defaults = {

      unit : 200, // slider item unit width
      event_namespace : 'lxy-slider'

}


$.fn.lxyslider = function(opts){

  //configure options
  var opts = $.extend( {},defaults,opts )

  //each jquery colletcion
  this.each( function( i,el ){

      var $el = $( el )

      //initialize
      var $belt = $el.children('.belt'),
          $list = $belt.children('.list')

      var len = $list.children().length

      //state var
      var current = 0

      //event drive
      $el.on( opts.event_namespace + '.moveTo' , moveTo )


      //handler

      // - for previous . + for next
      function moveTo( e, flag ){

        var to = current + flag

            to = ( to >= len ) ? 0 :
                 ( to < 0    ) ? (len - 1) :
                 to;


            $list.animate({
                left : -( to * opts.unit )
            })

            $el.data( 'current', current = to )


      }


  } )

  return this;

}
   
   return $
})


