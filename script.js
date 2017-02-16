$(document).ready(function(){
// write jquery starting here








// When you click '#button0'
// the values of '#input1' go into '#line1', '#input2' go into '#line2'..etc
  $("#button0").click(function(){
    $("#line1").html( $("#input1").val() )
    $("#line2").html( $("#input2").val() )
    $("#line3").html( $("#input3").val() )
  })

// When you double click '#button0'
// it empties '#line1' '#line2' '#line3'
  $("#button0").dblclick(function(){
    $("#line1").empty()
    $("#line2").empty()
    $("#line3").empty()
  })

// When you click on '#button9'
// '.box' animates to move to the below position and changes size and '.lines' hide
  $("#button9").click(function(){
      $(".box").animate({
              left: "20px",
              top: "20px",
              height: "10px",
              width: "10px"
            })
      $(".lines").hide()
  })

}); //Do not write jQuery past this line
