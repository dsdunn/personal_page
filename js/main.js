
const titleExit = TweenMax.to('#title', 3, {opacity: 0, paused: true});

const projectsEntry = TweenMax.fromTo('#projects', 6, {y: 600, opacity: 0, paused: true}, {y: -200, opacity: 1, paused: true});

const projectsExit = TweenMax.to('#projects', 3, {opacity: 0, paused: true});

const experienceEntry = TweenMax.fromTo('#experience', 6, {y: 600, opacity: 0, paused: true}, {y: -200, opacity: 1, paused: true});


$(window).scroll(() => {

  let topDepth = triggerDepth($('#trigger-top'));
      expDepth = triggerDepth($('#trigger-exp'));



  if (topDepth < 550) {
    let fraction = Math.pow(topDepth - 550, 2) / Math.pow(150, 2);

    projectsEntry.progress(fraction);
    titleExit.progress(fraction);
  }

  if (expDepth < 550) {
    console.log("expDepth: ", expDepth )
    let fraction = Math.pow(expDepth - 550, 2) / Math.pow(150, 2);

    experienceEntry.progress(fraction);
    projectsExit.progress(fraction);
  }

})



const triggerDepth = (element) => {
  return element.offset().top - window.scrollY;
}

