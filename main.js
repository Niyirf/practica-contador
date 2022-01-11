window.onload = function() {
    console.log('hola mundo');
 
    var counter = 0;
 
    var counterElement = document.getElementById("counter");
    var btnSub = document.getElementById("btnSub");
    var btnRes = document.getElementById("btnRes");
    var btnAdd = document.getElementById("btnAdd");
    
    function op(num) {
      // Solución 1
      counter += num;
      counterElement.innerHTML = counter;
    }

    function reset() {
      counterElement.innerHTML = 0;
      counter = 0;
   }

   btnSub.addEventListener("click", function() {
      op(-1);
   });
   btnAdd.addEventListener("click", function() {
      op(1);
   });
   btnRes.addEventListener("click", reset);
}
 
   