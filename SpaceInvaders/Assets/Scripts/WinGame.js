function OnGUI () {
	if(GUI.Button(Rect(225,650,300,50), "You won!! Press to Play again")){
		Application.LoadLevel(1);
	
	}
	if(GUI.Button(Rect(575,650,300,50), "Quit")){
		Application.Quit();
		
	}

}