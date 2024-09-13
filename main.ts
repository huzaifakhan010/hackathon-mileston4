document.getElementById('Form')?.addEventListener('submit',function(event){
    event.preventDefault();

   const profilepicinput = document.getElementById('profilepic') as HTMLInputElement;
    const nameElement = document.getElementById('Name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const PhoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

      if( profilepicinput && nameElement && emailElement && PhoneElement && addressElement
        && educationElement && experienceElement){
       
        const myname = nameElement.value;
        const email = emailElement.value;
        const phone = PhoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;
        const profilepicfile = profilepicinput.files?.[0];
        const profilepicURL = profilepicfile ? URL.createObjectURL(profilepicfile) : '';
      
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilepicURL? `<Image src="${profilepicURL}" alt= "Profile Picture" class = "profilepic">`: ''}
    <p><strong>Name:</strong><span id="edit-name" class="editable">${myname}</span></p>
    <p><strong>Email:</strong><span id="edit-email" class="editable">${email} </span></p>
    <p><strong>Phone Number:</strong><span id="edit-phone" class="editable">${phone} </span></p>
     <p><strong>Address:</strong><span id="edit-phone" class="editable">${address}</span></p>

    <h3>Education</h3>
    <p id="edit-education" class="editable">${education}</p>

      <h3>Skills</h3>
    <p id="edit-skills" class="editable">${skills}</p>

      <h3>Experience</h3>
    <p id="edit-experience" class="editable">${experience}</p>
    `;
    const resumeOutputElement = document.getElementById('resumeOutput')
    if(resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    makeEditable();
    }
}else {
       console.error('one or more output elements are missing')
    }  
 });

 function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
      element.addEventListener('click' , function (){
        const currentElment = element as HTMLElement;
        const currentValue = currentElment.textContent || "";


        if(currentElment.tagName === "P" || currentElment.tagName === 'SPAN'){
          const input = document.createElement('input')
          input.type = 'text'
          input.value = currentValue
          input.classList.add('editing-input')
            
          input.addEventListener('blur',function(){
            currentElment.textContent = input.value;
            currentElment.style.display = 'inline'
            input.remove()
          })
          currentElment.style.display = 'none'
          currentElment.parentNode?.insertBefore(input,currentElment)
          input.focus()
        }
      })
    })
 }