let expimgbg = document.getElementById("expimgbg");
let expimg = document.getElementById("expimg");
let left = document.getElementById("left");
let right = document.getElementById("right");


let openexpimg = function(imgaddress){
    expimgbg.style.display = "flex";
    expimg.src=imgaddress;
};

let closeexpimg = function(){
    expimgbg.style.display = "none";
};
let currindex;
let imgs = document.querySelectorAll('.gallery img');


let rightslide=function(){
    for(var i=0; i<imgs.length; i++){
        if(expimg.src==imgs[i].src){
            currindex=i;
        }
    }
    if(currindex==imgs.length-1){
        currindex=-1;
    }
    currindex+=1;
    openexpimg(imgs[currindex].src);
};
let leftslide=function(){
    for(var i=0; i<imgs.length; i++){
        if(expimg.src==imgs[i].src){
            currindex=i;
        }
    }
    if(currindex==0){
        currindex=imgs.length;
    }
    currindex-=1;
    openexpimg(imgs[currindex].src);
};

