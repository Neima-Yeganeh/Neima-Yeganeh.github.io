$(document).ready(() => {
  $('#nav-container').load('nav.html', customizeNavbar);
});

function customizeNavbar() {
  //$('#nav-title').text('Contact');
  $('#hobbies-btn').css("text-decoration","underline");
  //$('#contact-btn-li').css("background-color","blue;");
}