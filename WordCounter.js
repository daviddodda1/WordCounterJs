$(".WordCountBox").keypress(function() {
  var IdVal = this.id;
  var txtString = this.value;
  var maxVal = this.getAttribute("WL-Max");
  var minVal = this.getAttribute("WL-Min");
  txtString = txtString.replace(/(^\s*)|(\s*$)/gi, "");
  txtString = txtString.replace(/[ ]{2,}/gi, " ");
  txtString = txtString.replace(/\n /, "\n");
  var WordsLength = txtString.split(" ").length;
  var outString = WordsLength.toString() + "/" + maxVal + " Words ";
  $("[for="+IdVal+"]").text(outString);
  if(WordsLength <= minVal || WordsLength > maxVal){
    $("[for="+IdVal+"]").css('color', 'red');
  }else{
    $("[for="+IdVal+"]").css('color', 'green');
  }
});
