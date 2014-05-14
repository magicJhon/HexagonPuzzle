#pragma strict


var shapeType : shapeTypeEnum;


private var  screenPoint:Vector2;
private var  offset:Vector2;

private var rot:int=0;

private var rotMax:int;

private var mouseDown:boolean;

function Start () {
	if (shapeType == shapeType.Hexagon){
		rotMax=30;
		transform.Rotate(Vector3.forward * 60* Random.Range(0,6));
	}
	
	
}

function Update () {

	if (rot>0){
		transform.Rotate(Vector3.forward * 2);
	    rot--;
	    if (rot==0){
	    	GameObject.Find("LevelMaster").GetComponent(LevelMaster).CheckWin();

	    }
	}
}


function IsMouseDown(){
	return mouseDown;
}

function OnMouseOver () {
   if (Input.GetMouseButton(1) && rot<=0) {
   		rot=rotMax;
      
   }
}

function OnMouseDown()
{
mouseDown=true;
    offset = transform.position - Camera.main.ScreenToWorldPoint(
         Vector2(Input.mousePosition.x, Input.mousePosition.y));
         
}

function OnMouseUp(){
mouseDown=false;
}

function OnMouseDrag()
{
    var curScreenPoint:Vector2 =  Vector2(Input.mousePosition.x, Input.mousePosition.y);
 
    var curPosition:Vector2 = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
    transform.position = curPosition;
}