/*Modal Popup */
document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
      if (target.hasAttribute('data-target')) {
          var m_ID = target.getAttribute('data-target');
          document.getElementById(m_ID).classList.add('open');
          e.preventDefault();
      }
  }

  // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
  if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
      var modal = document.querySelector('[class="modal open"]');
      modal.classList.remove('open');
      e.preventDefault();
  }
}, false);

/*Back To Top Button*/
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})
const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };
  backToTopButton.addEventListener("click", goToTop)

//Toggle Switch
document.getElementById("toggleSwitch").onclick = function() {
    myFunction()
  };

  function myFunction() {
    let color =  document.getElementById('modalBox').style.backgroundColor
    if (color === 'white') {
        document.getElementById('modalBox').style.backgroundColor
         = "#e7e7e7";
    } else {
        document.getElementById('modalBox').style.backgroundColor = "white";
    }
  }