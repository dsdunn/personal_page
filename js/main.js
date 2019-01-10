let windowHeight = window.innerHeight;

let titleExit = TweenMax.to('#title', 4, {y: -150, opacity: 0, paused: true});

let projectsEntry = TweenMax.fromTo('#projects', 6, {y: 600, opacity: 0, paused: true}, {y: -200, opacity: 1, paused: true});

$(window).resize(() => {
  windowHeight = window.innerHeight;
});

$(window).scroll(() => {

  // if (elTopPos($('#projects')) > 0) {
  //   let fraction = $(window).scrollTop()  / $(this).height();
  //   console.log(fraction)
  //   projectsEntry.progress(fraction);
  //  }
  let depth = triggerDepth($('#trigger-top'));


  if (depth < 550) {
    let fraction = Math.pow(depth - 550, 2) / Math.pow(150, 2);
    console.log(fraction)
    projectsEntry.progress(fraction);
    titleExit.progress(fraction);
  }

})

const elTopPos = (element) => window.innerHeight + window.scrollY - element.offset().top;

const elBottomPos = (element) => {
  return window.scrollY - element.offset().top + element.height() ;
}

const progress = (element) => {

}

const triggerDepth = (element) => {
  return element.offset().top - window.scrollY;
}

