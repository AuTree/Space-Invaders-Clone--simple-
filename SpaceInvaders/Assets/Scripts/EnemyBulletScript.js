var BulletSpeed : int;
var Explosion: Transform;

function Start () {
BulletSpeed = 20;

}

function Update () {
	AmountToMove = BulletSpeed * Time.deltaTime;

	if(transform.position.y <= -50){
		Destroy(this.gameObject);
	}
	else {
		transform.Translate(Vector3.down * AmountToMove);
	}
}

function OnTriggerEnter(otherObject:Collider)
{
	if(otherObject.gameObject.tag == "Defense")
	{
		Instantiate(Explosion,transform.position,transform.rotation);
		
		Destroy(otherObject.gameObject);
		Destroy(this.gameObject);
	}

	if (otherObject.gameObject.tag == "Player")
	{
		PlayerScript.PlayerLives --;
		Instantiate(Explosion,transform.position,transform.rotation);
		
		Destroy(this.gameObject);
	}
}