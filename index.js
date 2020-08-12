let body = document.querySelector("body");
let bio = document.querySelector(".bio");
let share = document.querySelector(".share-hide");
let lady = document.querySelector(".image-name-date");
let icon = document.querySelector(".icon"); 
let pop = document.querySelector(".pop-up")
let iconImage = document.querySelector(".fill");

icon.addEventListener('click',()=>{
    bio.classList.toggle("dark");
    share.classList.toggle("share-show");
    lady.classList.toggle("hidden");
    pop.classList.toggle("pop-show")
    iconImage.classList.toggle("filter")
    icon.classList.toggle("dark-icon")
})

