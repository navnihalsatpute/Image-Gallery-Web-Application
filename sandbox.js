let expimgbg = document.getElementById("expimgbg");
let expimg = document.getElementById("expimg");


let openexpimg = function(imgaddress){
    expimgbg.style.display = "flex";
    expimg.src=imgaddress;
};

let closeexpimg = function(){
    expimgbg.style.display = "none";
};
let currindex;
const imgs = document.querySelectorAll('.gallery img');


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


//DOWNLOAD BUTTON
let startdownload = function(){
    var a = document.createElement('a');
    a.href = expimg.src;
    a.download = "image.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
