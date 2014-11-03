var Explosion :Transform;
var health : int = 100;
function Update () 
{
//can take two bullets
	if(health >= 0)
	{
		Destroy(this.gameObject);
	}

}

function OnTriggerEnter(otherObject:Collider)
{
	if(otherObject.gameObject.tag == "Bullet")
	{
		health -= 50;
		
		Instantiate(Explosion,transform.position,transform.rotation);
		
		Destroy(otherObject.gameObject);
	}
	
	if(otherObject.gameObject.tag == "Enemy")
	{
		health -= 100;

		Instantiate(Explosion,transform.position,transform.rotation);
		
		Destroy(otherObject.gameObject);
		Destroy(this.gameObject);
	}

}