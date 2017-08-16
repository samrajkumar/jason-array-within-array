var inputString=[{"endpoint":"https://fcm.googleapis.com/fcm/send/fqMf1CXLnXw:APA91bEJlnvcgEygnoJE8ITTBamSczNpOKc5wFT1ftjm34QFSf7136q_-9o25e8M9_HCydy9YgRkpfl-Ct3x7P-tVTiXbCEnW3_6pnkPO85j4NmCEfSYZmuZnvxxMVv2dT01neN1f5HO","expirationTime":null,"keys":{"p256dh":"BN_rbkc20xaCKUZq8G30MQUBvTyMlqk6Hqq4B_f27m4Fy7GUNQ-gWDCEQwBmKaLGLhj0UJhbFgz59OIHnVp8Y8A=","auth":"89o8maC9DE1VYfFD3phPDQ=="}}];

var keys=[]
var values=[]
i=0
var arrVal=[];
var arrKey=[];
var keyString = [];
for (var key in inputString[0]) {

    keys[i]=key;
    if(keys[i] == "keys")
    {
    
    	keyString = inputString[0][key];
      alert(keyString.p256dh);
      alert(keyString.auth);
    	
    }
    else
    {
    	values[i]=inputString[0][key] ;
      alert( values[i]);
    }
   /* if(arrVal == "")
    {
    		arrVal = values[i]
    }
    else
    {
    	arrVal = arrVal+","+values[i];
    }*/
    
  
}
 //  alert(arrVal);
   //alert(values);
    
