function revealtoSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    //  create two spans
    var parentspan = document.createElement("span");
    var childspan = document.createElement("span");
    // parent and child both set their respective classess
    parentspan.classList.add("parent");
    childspan.classList.add("child");

    // child gets elem details and span parent gets child
    childspan.innerHTML = elem.innerHTML;
    parentspan.appendChild(childspan);

    elem.innerHTML = "";
    elem.appendChild(parentspan);
  });
}

function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home .parent .child", { y: "100%" });
  gsap.set("#home .row img", { opacity: 0 });

  document.querySelectorAll("#Visual>g ").forEach(function (e) {
    var character = e.childNodes[1].childNodes[1];
    character.style.strokeDasharray = character.getTotalLength() + "px";
    character.style.strokeDashoffset = character.getTotalLength() + "px";
  });
}
function loaderAnimation() {
  let tl = gsap.timeline();
  // 1st section animation
  tl.from("#loader .child span", {
    x: 100,
    stagger: 0.2,
    duration: 1.4,
    delay: 1,
    ease: Power3.easeInOut,
  })
    .to("#loader .parent .child", {
      y: "-110%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader ", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100vh",
      top: 0,
      duration: 1,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "0%",
      duration: 1,
      delay: -0.5,
      ease: Circ.easeInOut,
      onComplete: function () {
        animateHomepage();
      },
    });
}

function animateHomepage() {
  let tl = gsap.timeline();
  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  })
    .to("#home .parent .child", {
      y: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: Expo.easeInOut,
    })

    .to("#home .row img", {
      opacity: 1,
      delay: -0.5,
      ease: Expo.easeInOut,
      onComplete: function () {
        animateSvg();
      },
    });
}

function animateSvg() {
  gsap.to("#Visual>g>g>path , #Visual>g>g>polyline", {
    // strokeDasharray:0,
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut,
  });
}

// Scroller Animation Code
function locoInitailize() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}
// hover Animation Code
function cardHoverEffect() {
  var showingImage;
  document.querySelectorAll(".cnt").forEach(function (container) {
    container.addEventListener("mousemove", function (dets) {
      // find the value of indexes in the div of container
      // console.log(dets.target.dataset.index);

      document.querySelector("#cursor").children[
        dets.target.dataset.index
      ].style.opacity = 1;
      showingImage = dets.target;
      document.querySelector("#cursor").children[
        showingImage.dataset.index
      ].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
      showingImage.style.filter = "grayscale(1)";
      document.querySelector("#work").style.backgroundColor =
        "#" + showingImage.dataset.color;
    });

    container.addEventListener("mouseleave", function (dets) {
      document.querySelector("#cursor").children[
        showingImage.dataset.index
      ].style.opacity = 0;
      showingImage.style.filter = "grayscale(0)";
      document.querySelector("#work").style.backgroundColor =
      "#fff";
    });
  });
}
revealtoSpan();
valueSetters();
loaderAnimation();
locoInitailize();
cardHoverEffect();
// Find the total points in an SVG
// document.querySelector('g path').getTotalLength();
// document.querySelector('g path').style.strokeDasharray=64.68521881103516;
// hide the points
// document.querySelector('g path').style.strokeDashoffset=64.68521881103516;

// find the element
// document.querySelector("#Visual>g");
//  find the childs of element
// document.querySelector("#Visual>g").childNodes;
// document.querySelector("#Visual>g").childNodes[1];
// document.querySelector("#Visual>g").childNodes[1].childNodes;
// document.querySelector("#Visual>g").childNodes[1].childNodes[1];

// gsap.from("g path", {
//   strokeDasharray: ,
//   strokeOffset:64.68521881103516,
//   duration: 1,
//   ease: Power3,
// });
