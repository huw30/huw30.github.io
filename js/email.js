$(function() { 
  $('#form').submit(function(event) {
    var self = $(this);
    var email = self.serializeArray();
    event.preventDefault();
     $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': 'yzN1YsFPNFR7Ic7-8QcxOw',
      'message': {
        'from_email': email[1].value,
        'to': [
            {
              'email': 'huan0924@gmail.com',
              'name': 'huan',
              'type': 'to'
            }
          ],
        'autotext': 'true',
        'subject': email[2].value,
        'html': email[3].value
      }
    }
    }).done(function(response) {
      $('#tip-message').html('Message sent successfully!');
      console.log(response);
      setTimeout(function()
       {$('#tip-message').html('');}, 5000);
       self.find("input[type=text], textarea").val("");
    });
  });
});