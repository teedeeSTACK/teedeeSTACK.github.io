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

const modal = document.querySelector("#myModal");

let xBtn = document.querySelector("#xBtn");
let closeBtn = document.querySelector("#closeBtn");

xBtn.onclick = function () {
  modal.style.display = "none";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};






