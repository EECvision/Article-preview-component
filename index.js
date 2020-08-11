let bio = document.querySelector(".bio");
let share = document.querySelector(".share");
let lady = document.querySelector(".image-name-date");
let icon = document.querySelector(".icon"); 

icon.addEventListener('click',()=>{
    bio.classList.toggle("dark");
    share.classList.toggle("hidden");
    lady.classList.toggle("hidden");
})