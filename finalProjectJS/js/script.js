function upDate(previewPic){
    document.getElementById("image").style.backgroundImage='url("' + previewPic.src + '")';
    document.getElementById("image").innerHTML=previewPic.alt;
	}

	function unDo(){
    document.getElementById("image").style.backgroundImage='url()';
    document.getElementById("image").innerHTML="Hover over an image below to display here.";
	}

function setImages(){
    var images=document.getElementsByTagName("img");
    for(let i=0;i<images.length;i++){
      console.log("image " + i + " updated");
      images[i].setAttribute("tabindex","0");
    }
}
