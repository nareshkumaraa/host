window.addEventListener('load', (event) => {
    headerLogoValidator();
})


window.addEventListener('scroll', function () {
    headerLogoValidator();
});

function headerLogoValidator() {
    var scrollY = window.scrollY;
    var navbarBrand = document.querySelector('.navbar-brand');
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


