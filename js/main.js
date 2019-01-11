

const projectsLink = $('#projects-link');
      experienceLink = $('#experience-link');
      aboutLink = $('#about-link');
      musicLink = $('#music-link');

const exitObj = {opacity: 0, scale: 0.9, paused: true}
const entryFromObj = {y: 200, opacity: 0, scale: 0.7, paused: true};
const entryToObj = {y: -200, opacity: 1, scale: 1, paused: true};

const titleExit = TweenMax.to('#title', 2, exitObj);
const projectsEntry = TweenMax.fromTo('#projects', 2, entryFromObj, entryToObj);

const projectsExit = TweenMax.to('#projects', 2, exitObj);
const experienceEntry = TweenMax.fromTo('#experience', 2, entryFromObj, entryToObj);

const experienceExit = TweenMax.to('#experience', 2, exitObj);
const aboutEntry = TweenMax.fromTo('#about', 2, entryFromObj, entryToObj);

const aboutExit = TweenMax.to('#about', 2, exitObj);
const musicEntry = TweenMax.fromTo('#music', 2, entryFromObj, entryToObj);


// event listeners -------------------------->

$(window).scroll(() => {

  const triggers = ['#trigger-top', '#trigger-exp', '#trigger-about', '#trigger-music'];

  for (let i = 0; i < triggers.length; i++) {
    let trigger = triggers[i];
    let depth = triggerDepth($(trigger));


    if (depth < 650) {
      move(trigger, depth);
    }
  }
})


projectsLink.click(() => {

  let anchor = $('#trigger-top').offset().top - 300;

  TweenMax.to(window, 1, {scrollTo: anchor});
})

$('#experience-link').click(() => {
  TweenMax.to(window, 1, {scrollTo: 1200});
})

//  functions ----------------------------->

const move = (trigger, depth) => {
  let fraction = Math.pow(depth - 650, 2) / Math.pow(200, 2);

  switch (trigger) {
    case '#trigger-top':
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

const triggerDepth = (element) => {
  return element.offset().top - window.scrollY;
}

const scrollToAnchor = (element) => {
  
}


