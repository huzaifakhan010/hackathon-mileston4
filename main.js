var _a;
(_a = document.getElementById('Form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilepicinput = document.getElementById('profilepic');
    var nameElement = document.getElementById('Name');
    var emailElement = document.getElementById('email');
    var PhoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilepicinput && nameElement && emailElement && PhoneElement && addressElement
        && educationElement && experienceElement) {
        var myname = nameElement.value;
        var email = emailElement.value;
        var phone = PhoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var profilepicfile = (_a = profilepicinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepicURL = profilepicfile ? URL.createObjectURL(profilepicfile) : '';
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilepicURL ? "<Image src=\"".concat(profilepicURL, "\" alt= \"Profile Picture\" class = \"profilepic\">") : '', "\n    <p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\">").concat(myname, "</span></p>\n    <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\">").concat(email, " </span></p>\n    <p><strong>Phone Number:</strong><span id=\"edit-phone\" class=\"editable\">").concat(phone, " </span></p>\n     <p><strong>Address:</strong><span id=\"edit-phone\" class=\"editable\">").concat(address, "</span></p>\n\n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n      <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n      <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElment = element;
            var currentValue = currentElment.textContent || "";
            if (currentElment.tagName === "P" || currentElment.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElment.textContent = input_1.value;
                    currentElment.style.display = 'inline';
                    input_1.remove();
                });
                currentElment.style.display = 'none';
                (_a = currentElment.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElment);
                input_1.focus();
            }
        });
    });
}
