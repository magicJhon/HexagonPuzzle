#pragma strict

var shapeType : shapeTypeEnum;
private var isFilled:boolean;
private var shape:GameObject;
function Start () {

}

function Update () {
	
}

function OnTriggerStay2D(coll: Collider2D) {
	if (coll.gameObject.tag=="Magnet" && coll.gameObject.name=="center"){
		var theParent = coll.gameObject.transform.parent.gameObject;
		
		var mouseDown = theParent.GetComponent(shapeBehaviour).IsMouseDown();
		
		if (!mouseDown && 
		 !isFilled){
			Debug.Log("stuck");
			isFilled=true;
			theParent.transform.position= transform.position;
			shape=theParent;
			GameObject.Find("LevelMaster").GetComponent(LevelMaster).IncreaseFill(true);

		}
		if (shape==theParent&&shape.transform.position!= transform.position && isFilled	){
			isFilled=false;
			shape=null;
			Debug.Log("unstuck");
			GameObject.Find("LevelMaster").GetComponent(LevelMaster).IncreaseFill(false);
		}
		
	}
	
}

function OnTriggerExit2D(coll: Collider2D) {
	
	if (coll.gameObject.tag=="Magnet" && coll.gameObject.name=="center" && isFilled){
		//Debug.Log("unstuck");
		//isFilled=false;
		//isFilled=false;
		//Debug.Log(coll.gameObject.transform.parent.gameObject.name);
		//coll.gameObject.transform.parent.gameObject.transform.position= transform.position;
		//GameObject.Find("LevelMaster").GetComponent(LevelMaster).IncreaseFill(false);
	}
}