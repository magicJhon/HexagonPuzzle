#pragma strict

var magnetType : magnetTypeEnum;
private var isWrongAttraction:boolean;
function Start () {
	isWrongAttraction=false;
}

function Update () {
	//Debug.Log(isWrongAttraction);
}

function returnIsWrongAttraction(){
	return isWrongAttraction;
}

function OnTriggerStay2D(coll: Collider2D) {
	TestMagnetAttraction(coll,true);
	
}

function OnTriggerExit2D(coll: Collider2D) {
	TestMagnetAttraction(coll,false);
}

function TestMagnetAttraction(coll: Collider2D,enter:boolean){
	if (coll.gameObject.tag=="Magnet"){
	
		var otherMagnetType = coll.gameObject.GetComponent(magnet).magnetType;
		if ((magnetType == magnetType.Red && otherMagnetType ==magnetType.Blue)
		|| (magnetType == magnetType.Blue && otherMagnetType ==magnetType.Red)){
			
		}
		else if (
		   (magnetType == magnetType.Red && otherMagnetType ==magnetType.Red )
		|| (magnetType == magnetType.Red && otherMagnetType ==magnetType.Green )
		|| (magnetType == magnetType.Red && otherMagnetType ==magnetType.Invisible )
		
		|| (magnetType == magnetType.Blue && otherMagnetType ==magnetType.Blue )
		|| (magnetType == magnetType.Blue && otherMagnetType ==magnetType.Green)
		|| (magnetType == magnetType.Blue && otherMagnetType ==magnetType.Invisible )
		
		|| (magnetType == magnetType.Green && otherMagnetType ==magnetType.Red )
		|| (magnetType == magnetType.Green && otherMagnetType ==magnetType.Blue )
		|| (magnetType == magnetType.Green && otherMagnetType ==magnetType.Invisible )
		
		|| (magnetType == magnetType.Invisible && otherMagnetType ==magnetType.Red )
		|| (magnetType == magnetType.Invisible && otherMagnetType ==magnetType.Green )
		|| (magnetType == magnetType.Invisible && otherMagnetType ==magnetType.Blue )
		
		){
			
			 isWrongAttraction=enter;
			 
		}
		
	}
}