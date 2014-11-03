

var PlayerSpeed : int;
var AmountToMove : int;
var Bullet: Rigidbody;
var LevelOneWinScore: int;
var LevelTwoWinScore: int;
var GameWinScore: int;

static var PlayerLives : int;
static var PlayerScore : int;

function Start () {
GameWinScore = 15000;
PlayerSpeed = 15;
PlayerLives = 5;
LevelOneWinScore = 2500;
LevelTwoWinScore = 7400;
PlayerScore = 0;

}

function Update () {
	//amount to move player
	AmountToMove = PlayerSpeed * Input.GetAxis("Horizontal");
	
	if(transform.position.x >= -55 && transform.position.x <= 55){
		// Move the Player
		transform.Translate(Vector3.right * (AmountToMove * Time.deltaTime));
	}
	
	if (Input.GetButtonDown("Jump"))
	{
		Instantiate(Bullet, transform.position, transform.rotation);
	}
	
	if(PlayerScore == GameWinScore)
	{
		Application.LoadLevel(3);
	}
	
	if(PlayerScore == LevelOneWinScore)
	{
		GameBoss.LevelTwo = true;
		EnemyScript.EnemySpeed = 7;
	}
	
	if(PlayerScore == LevelTwoWinScore)
	{
		GameBoss.LevelThree = true;
		EnemyScript.EnemySpeed = 10;
	}
	
	if(PlayerLives <= 0)
	{
		Application.LoadLevel(2);
	}

}

function OnGUI()
{
	GUI.Label(Rect(10,10,200,50),"Score: " + PlayerScore);
	GUI.Label(Rect(10,30,200,50),"Lives: " + PlayerLives);
}

function OnTriggerEnter(otherObject: Collider)
{
	if (otherObject.gameObject.tag == "Enemy")
	{
		PlayerLives = 0;
	}
}