var ImgBox = document.querySelector(".img-box");
      var imgWarp = document.querySelector(".img-wrap");
      var originalImg = document.getElementById("originalImg");
      var line = document.getElementById("line");

      originalImg.style.width = ImgBox.offsetWidth + "px";

      var leftSpace = ImgBox.offsetLeft;

      ImgBox.onmousemove = function(e){
        e.pageX;
        var boxWidth = (e.pageX -leftSpace) + "px";
        imgWarp.style.width = boxWidth;
        line.style.left = boxWidth;
      }
