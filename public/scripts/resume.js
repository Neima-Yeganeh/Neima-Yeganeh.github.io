$(document).ready(() => {
  $('#nav-container').load('nav.html', customizeNavbar);
  $('#footer-container').load('footer.html');
});

function customizeNavbar() {
  //$('#nav-title').text('Contact');
  $('#resume-btn').css("text-decoration","underline");
  //$('#contact-btn-li').css("background-color","blue;");
}