
$(function() {
  init();

  // WET code ahead
  $('.card-container:nth-child(1) .card-4').click(function() {
    if (window.page === 'home') {
      window.titleReset[window.page]();
      $('.name').typistAdd('\'s Projects');
      window.page = 'code';
      showMenu();
      showPage(window.page);
    }
  });

  // :not with :nth-child not working for some reason
  // TODO: combine logic with above
  $('.menu-card-16:nth-child(2)').click(function() {
    if (!$(this).hasClass('home-card')) {
      console.log('menu call to code');
      window.titleReset[window.page]();
      $('.menu-card-16:nth-child(' + window.titleToNth[window.page] + ')').removeClass('home-card');
      $('.name').typistAdd('\'s Projects');
      window.page = 'code';
      showMenu();
      showPage(window.page); 
    }
 });

  $('.card-container:nth-child(2) .card-4').click(function() {
    if (window.page === 'home') {
      window.titleReset[window.page]();
      $('.before-name').typistAdd('About ');
      window.page = 'about';
      showMenu();
      showPage(window.page);
    }
  });

  $('.menu-card-16:not(.home-card):nth-child(3)').click(function() {
    if (!$(this).hasClass('home-card')) {
      window.titleReset[window.page]();
      $('.menu-card-16:nth-child(' + window.titleToNth[window.page] + ')').removeClass('home-card');
      $('.before-name').typistAdd('About ');
      window.page = 'about';
      showMenu();
      showPage(window.page);
    }
  });

  $('.card-container:nth-child(3) .card-4').click(function() {
    if (window.page === 'home') {
      window.titleReset[window.page]();
      $('.name').typistAdd('\'s Resume');
      window.page = 'resume';
      showMenu();
      showPage(window.page);
    }
  });

  $('.menu-card-16:not(.home-card):nth-child(4)').click(function() {
    if (!$(this).hasClass('home-card')) {
      window.titleReset[window.page]();
      $('.menu-card-16:nth-child(' + window.titleToNth[window.page] + ')').removeClass('home-card');
      $('.name').typistAdd('\'s Resume');
      window.page = 'resume';
      showMenu();
      showPage(window.page);
    }
  });

  $('.card-container:nth-child(4) .card-4').click(function() {
    if (window.page === 'home') {
      window.titleReset[window.page]();
      $('.before-name').typistAdd('Reaching ');
      window.page = 'contact';
      showMenu();
      showPage(window.page);
    }
  });

  $('.menu-card-16:not(.home-card):nth-child(5)').click(function() {
    if (!$(this).hasClass('home-card')) {
      window.titleReset[window.page]();
      $('.menu-card-16:nth-child(' + window.titleToNth[window.page] + ')').removeClass('home-card');
      $('.before-name').typistAdd('Reaching ');
      window.page = 'contact';
      showMenu();
      showPage(window.page);
    }
  });

  $(document).on('click', '.home-card', function() {
    console.log('going home');
    window.titleReset[window.page]();
    window.page = 'home';
    homeCards();
    hideMenu();
    $(this).removeClass('home-card');
  })

  function init() {
    $('.card-4-text').fitText(1, {minFontSize: '32px'});
    // constants
    window.TYPE_TIME = 20;
    window.CARD_DELAY = 400;
    // code, about, resume, contact
    window.page = 'home';
    window.titleReset = {
      code: function() {
        $('.name').typistRemove(11);
      },
      about: function() {
        $('.before-name').typistRemove(6);
      },
      resume: function() {
        $('.name').typistRemove(9);
      },
      contact: function() {
        $('.before-name').typistRemove(9);
      },
      home: $.noop
    }
    window.titleToNth = {code: 2, about: 3, resume: 4, contact: 5};
    $.ajax({
      url: './js/colors.json',
      dataType: 'json',
      async: false,
      success: function(data) {
        window.cardColors = data;
      }
    });

    $('.name').typist({ text: 'Colby Guan', cursor: false, speed: window.TYPE_TIME});
    $('.before-name').typist({ text: '', cursor: false, speed: window.TYPE_TIME});

  }

  // Menu helpers
  function showMenu() {
    $('.menu-card-4').hide();
    $('.menu-card-16.card-16').addClass('card-16-active');
    $('.menu-text').hide();
    setTimeout(function() {
      $('.menu-card-16:nth-child(2) .menu-text').text('Code');
      $('.menu-card-16:nth-child(3) .menu-text').text('About');
      $('.menu-card-16:nth-child(4) .menu-text').text('Resume');
      $('.menu-card-16:nth-child(5) .menu-text').text('Contact');
      $('.menu-card-16:nth-child(' + window.titleToNth[window.page] + ') .menu-text').text('Home');
      $('.menu-card-16:nth-child(' + window.titleToNth[window.page] + ')').addClass('home-card');
      $('.menu-text').fadeIn(window.CARD_DELAY);
    }, window.CARD_DELAY * 2.5);
  }

  function hideMenu() {
    $('.menu-text').text('');
    setTimeout(function() {
      $('.menu-card-16.card-16').css('opacity', '1').removeClass('card-16-active').delay(window.CARD_DELAY).queue(function(next) {
        $(this).css('opacity', '');
        $('.menu-card-4').show(0);
        next();
      });
    }, window.CARD_DELAY * 1.5);
    $('.menu-card-4 .card-4-text').hide().delay(window.CARD_DELAY * 2.5).fadeIn(window.CARD_DELAY);
  }

  // Content helpers
  function showPage(pageName) {
    splitCards();
    setTimeout(function() {
      if (pageName === 'code') {
        joinCards(window.cardColors.bg1, window.cardColors['bg1-text'], function() {
          loremCard4();
          $('.card-4:not(.menu-card-4) .card-4-text').fadeIn(window.CARD_DELAY);
        });
      } else if (pageName === 'about') {
        joinCards(window.cardColors.bg2, window.cardColors['bg2-text'], function() {
          loremCard4();
          $('.card-4:not(.menu-card-4) .card-4-text').fadeIn(window.CARD_DELAY);
        });
      } else if (pageName === 'resume') {
        joinCards(window.cardColors.bg3, window.cardColors['bg3-text'], function() {
          loremCard4();
          $('.card-4:not(.menu-card-4) .card-4-text').fadeIn(window.CARD_DELAY);
        });
      } else  {
        joinCards(window.cardColors.bg4, window.cardColors['bg4-text'], function() {
          loremCard4();
          $('.card-4:not(.menu-card-4) .card-4-text').fadeIn(window.CARD_DELAY);
        });
      }
    }, window.CARD_DELAY * 1.5);
  }

  function homeCards() {
    splitCards();
    setTimeout(function() {
      $('.card-16:not(.menu-card-16').css('opacity', '1').removeClass('card-16-active').delay(window.CARD_DELAY).queue(function(next) {
        $(this).css({'background': '', 'opacity': ''});
        $('.card-container:nth-child(1) .card-4-text').text('Code');
        $('.card-container:nth-child(2) .card-4-text').text('About');
        $('.card-container:nth-child(3) .card-4-text').text('Resume');
        $('.card-4:not(.menu-card-4) .card-4-text').fadeIn(window.CARD_DELAY);
        next();
      });
      $('.card-4:not(.menu-card-4)').delay(window.CARD_DELAY).css({'background': '', 'color': ''}).show(0);
    }, window.CARD_DELAY * 1.5)
  }

  function splitCards() {
    $('.card-4:not(.menu-card-4)').hide();
    $('.card-4:not(.menu-card-4) .card-4-text').hide();
    $('.card-4:not(.menu-card-4) .card-4-text').text('');
    $('.card-16:not(.menu-card-16').addClass('card-16-active');
  }

  // Note: does not fade card-4 text back in
  function joinCards(bgColor, textColor, done) {
    $('.card-16:not(.menu-card-16').css({'opacity': '1', 'background': bgColor}).removeClass('card-16-active').delay(window.CARD_DELAY).queue(function(next) {
      $(this).css('opacity', '');
      done();
      next();
    });
    $('.card-4:not(.menu-card-4)').delay(window.CARD_DELAY).css({'background': bgColor, 'color': textColor}).show(0);
  }

  // Prototyping helpers
  function loremCard4() {
    $('.card-container:nth-child(1) .card-4-text').text(lorem.ipsum('w10'));
    $('.card-container:nth-child(2) .card-4-text').text(lorem.ipsum('w10'));
    $('.card-container:nth-child(3) .card-4-text').text(lorem.ipsum('w10'));
  }

});

