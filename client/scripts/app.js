// YOUR CODE HERE:

class App  {
    constructor(){
     this.server = 'http://parse.atx.hackreactor.com/chatterbox/classes/messages';
    }
    
    
    init(){
        
        
    };
    
    //should submit POST request via $.ajax
    send(messageToSend){
        $.ajax({
            // This is the url you should use to communicate with the parse API server.
            url: this.server,
            type: 'POST',
            data: JSON.stringify(messageToSend), //object with correct format
            contentType: 'application/json',
            success: function (data) {
            console.log('chatterbox: Message sent');
            },
            error: function (data) {
            // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
            console.error('chatterbox: Failed to send message', data);
            }
        });


  };
  // submits a GET request using $.ajax
  fetch(n){
    let messageGET = $.get( "http://parse.atx.hackreactor.com/chatterbox/classes/messages", function( data ) {
      });
      let messages = messageGET.responseJSON;
      return messages[n];
    // $.ajax({
    //     // This is the url you should use to communicate with the parse API server.
    //     url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
    //     type: 'GET',
    //     datatype: jsonp,
    //     contentType: 'application/jsonp',
    //     success: function (data) {
    //     console.log('chatterbox: Message recieved');
    //     },
    //     error: function (data) {
    //     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    //     console.error('chatterbox: Failed to retrieve message');
    //     }
    // });

  };
  // clears messages from the DOM
  clearMessages(){


  };
  
  // adds message to the DOM
  renderMessage(messageToRender){


      //get message to render
      //

  };
  // adds rooms to the DOM
  renderRoom(){



  };

  // adds friend upon clicking username
  handUsernameClick(){


  };

  //sends message on click
  handleSubmit(){



  };
}

let app = new App()
// var message = {
//     username: 'shawndrost',
//     text: 'trololo',
//     roomname: '4chan'
//   };
