gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

paceOptions = {
  ajax: true,
  document: true,
  eventLag: false,
};

Pace.on('done', function () {
  const arrowBtn = document.querySelector('.arrow-down');
  arrowBtn.addEventListener('click', () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: '#about' },
    });
  });

  gsap.fromTo(
    '.arrow-down',
    { opacity: 0, yPercent: -100 },
    { opacity: 1, yPercent: 0, duration: 1, repeat: -1, yoyo: true }
  );

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.text-h3',
      start: 'top center',
      // markers: true,
    },
  });

  tl1
    .to('.text-h3', { duration: 1, y: '0' })
    .to('.lead', { duration: 1, y: '0' }, '-=1')
    .to('.box-1', { duration: 2, x: '-100%' }, '-=0.5');

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.row-2',
      start: 'top center',
    },
  });

  tl2
    .to('.column-4', { duration: 1, x: '0', opacity: 1 })
    .to('.column-5', { duration: 0.8, x: '0' }, '-=1');

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.p-text-video',
      start: 'top center',
    },
  });

  tl3
    .to('.p-text-video', { duration: 1, xPercent: 0, opacity: 1 })
    .to('.column-6', { duration: 0.8, x: '0' }, '-=0.8')
    .to('.text-h3-video', { duration: 1, x: '0', opacity: 1 }, '-=1');

  // Start of marquee effect

  let $text = $('.text-mar-left');
  let $wrap = $('.text-left');

  let $text2 = $('.text-mar-right');
  let $wrap2 = $('.text-right');

  $text.clone().appendTo($wrap);
  $text2.clone().appendTo($wrap2);

  gsap.to($wrap, {
    x: -$text.width(),
    duration: 60,
    ease: Linear.easeNone,
    repeat: -1,
  });

  gsap.from($wrap2, {
    x: -$text.width(),
    duration: 80,
    ease: Linear.easeNone,
    repeat: -1,
  });

  // End of marquee effect
});

// Start of what we offer hover effect
var $cursor = $('.cursor-hover'),
  $overlay = $('.sel');

function moveCircle(e) {
  gsap.to($cursor, {
    css: {
      left: e.pageX,
      top: e.pageY,
    },
    duration: 0.5,
    delay: 0.03,
  });
}

$('.p-1').hover(function () {
  $('.cursor-hover').css({ 'background-image': 'url(./img/image24.jpg)' });
});
$('.p-2').hover(function () {
  $('.cursor-hover').css({ 'background-image': 'url(./img/image11.jpeg)' });
});
$('.p-3').hover(function () {
  $('.cursor-hover').css({ 'background-image': 'url(./img/group-2.jpg)' });
});
$('.p-4').hover(function () {
  $('.cursor-hover').css({ 'background-image': 'url(./img/image15.jpg)' });
});
$('.p-5').hover(function () {
  $('.cursor-hover').css({ 'background-image': 'url(./img/group-1.jpg)' });
});
$('.p-6').hover(function () {
  $('.cursor-hover').css({ 'background-image': 'url(./img/home-1.jpg)' });
});
$('.p-7').hover(function () {
  $('.cursor-hover').css({ 'background-image': 'url(./img/group-3.jpg)' });
});

var flag = false;
$($overlay).mousemove(function () {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay).on('mousemove', moveCircle);
});

$($overlay).mouseout(function () {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});

// End of what we offer hover effect

// Gallery scroll
const images = gsap.utils.toArray('img');

const showDemo = () => {
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);
  // gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

  gsap.utils.toArray('.section').forEach((section, index) => {
    const w = section.querySelector('.wrapper-gal');
    const [x, xEnd] =
      index % 2
        ? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
        : [w.scrollWidth * -1, 0];
    gsap.fromTo(
      w,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
        },
      }
    );
  });
};

showDemo();
