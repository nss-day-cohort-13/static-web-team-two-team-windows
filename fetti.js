var navLinks = document.getElementsByClassName("top-nav")[0].getElementsByTagName("a");

for(var i = 0; i != navLinks.length; ++i) {
  navLinks[i].onclick = function() {
    var fettiDiv = document.createElement("div");
    fettiDiv.className = "fetti";

    var aLeft = this.getBoundingClientRect().left;
    var aTop = this.getBoundingClientRect().top;
    var fLeft = fettiDiv.getBoundingClientRect().left;
    var fTop = fettiDiv.getBoundingClientRect().top;

    var aWidth = this.offsetWidth;
    var aHeight = this.offsetHeight;
    var fWidth = this.offsetHeight;
    var fHeight = this.offsetHeight

    var aCenX = aLeft + aWidth / 2;
    var aCenY = aTop + aHeight / 2;
    var fCenX = fLeft + fWidth / 2;
    var fCenY = fTop + fHeight / 2;

    fettiDiv.style.left = (aCenX - fWidth / 1) + "px";
    fettiDiv.style.top = (aCenY - fHeight / 1) + "px";

    var fCount = 50;
    for(var i = 0; i != fCount; ++i) {
      var piece = document.createElement("div");
      piece.className = "fetti-piece";
      var pWidth = piece.offsetWidth;
      var pHeight = piece.offsetHeight;

      var rVal = parseInt(Math.floor(Math.random() * 8).toString(), 16);
      var gVal = parseInt(Math.floor(Math.random() * 8).toString(), 16);
      var bVal = parseInt(Math.floor(Math.random() * 8).toString(), 16);
      piece.style.backgroundColor = "#" + rVal + gVal + bVal;

      piece.style.top = (fCenY + fHeight / 2 - pHeight / 2) + "px";
      piece.style.left = (fCenX + fWidth / 2 - pWidth / 2) + "px";

      fettiDiv.appendChild(piece);
    }

    document.getElementsByTagName("body")[0].appendChild(fettiDiv);

    //NOTE(adam): delayed adding translate css property to prevent browser reflow issues
    setTimeout(function() {
      for(var i = 0; i < fettiDiv.children.length; ++i) {
        var piece = fettiDiv.children[i];

        var xTrans = (Math.random() - 0.5) * 150;
        var yTrans = (Math.random() - 0.5) * 150;

        piece.style.transform = `translate(${xTrans}px, ${yTrans}px)`;
      }
    }, 1);

    setTimeout(function() {
      var fettiList = document.getElementsByClassName("fetti");
      for(var i = 0; i != fettiList.length; ++i) {
        fettiList[i].parentElement.removeChild(fettiList[i]);
      }
    }, 1000);
  };
}