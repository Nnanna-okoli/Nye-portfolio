    // targets all the reveal elements
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

    // getBoundingClientRect().top gives a distance from the top of the viewport
    // window.innerHeight gives the height of the viewport 

    // the var windowHeight sets the height of the viewport
    /* elementTop is the distance of the reveal element from the top of the viewport
    or the length that has been scrolled */
    //elementVisible sets the height at which the elemtent should be revealed to the user

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
    // defines a func that displays the elements by adding and removing the active class

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
      }
    }
    //pass into an eventListener to run everytime the visitor scrolls
    window.addEventListener("scroll", reveal);

    // To check the scroll position on page load
    reveal();
