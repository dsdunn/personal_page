let windowHeight = window.innerHeight;

let titleExit = TweenMax.to('#title', 2, {y: -900, ease: Power4.easeOut, paused: true});

let projectsEntry = TweenMax.from('#projects', 3, {y: 275, opacity: 0, paused: true});

$(window).resize(() => {
  windowHeight = window.innerHeight;
});

$(window).scroll(() => {

  if (elTopPos($('#projects')) > 0) {
    let fraction = $(window).scrollTop()  / $(this).height();
    console.log(fraction)
    projectsEntry.progress(fraction);
   }

})

const elTopPos = (element) => window.innerHeight + window.scrollY - element.offset().top;

const elBottomPos = (element) => {
  return window.scrollY - element.offset().top + element.height() ;
}

const progress = (element) => {

}