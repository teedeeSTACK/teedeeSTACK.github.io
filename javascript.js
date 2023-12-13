//coding for the collapsible within the infoGrid container

const coll = document.getElementsByClassName('collapsible');
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


// coding for modal

const modal = document.querySelector("#startUpModal");
const xBtn1 = document.querySelector("#xBtn1");
const closeBtn = document.querySelector("#closeBtn");

xBtn1.onclick = function () {
  modal.style.display = "none";
  console.log("x button pressed");
};

closeBtn.onclick = function () {
    modal.style.display = "none";
    console.log("close button pressed");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    console.log("outside window clicked");
  }
};

// code for signup modal

const signupModal = document.querySelector("#signingUpModal");
const signupBtn = document.querySelector("#signUpBtn");
const xBtn2 = document.querySelector("#xBtn2");

signupBtn.addEventListener('click', loginModalToggles);
xBtn2.addEventListener('click',loginModalToggles);

function loginModalToggles() {
  signupModal.classList.toggle("showsignupModal");
  console.log("login pressed");
};


// code for signup validation

const submission = document.querySelector('#registerForm');
const validEmail = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

submission.addEventListener('submit',function(event){
	event.preventDefault();
  let inputName = document.querySelector('#nameInput');
  let emailAddress = document.querySelector('#emailInput');
  let password = document.querySelector('#passInput')
  let checkPassword = document.querySelector('#passCheck')

  if(inputName.value === "") {
    console.log("invalid name");
    alert("Please type a name!");
  };

  if(emailAddress.value === "") {
    console.log("invalid email");
    alert("Please type an email!");
  };

  if(password.value === checkPassword.value) {
    console.log("Password matches!");
  } else {
    console.log("Password does not match");
    alert("Passwords do not match!");
  } 

return true;

}

);


