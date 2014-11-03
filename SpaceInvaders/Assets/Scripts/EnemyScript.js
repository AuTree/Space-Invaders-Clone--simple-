var Bullet: Rigidbody;
var TimeUntilShot: float;

var MovingRight: boolean;
var MovingLeft : boolean; 

var IncreaseSpeed:int;
static var EnemySpeed: int;


function Start () 
{
	TimeUntilShot = Random.Range(1,8); 
	IncreaseSpeed = 1;
	MovingRight = true;
	MovingLeft = false;
	EnemySpeed = 5;
}

function Update () {

	AmountToMove = EnemySpeed * Time.deltaTime;
	
	Shoot();
	if (MovingRight){
		if(transform.position.x <= 45){
			//MoveRight(AmountToMove * IncreaseSpeed);
			transform.Translate(AmountToMove * IncreaseSpeed,0,0);
		}
		else {
			//JumpDown(-3);
			transform.Translate(0,-3,0);
			MovingRight = false;
			MovingLeft = true;
			
		}
	}
	
	if (MovingLeft){
		if(transform.position.x >= -45){
			//MoveLeft(AmountToMove * IncreaseSpeed);
			transform.Translate(-AmountToMove * IncreaseSpeed,0,0);
		}
		else {
			//JumpDown(-3);
			transform.Translate(0,-3,0); 
			MovingLeft = false;
			MovingRight = true;
			IncreaseSpeed ++;
			
		}

}


}

function Shoot () {
	RandomNumber = Random.Range(1.0,15);
	TimeUntilShot -= 1 * Time.deltaTime; 
	
	if( TimeUntilShot <= 0)
	{
		Instantiate(Bullet, transform.position, transform.rotation);
		TimeUntilShot = RandomNumber;
	}
}