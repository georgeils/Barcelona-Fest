$('.carousel').carousel({
  interval: 10000
})

$(document).ready(function () {
  $("#thumbnail-preview-indicators").carousel({
    interval: false
  });
});

$( document ).ready( function () {
  var url = window.location.href.substr( window.location.href.lastIndexOf( '/' ) + 1 );
  $( '.nav-item a' ).each( function () {
      if( $( this ).attr( 'href' ) === url || $( this ).attr( 'href' ) === '' ) {
          $( this ).parent( 'li' ).addClass( 'active' );
      }
  });
});