(function(){
  "use strict";

  /* ---------------- LANGUAGE TOGGLE (IT / EN / AR) ---------------- */
  function applyLang(lang){
    document.documentElement.setAttribute('data-active-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    var nodes = document.querySelectorAll('[data-lang]');
    for(var i=0; i<nodes.length; i++){
      var el = nodes[i];
      if(el.getAttribute('data-lang') === lang){
        el.style.removeProperty('display');
      } else {
        el.style.setProperty('display', 'none', 'important');
      }
    }
    var buttons = document.querySelectorAll('[data-lang-btn]');
    for(var j=0; j<buttons.length; j++){
      var b = buttons[j];
      if(b.getAttribute('data-lang-btn') === lang){ b.classList.add('active'); }
      else{ b.classList.remove('active'); }
    }
    try{ localStorage.setItem('babylon-lang', lang); }catch(e){}
  }

  var saved = null;
  try{ saved = localStorage.getItem('babylon-lang'); }catch(e){}
  var navLang = (navigator.language || 'it').toLowerCase();
  var browserPref = navLang.indexOf('ar') === 0 ? 'ar' : (navLang.indexOf('it') === 0 ? 'it' : 'en');
  var initialLang = (saved === 'it' || saved === 'en' || saved === 'ar') ? saved : browserPref;
  applyLang(initialLang);

  var langToggle = document.getElementById('langToggle');
  if(langToggle){
    var langBtns = langToggle.querySelectorAll('[data-lang-btn]');
    for(var m=0; m<langBtns.length; m++){
      (function(btn){
        btn.addEventListener('click', function(){
          applyLang(btn.getAttribute('data-lang-btn'));
        });
      })(langBtns[m]);
    }
  }

  /* ---------------- NAV SCROLL STATE ---------------- */
  var nav = document.getElementById('siteNav');
  if(nav){
    var forcedScrolled = nav.dataset.forceScrolled === 'true';
    var onScroll = function(){
      if(forcedScrolled) return;
      if(window.scrollY > 40){ nav.classList.add('is-scrolled'); }
      else{ nav.classList.remove('is-scrolled'); }
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
  }

  /* ---------------- MOBILE MENU ---------------- */
  var burger = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileClose = document.getElementById('mobileMenuClose');
  if(burger && mobileMenu){
    burger.addEventListener('click', function(){ mobileMenu.classList.add('is-open'); });
  }
  if(mobileClose && mobileMenu){
    mobileClose.addEventListener('click', function(){ mobileMenu.classList.remove('is-open'); });
  }
  if(mobileMenu){
    var mLinks = mobileMenu.querySelectorAll('a');
    for(var k=0; k<mLinks.length; k++){
      mLinks[k].addEventListener('click', function(){ mobileMenu.classList.remove('is-open'); });
    }
  }

  /* ---------------- SCROLL REVEAL ---------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && revealEls.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  }

})();
