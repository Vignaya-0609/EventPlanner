const faqss=document.querySelectorAll(".faqs");
faqss.forEach((faq) => {
   faq.addEventListener("click",() => {
     faq.classList.toggle("active");
   });
});
