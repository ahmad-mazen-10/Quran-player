let progress = document.getElementById("progress");
let sorah = document.getElementById("sorah");
let ctrlIcon = document.getElementById("ctrlIcon");

sorah.addEventListener('loadedmetadata', function(){
    progress.max = sorah.duration;
    progress.value = sorah.currentTime;
});


function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        sorah.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        sorah.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


sorah.addEventListener("timeupdate", function() {
    progress.value = sorah.currentTime;
});

progress.oninput = function() {
    sorah.currentTime = progress.value;
 };



// if(sorah.play())
// {
//     setInterval(()=>{  
//         progress.value = sorah.currentTime;
//     } , 500);
// }

// progress.onchange = function(){
//     sorah.play();
//     sorah.currenttime = progress.value;
//     ctrlIcon.classList.add("fa-pause");
//     ctrlIcon.classList.remove("fa-play");
// }




// let progress = document.getElementById("progress");
// let sorah = document.getElementById("sorah");
// let ctrlIcon = document.getElementById("ctrlIcon");

// sorah.onloadedmetadata = function() {
//     progress.max = sorah.duration;
//     progress.value = sorah.currentTime;
// };

// function playPause() {
//     if (ctrlIcon.classList.contains("fa-pause")) {
//         sorah.pause();
//         ctrlIcon.classList.remove("fa-pause");
//         ctrlIcon.classList.add("fa-play");
//     } else {
//         sorah.play();
//         ctrlIcon.classList.add("fa-pause");
//         ctrlIcon.classList.remove("fa-play");
//     }
// }

// sorah.addEventListener("timeupdate", function() {
//     progress.value = sorah.currentTime;
// });

// progress.oninput = function() {
//     sorah.currentTime = progress.value;
// };



