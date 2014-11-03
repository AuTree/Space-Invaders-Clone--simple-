var Enemies :Transform;
var Walls :Transform;
var EnemyPos : Vector3;
var WallPos : Vector3;

var SpawnedEnemies :boolean;
var SpawnedWalls :boolean;
var LevelTwoSpawnedEnemies :boolean;
var LevelThreeSpawnedEnemies :boolean;
static var LevelOne :boolean;
static var LevelTwo :boolean;
static var LevelThree :boolean;
//var MovingRight: boolean;
//var MovingLeft : boolean; 

var GrpEnemies = new Array();

var x:int;
var y:int;
var EnemySize: int; //Will be squared

function Start () 
{
	LevelOne = true;
	LevelTwo = false;
	LevelThree = false;
	SpawnedEnemies = false;
	SpawnedWalls = false;
	LevelTwoSpawnedEnemies = false;
	LevelThreeSpawnedEnemies = false;
	EnemyPos.z = -2;
	WallPos.z = -2;
	WallPos.x = -30;
	WallPos.y = -30;
	EnemySize = 5;
	MakeEnemies();
	MakeWalls();
}

function Update () {
	//AmountToMove = EnemySpeed * Time.deltaTime;
	
	if(!SpawnedEnemies || !SpawnedWalls){
		MakeEnemies();
		MakeWalls();
	}
	
	if (LevelTwo) {
		if (!LevelTwoSpawnedEnemies){
			EnemySize = 7;
			MakeEnemies();
			LevelTwoSpawnedEnemies = true;
			}
		}
		
	if (LevelThree) {
		if (!LevelThreeSpawnedEnemies){
			EnemySize = 10;
			MakeEnemies();
			LevelThreeSpawnedEnemies = true;
			}
		}

}

function MakeEnemies(){
	var x;
	var y;
	for (x =0; x < EnemySize;x++) {
		EnemyPos.x = x*4;
		for (y =0; y < EnemySize;y++) {
			EnemyPos.y = y*4;
			GrpEnemies[x*EnemySize +y] = Instantiate(Enemies, EnemyPos, Quaternion.identity);
		}
	}
	SpawnedEnemies = true;
}

function MakeWalls()
{
	for (var y =0; y < 4; y++) 
	{
		var cloneWalls = Instantiate(Walls, WallPos, Quaternion.identity);
		WallPos.x += 20;
	}
	SpawnedWalls = true;
}

