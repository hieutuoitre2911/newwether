
function upDate(previewPic) {
    console.log("Đang xem ảnh:", previewPic.alt);
    
    
    var imageDiv = document.getElementById('image');
    
    
    imageDiv.innerHTML = previewPic.alt;
    
    
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    
    imageDiv.style.backgroundColor = "transparent";
}


function unDo() {
    console.log("Reset về ban đầu");
    
   
    var imageDiv = document.getElementById('image');
    
  
    imageDiv.style.backgroundImage = "url('')";
    
 
    imageDiv.style.backgroundColor = "#8e68ff";
    
  
    imageDiv.innerHTML = "Hover over an image below to display here.";
}