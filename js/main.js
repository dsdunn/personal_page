

const projectsLink = $('#projects-link');
      experienceLink = $('#experience-link');
      aboutLink = $('#about-link');
      musicLink = $('#music-link');

let activeLink = '#top-link';

const exitObj = {opacity: 0, scale: 0.9, paused: true}
const entryFromObj = {y: 200, opacity: 0, scale: 0.7, paused: true};
const entryToObj = {y: -200, opacity: 1, scale: 1, paused: true};

const titleExit = TweenMax.to('#title', .5, exitObj);
const projectsEntry = TweenMax.fromTo('#projects', .5, entryFromObj, entryToObj);

const projectsExit = TweenMax.to('#projects', .5, exitObj);
const experienceEntry = TweenMax.fromTo('#experience', .5, entryFromObj, entryToObj);

const experienceExit = TweenMax.to('#experience', .5, exitObj);
const aboutEntry = TweenMax.fromTo('#about', .5, entryFromObj, entryToObj);

const aboutExit = TweenMax.to('#about', .5, exitObj);
const musicEntry = TweenMax.fromTo('#music', .5, entryFromObj, entryToObj);


// event listeners -------------------------->

$(window).scroll(() => {

  const triggers = ['#trigger-projects', '#trigger-exp', '#trigger-about', '#trigger-music'];

  for (let i = 0; i < triggers.length; i++) {
    let trigger = triggers[i];
    let depth = triggerDepth($(trigger));

    move(trigger, depth);

    if (depth < 450 && depth > 0) {
      updateActive(trigger); 
    } else if (trigger == '#trigger-projects' && depth > 450) {
      $('.active').removeClass('active');
      $('#top-link').addClass('active');
      activeLink = '#top-link';
    }
  }
})

$('#projects-link, #experience-link, #about-link, #music-link').click((event) => {
  scrollToAnchor(event.target.title);
})

$('#top-link').click(() => {
  TweenMax.to(window, 1, {scrollTo: {y:0}});
});

//  functions ----------------------------->

const move = (trigger, depth) => {
  let fraction = 
    depth < 450 ? 1 : 
    depth < 650 ? Math.pow(depth - 650, 2) / Math.pow(200, 2) : 0;

  switch (trigger) {
    case '#trigger-projects':
      titleExit.progress(fraction);
      projectsEntry.progress(fraction);
      break;
    case '#trigger-exp':
      projectsExit.progress(fraction);
      experienceEntry.progress(fraction);
      break;
    case '#trigger-about':
      experienceExit.progress(fraction);
      aboutEntry.progress(fraction);
      break;
    case '#trigger-music':
      aboutExit.progress(fraction);
      musicEntry.progress(fraction);
  }
}

const updateActive = (trigger, depth) => {
  switch (trigger) {
    case '#trigger-projects':
      if (activeLink == '#projects-link') {
        break;
      } else {
        $('.active').removeClass('active');
        $('#projects-link').addClass('active');
        activeLink = '#top-link';
      }
      break;
    case '#trigger-exp':
      if (activeLink == '#experience-link') {
        break;
      } else {
        $('.active').removeClass('active');
        $('#experience-link').addClass('active');
        activeLink = '#experience-link';
      }
      break;
    case '#trigger-about':
      if (activeLink == '#about-link') {
        break;
      } else {
        $('.active').removeClass('active');
        $('#about-link').addClass('active');
        activeLink = '#about-link';
      }
      break;
    case '#trigger-music':
      if (activeLink == '#music-link') {
        break;
      } else {
        $('.active').removeClass('active');
        $('#music-link').addClass('active');
        activeLink = '#music-link';
      }
  }
}

const triggerDepth = (element) => {
  return element.offset().top - window.scrollY;
}

const scrollToAnchor = (trigger) => {
  let anchor = $('#' + trigger).offset().top - 300;

  TweenMax.to(window, 1, {scrollTo: anchor});
}


