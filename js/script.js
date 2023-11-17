function init(){
//add your javascrip between these two lines of code

  //get div element
  var button = document.getElementById('entrybutton');
  
  //buttonClicked function
  function buttonClicked(){
	var input = document.getElementById('entryinput');
	document.getElementById('textoutput').innerHTML = input.value;
	alert("Ella Brady: " + input.value);
  });

  button.addEventListener('click', buttonClicked);
  });

  window.addEventListener('load', init);
