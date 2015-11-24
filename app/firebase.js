/*
var myDataRef = new Firebase('https://blazing-torch-4705.firebaseio.com/name');
//myDataRef.set('User ' + name + ' says ' + text);
//myDataRef.set({name: name, text: text}); write an object
myDataRef.push({name: "name", text: "last one"}); 
//push instead of set

/*
get notified on message hit
myDataRef.on('child_added', function(snapshot) {
alert("new message")
});
//get messages	
var message = snapshot.val();
displayChatMessage(message.name, message.text);




myDataRef.on('child_added', function(snapshot) {
var message = snapshot.val();
displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
	  
	  alert(text)
	  }
	  
	  */