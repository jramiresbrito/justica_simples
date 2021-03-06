import Typed from 'typed.js';

const initTyped = () => {

  //
  // var typed = new Typed('.typed', options);

  const banner = document.getElementById("banner-typed-text")
  if (banner) {

    var options = {
      strings: ['<p>Entenda seu processo e <strong>garanta seu Direito</strong></p>'],
      typeSpeed: 50,
      loop: true,
      contentType: 'html',
      fadeOut: false,
      startDelay: 20,
      backDelay: 10000,
      showCursor:false
    };

    new Typed('#banner-typed-text', options );
  }


}

export { initTyped }
