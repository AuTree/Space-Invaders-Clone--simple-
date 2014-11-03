function OnGUI()
{
	instructionText = "Instructions:\nPress Left and Right Arrows to move\nPress Spacebar to fire";
	
	GUI.Label(Rect(10,10,250,200), instructionText);
	
	if(GUI.Button(Rect(200,650,300,50), "Start Game")) 
	{
		Application.LoadLevel(1);
	}
	
	if(GUI.Button(Rect(550,650,300,50), "Quit"))
	{
		Application.Quit();	
	}
}