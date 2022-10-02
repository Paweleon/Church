

let currentNumber = 1;

document.querySelector( '#slide' + currentNumber ).classList.add( 'show' );
document.querySelector( '#pin' + currentNumber ).classList.add( 'selected' );

function showSlide(newNumber) {
   
   document.querySelector( '.show' ).classList.remove( 'show' );
   document.querySelector( '#slide' + newNumber ).classList.add( 'show' );
   currentNumber = newNumber;
   SelectPin( newNumber );
}
/* przyciski*/ 

for (let numerPinu = 1; numerPinu <= 7; numerPinu++) {
    document
      .querySelector('#pin' + numerPinu)
      .addEventListener( 'click', function () {
        showSlide(numerPinu);
      });
  }


  /*Strzałka w prawo */

  function showNextSlide( ) {
    let newNumber = currentNumber + 1;
    if( newNumber > 7 ) {
      newNumber = 1;
    }
    showSlide( newNumber );
  }
  document.querySelector( '#next' ).addEventListener( 'click', showNextSlide );

  /*Strzałka w lewo */

  function showPreviousSlide( ) {
    let newNumber = currentNumber - 1;
    if( newNumber < 1 ) {
      newNumber = 7;
    }
    showSlide( newNumber );
  }
  document.querySelector( '#prev' ).addEventListener( 'click', showPreviousSlide );

  function SelectPin(newNumber) {
   
    document.querySelector( '.selected' ).classList.remove( 'selected' );
    document.querySelector( '#pin' + newNumber ).classList.add( 'selected' );
    currentNumber = newNumber;
 }

 /*Pokaz slajdów */

 let playing = false;
 let slideshowInterval;


 function playButtonClicked( ) {
    if ( playing === true ) {
        playing = false;
    } else {
        playing = true;
    }
}
document.querySelector( '#play' ).addEventListener( 'click', playButtonClicked );



function playButtonClicked( ) {
    if ( playing === true ) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
}
document.querySelector( '#play' ).addEventListener( 'click', playButtonClicked );

function startSlideshow( ) {
    document.querySelector( '#play' ).classList.add( 'on' );
    playing = true;
    slideshowInterval = setInterval( showNextSlide, 2500 );
}

function stopSlideshow( ) {
    document.querySelector( '#play' ).classList.remove( 'on' );
    playing = false;
    clearInterval( slideshowInterval );
}




