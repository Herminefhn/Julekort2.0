function create(){

    document.getElementById("createbox").style.display="none";
    document.getElementById("newcard").style.display="block";

    let overskrift = document.getElementById("header");
    console.log(overskrift.value)
    let nyoverskrift = document.getElementById("newheader");
    nyoverskrift.innerText=overskrift.value;
    
   let tekst = document.getElementById("text");
   console.log(tekst.value)
   let nytekst = document.getElementById("newtext");
   nytekst.innerText=tekst.value;

   let fra = document.getElementById("from");
   console.log(fra.value)
   let nyfra = document.getElementById("newfrom");
   nyfra.innerText=fra.value;


   let bakgrunnsfarge = document.getElementById("color");
   console.log(color.value)

   let skriftfarge = document.getElementById("color2");
   console.log(color2.value)

   nyoverskrift.style.color=skriftfarge.value
   nytekst.style.color=skriftfarge.value
   nyfra.style.color=skriftfarge.value

   
   let image = document.getElementById ("bilde").value;
   console.log(image);

   let newimage = document.getElementById ("newimage");
   console.log(newimage);

   if (image=="julekuler") {
    newimage.src="img/julekuler.png";
   }

   if (image=="snøman") {
    newimage.src="img/snøman.png";
   }

   if (image=="juletre") {
    newimage.src="img/juletre.png";
   }

   document.getElementById("newcard").style.backgroundColor=bakgrunnsfarge.value;
  
}


function printNewOrders(){
  window.print();
}
$(document).on("click", "#print-click", printNewOrders);