
const menubtn = document.querySelector(".mobile_menu")
const active = document.querySelector(".header")

 const togglenavbar = () =>{
  active.classList.toggle('active')
 }
 menubtn.addEventListener('click', () => togglenavbar());




 const TypingText = document.querySelector(".typed-text");
 const AutoTyping = document.querySelector(".TypeCursor");
  
 const textArray = ["the lover of Coding", "Web Developer", "Passionate Programmer",
                    "Tech Enthusiast"];
 const typingDelay = 100;
 const erasingDelay = 100;
 const newTextDelay = 2000; 
 let textArrayIndex = 0;
 let charIndex = 0;
  
 function type() {
   if (charIndex < textArray[textArrayIndex].length) {
     if(!AutoTyping.classList.contains("typing")) AutoTyping.classList.add("typing");
     TypingText.textContent += textArray[textArrayIndex].charAt(charIndex);
     charIndex++;
     setTimeout(type, typingDelay);
   } 
   else {
     AutoTyping.classList.remove("typing");
       setTimeout(erase, newTextDelay);
   }
 }
  
 function erase() {
     if (charIndex > 0) {
     if(!AutoTyping.classList.contains("typing")) AutoTyping.classList.add("typing");
     TypingText.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
     charIndex--;
     setTimeout(erase, erasingDelay);
   } 
   else {
     AutoTyping.classList.remove("typing");
     textArrayIndex++;
     if(textArrayIndex>=textArray.length) textArrayIndex=0;
     setTimeout(type, typingDelay + 1100);
   }
 }
  
 document.addEventListener("DOMContentLoaded", function() { 
   if(textArray.length) setTimeout(type, newTextDelay + 250);
 });

