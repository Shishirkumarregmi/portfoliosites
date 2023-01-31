// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
const submitForm = async (event) => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let msg = document.getElementById("message");
    let nameValue = name.value;
    let emailValue = email.value;
    let subjectValue = subject.value;
    let msgValue = msg.value;
    if (nameValue && emailValue && subjectValue && msgValue) {
      try {
        const res = await fetch(
          "https://portfoliodb-97be6-default-rtdb.firebaseio.com/submittedForm.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nameValue,
              emailValue,
              subjectValue,
              msgValue,
            }),
          }
        ).catch((error) => {
          console.error(error);
          alert(
            "An error occurred while submitting the form. Please try again later."
          );
        });
  
        if (res) {
          name.value = "";
          email.value = "";
          subject.value = "";
          msg.value = "";
          alert("Message Sent");
        } else {
          alert("Fill the data");
        }
      } catch (error) {
        console.error(error);
        alert(
          "An error occurred while submitting the form. Please try again later."
        );
      }
    } else {
      name.value = "";
      email.value = "";
      subject.value = "";
      msg.value = "";
      alert("fill all");
    }
  };