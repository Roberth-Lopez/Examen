//https://www.eclipse.org/paho/clients/js/

//-------------------------función para encender o apagar los leds-----------------------------------
function LED1_On() {
	//alert("led on");
	console.log("led1on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("Encender1");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
  
}
function LED2_On() {
	//alert("led on");
	console.log("led2on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("Encender2");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
  
}
function LED1_Off(){	
	//alert("led off");
	console.log("led1off");
	message = new Paho.MQTT.Message("Apagar1");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
function LED2_Off(){	
	//alert("led off");
	console.log("led2off");
	message = new Paho.MQTT.Message("Apagar2");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
//---------------------------------------------------------------------------------------------------


//----------------------------función para el Historial 1-----------------------------------------------
function Historial_1(){	
	//alert("led off");
	console.log("historial1");
	message = new Paho.MQTT.Message("Historial1");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
//---------------------------------------------------------------------------------------------------

//----------------------------función para el Historial 2-----------------------------------------------
function Historial_1(){	
	//alert("led off");
	console.log("historial2");
	message = new Paho.MQTT.Message("Historial2");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
//-----



// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "ralopez.fie@unach.edu.ec",
    password: "roberth1996",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("ralopez.fie@unach.edu.ec/test1");
    client.subscribe("ralopez.fie@unach.edu.ec/test2");
    client.subscribe("ralopez.fie@unach.edu.ec/test3");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "ralopez.fie@unach.edu.ec/test";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	if(message.destinationName == "ralopez.fie@unach.edu.ec/test1"){
	   document.getElementById("sensor").innerHTML=message.payloadString;
	   }
	else if(message.destinationName == "ralopez.fie@unach.edu.ec/test2"){
	  document.getElementById("historial").innerHTML=message.payloadString;
	}
	else if(message.destinationName == "ralopez.fie@unach.edu.ec/test3"){
	  document.getElementById("estado").innerHTML=message.payloadString;
	}  
  }
  

