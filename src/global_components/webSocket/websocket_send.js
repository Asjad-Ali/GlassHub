
// import { notification } from "../../store/notifcations"

// var wsUri = localStorage.getItem('socket');
// let websocket=null
// function init()
// {
//   testWebSocket();
// }

// function testWebSocket()
// {

//   websocket = new WebSocket(wsUri);
//   websocket.onopen = function(evt) { onOpen(evt) };
//   //`` websocket.onclose = function(evt) { onClose(evt) };
//   websocket.onmessage = function(evt) { onMessage(evt) };
//   websocket.onerror = function(evt) { onError(evt) };
// }
// function outputValue (){
//   return output
// }

// function onOpen(evt)
// {
//      doSend()
//     //writeToScreen("CONNECTED :");
//   //doSend("WebSocket rocks");
// }

// function onClose(evt)
// {
//   writeToScreen("DISCONNECTED");
// }


// function onMessage(evt)
// {
//   const noti = notification()
//   noti.notification=JSON.parse(evt.data)
//   // localStorage.setItem('notification',JSON.stringify(evt.data))
//   //  output = evt.data
//   //  store.notification = evt.data
//   // writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
//   //websocket.close();
// }

// function onError(evt)
// {
//   writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
// }

// function doSend(Msg)
// {
//     var msg = {
//     type: "Notification"
//   };
//     websocket.send(JSON.stringify(msg));
//     //writeToScreen("SENT: " + message);
//     //websocket.send(message);
// }

// function writeToScreen(message)
// {
//   console.log(message)
//   // var pre = document.createElement("p");
//   // pre.style.wordWrap = "break-word";
//   // pre.innerHTML = message;
//   // output.appendChild(pre);
// }

// window.addEventListener("load", init, false);

// export default function Socket(){

//   var msg = {
//     type: "Notification"
//   };
//     websocket.send(JSON.stringify(msg));
// }


