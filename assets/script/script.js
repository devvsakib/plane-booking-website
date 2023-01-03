(window.addEventListener("scroll", function () {
    // Get the current scroll position
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    // Update the size of the plane
    const plane = document.getElementById("plane");
    plane.style.width = (500 + scrollPos) + "px";
    plane.style.bottom = ((scrollPos + 150) + 50) + "px";
    plane.style.left = ((scrollPos + 450) + 50) + "px";
}))()