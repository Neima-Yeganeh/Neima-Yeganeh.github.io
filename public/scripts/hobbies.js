$(document).ready(() => {
  $('#nav-container').load('nav.html', customizeNavbar);
  $('#footer-container').load('footer.html');
});

function customizeNavbar() {
  //$('#nav-title').text('Contact');
  $('#hobbies-btn').css("text-decoration","underline");
}