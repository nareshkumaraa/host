var navbarButton = document.getElementById("navbarButton");
var navbarDropdown = document.getElementById("navbarNavDropdown");
// var expertiseDropdownButton = document.getElementsByClassName("expertiseDropdownButton");
var expertiseDropdownButton = document.getElementById("navbarDropdownMenuLink");


window.addEventListener('load', (event) => {
    headerLogoValidator();
})

// expertiseDropdownButton.addEventListener('click', function (e) {
//     e.preventDefault();
// });

window.addEventListener('scroll', function () {
    headerLogoValidator();
});

//let initialScrollPosition = null;

function headerLogoValidator() {
    var scrollY = window.scrollY;
    var navbarBrand = document.querySelector('.navbar-brand');

    //console.log("current scroll postion: ", scrollY);

    // if (initialScrollPosition === null) {
    //     initialScrollPosition = window.scrollY;
    // } else if (window.scrollY - initialScrollPosition >= 200) {
    //     console.log('User scrolled 200 pixels from the initial position.');
    //     // Reset initial scroll position to null to stop further checking
    //     initialScrollPosition = null;
    // }
    // navbarButton.classList.add("collapsed");
    // navbarDropdown.classList.remove("show");

    //var isNavbarOpen = navbarDropdown.classList.contains('show');
    // if (navbarDropdown.classList.contains("show") && (!navbarButton.classList.contains("collapsed"))) {
    //     var bootstrapCollapse = new bootstrap.Collapse(navbarDropdown, {
    //         toggle: false // Don't animate the collapse
    //     });
    //     bootstrapCollapse.hide(); // Hide the navbar with animation
    // }

    // console.log('scrolling number: ' + scrollY);

    // if (navbarDropdown.classList.contains("show") && (!navbarButton.classList.contains("collapsed"))) {
    //     // if(expertiseDropdownButton.classList.contains("show") && !(scrollY > 0)){

    //     // }
    //     navbarButton.click();
    // }
    // var navbarAnchorTag = ;

    if (scrollY > 44) { // Adjust the scroll threshold as needed
        navbarBrand.classList.add('show-logo'); // Add a class to show the logo
    } else {
        // document.getElementById('navbarAnchor').style.cursor = "default !important";
        navbarBrand.classList.remove('show-logo'); // Remove the class to hide the logo
    }
}

// bootstrap dropdown default code
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
})


