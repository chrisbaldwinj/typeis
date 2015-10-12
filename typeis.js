function typeis(obj,strict) {
  var t,
  ty = typeof obj; //get the original typeof for later testing.
  strict = !!strict;//set strict if not set. (if is set it'll be the same)
  
  if(obj === undefined || obj === null) //check if either or and if so return it.
    return obj;
    
  /*
    another with a href or src gets returned href or src so we change the method to [].toString.call
    toDateString test is for new Date, toString will return the string date.
    and replace is for new String testing since a string.toString is the string.
  */
  t = (obj.href || obj.src || obj.toDateString || obj.replace ? [].toString.call(obj) :  obj.toString());
  
  // all html elements return as DOM!
  if(t.indexOf("HTML") >= 0 || t.indexOf("NodeList") >= 0)
    return "DOM";
  
  //if typeof is a boolean or function return ty  
  if(ty === "boolean" || ty === "function")
    return ty;
  
  //this is for strict mode if Error is found we'll set it to return just Error else continue.
  if(t.indexOf("Error") >= 0 && strict === false)
    return "Error";
  
  //switch case for others.
  switch(t.toLowerCase()) {
    case "[object math]": return "Math";
    case "[object date]": return "Date";
    case "[object string]": return "String";
    case "[object array]": return "Array";
    case "[object object]": return "Object";
  }
  
  
  //else return undefined OR 0 something that test case won't become true since undefined does === undefined
  return undefined;
}
