
var fileName = document.getElementById('filename');
var company = document.getElementById('company');
var emailAddress = document.getElementById('mailaddress');
var jewelleryDesignChecked = document.getElementById('jewelleryDesignChkBox');
var CADModelingChecked = document.getElementById('3DCADModelingChkBox');
var digitalSculptingChecked = document.getElementById('digitalSculptingChkBox');
var photoVideoRenderingChecked = document.getElementById('PhotoVideoRenderingChkBox');
var detailedDescription = document.getElementById('detailedDiscription');
var attachments = [];

// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//         .forEach(function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (!form.checkValidity()) {
//                     event.preventDefault()
//                     event.stopPropagation()
//                 }

//                 form.classList.add('was-validated')
//             }, false)
//         })
// })()


// function changeImage(container) {
//     var img = container.querySelector('img');
//     img.src = "assets/getorderprocess/step1_purple.png";
// }

changeImage = (img) => {
    img.src = restoreProcessColor(img.id);
}

restoreImage = (img) => {
    img.src = changeProcessColor(img.id);
}

function changeProcessColor(ID) {
    switch (ID) {
        case "stepone":
            return "assets/getorderprocess/stepone_white.png";
        case "steptwo":
            return "assets/getorderprocess/steptwo_white.png";
        case "stepthree":
            return "assets/getorderprocess/stepthree_white.png";
        case "stepfour":
            return "assets/getorderprocess/stepfour_white.png";
    }
}

restoreProcessColor = (ID) => {
    var proceduresValue;
    if (ID == "stepone") {
        proceduresValue = "assets/getorderprocess/stepone_purple.png";
    } else if (ID == "steptwo") {
        proceduresValue = "assets/getorderprocess/steptwo_purple.png";
    } else if (ID == "stepthree") {
        proceduresValue = "assets/getorderprocess/stepthree_purple.png";
    } else if (ID == "stepfour") {
        proceduresValue = "assets/getorderprocess/stepfour_purple.png";
    }
    return proceduresValue;
}

document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here
    console.log('DOM fully loaded and ready for manipulation');
    var form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        getFormValue();
    });
});

getFormValue = () => {
    var attachmentInputs = document.querySelectorAll('input[type="file"]');
    // var count = 0;
    attachmentInputs.forEach(function (input) {
        attachments.push(input.value);
        // console.log("input.value", input.value);
        // count++;
    });
    // console.log("count: ", count);

    // Log or process the form values as needed
    console.log("File Name: " + fileName.value);
    console.log("Company: " + company.value);
    console.log("Email Address: " + emailAddress.value);
    console.log("Jewellery Design Checked: " + jewelleryDesignChecked.checked);
    console.log("3D CAD Modeling Checked: " + CADModelingChecked.checked);
    console.log("Digital Sculpting Checked: " + digitalSculptingChecked.checked);
    console.log("Photo/Video Rendering Checked: " + photoVideoRenderingChecked.checked);
    console.log("Detailed Description: " + detailedDescription.value || " ");
    console.log("Attachments: " + attachments.join(", "));
}