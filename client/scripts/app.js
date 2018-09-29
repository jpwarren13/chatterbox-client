// YOUR CODE HERE:

class App  {
    constructor(){
     this.server = 'http://parse.atx.hackreactor.com/chatterbox/classes/messages';
    // this.renderRoom('lobby');
    }
    
    
    init(){
      $(function(){
        this.renderRoom('lobby');
      })


        
    };
    
    //should submit POST request via $.ajax
    send(messageToSend){
        $.ajax({
            type: "POST",
            url:  'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
            data: JSON.stringify(messageToSend),
            contentType: 'application/json',
            success: function(resultData){
                alert("Save Complete");
            }
      });


  };
  // submits a GET request using $.ajax
  fetch(){
 
    let f = $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
        type: 'GET',
        datatype:'jsonp',
        contentType: 'application/jsonp',
        success: function (data) {
        console.log('chatterbox: Message recieved');
        },
        error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to retrieve message');
        }
    });
    //setTimeout(null, 1000);
return f;
  };
  // clears messages from the DOM
  clearMessages(){
$('#chats').empty();

  };
  
  // adds message to the DOM
  renderMessage(text, user){
//et data = this.fetch();
let message = '<div class ="chat"' + text + '</div>';


$('#chats').append(message);
  };
  // adds rooms to the DOM
  renderRoom(roomName){

$('#roomSelect').append('<option>' + roomName +  '</option>')
// for (let i = 0; i < messagesArray.length; i++){
//     let newChatDiv = '<div class="chat"' + messagesArray[i].text + '</div>';
//     let newUserDiv = '<div class="username"' + messagesArray[i].username + '</div>';
//     $('#chats').append(newChatDiv).append(newUserDiv);
// }


  };

  // adds friend upon clicking username
  handUsernameClick(){


  };

  //sends message on click
  handleSubmit(){
    $('.submit-button').on('click', function(){
        var messageText = $('.message-input').val();
        this.renderMessage(messageText);
    })


  };
}

let app = new App()
app.init();
// var message = {
//     username: 'shawndrost',
//     text: 'trololo',
//     roomname: '4chan'
//   };
