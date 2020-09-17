$(document).ready(() => {
  $('#nav-container').load('nav.html', customizeNavbar);
  $('#footer-container').load('footer.html');
});

function customizeNavbar() {
  //$('#nav-title').text('Contact');
  $('#contact-btn').css("text-decoration","underline");
  //$('#contact-btn-li').css("background-color","blue;");
}

function sendEmail(e) {
  e.preventDefault(); // prevents page from refreshing
  console.log(e);

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let content = document.getElementById('content').value;
  console.log(name, email, subject, content);

  let api_key = '';
  let domain = '';
  let mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  
  // let data = {
  //   from: 'Excited User <me@samples.mailgun.org>',
  //   to: 'serobnic@mail.ru',
  //   subject: 'Hello',
  //   text: 'Testing some Mailgun awesomeness!'
  // };
  
  // mailgun.messages().send(data, function (error, body) {
  //   console.log(body);
  // });
}
