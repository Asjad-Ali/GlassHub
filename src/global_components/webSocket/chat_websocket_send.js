import { Account } from "@/store/SwitchAccount";
import { useAuthStore } from "@/store/auth";
import { chat } from "@/store/chat";
var output;
var websocket
function init()
{
output = document.getElementById("output");
testWebSocket();
}

function testWebSocket()
{
const SwitchAccount = Account().Account_detail[0]
const auth = useAuthStore().user
var wsUri = `wss://apis.glasshub.ai/websockets?RegD_id=${SwitchAccount.RegD_id}&Account_Type=${SwitchAccount.Account_type}&Category_ids=${auth.cat_ids.toString()}`;
websocket = new WebSocket(wsUri);
websocket.onopen = function(evt) { onOpen(evt) };
websocket.onmessage = function(evt) { onMessage(evt)};
websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt)
{
  setInterval(() => websocket.send(JSON.stringify({ event: "ping" })), 10000);
}

function onClose(evt)
{
  window.addEventListener("load", init, false);
}


function onMessage(evt)
{
    const chat_store =chat()
   let data = JSON.parse(evt.data) 
   console.log(data)
   if(data.chat)
   {
    chat_store.chat_data.push(data.chat[0])
   }

}

function doSend(Msg)
{
  websocket.send(JSON.stringify(Msg));
}

window.addEventListener("load", init, false);

export default function Socket(data){
        doSend(data);
  }