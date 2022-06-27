
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
console.log(scrollToTopBtn);





//nfn
var aa = document.getElementById("aa11")
var aa = document.getElementById("aa1")
var aa = document.getElementById("aa2")
var aa = document.getElementById("aa3")
var aa = document.getElementById("aa4")
var header = document.getElementById("id")
 console.log(header)
 console.log(aa)
 window.onscroll = function() {
  if (window.scrollY >= "2") {
    header.style.backgroundColor="#19c8fa6b";
    header.style.transition="2s";
    header.style.boxShadow="2px 0 5px black";
    header.style.border="1px solid black";
    // setTimeout(header.style.opacity="0" , 1000)
    aa11.style.color="black"
    aa1.style.color="black"
    aa2.style.color="black"
    aa3.style.color="black"
    aa4.style.color="black"
}else{
  header.style.cssText="background-color : black ; color :black;";
  aa11.style.color="white"
  aa1.style.color="white"
  aa2.style.color="white"
  aa3.style.color="white"
  aa4.style.color="white"
}

if (window.scrollY >= "200") {
  scrollToTopBtn.style.display="block";
}else{
scrollToTopBtn.style.display="none";
}


scrollToTopBtn.onclick = function () {
// Scroll to top logic
window.scrollTo({
top: 0,
behavior: "smooth"
});
}

 }

 var messege = document.getElementById("messege")
 console.log(messege)
 var res = document.getElementById("js")
 messege.addEventListener("click" , (eo) => {
   res.style.display="block"
 });
 var button = document.getElementById("button")
 console.log(button)
 button.addEventListener("click" , (eo) => {
   res.style.display="none"
 })