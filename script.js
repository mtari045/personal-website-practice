
// get modal
var modal = document.getElementById('myModal');

// get photo icon
var photographyIcon = document.getElementById('photography-icon');

// get <span> elem that closes modal
var span = document.getElementsByClassName('close')[0];

// open modal when the icon is clicked
photographyIcon.onclick = function() {
  modal.style.display = 'block';
}

// cose modal when the user clicks on X 
span.onclick = function() {
  modal.style.display = 'none';
}

//cclose modal when clicked anywhere outside of tab 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}