#pragma strict

public var level:int;
public var winningSlots:int;
private var currentFilled:int;


private var isWrongAttraction:boolean;

public var hexagon:GameObject;
public var hexagon_empty_arr:GameObject[];
public var hexagon_filled_arr:GameObject[];


function Start () {

	currentFilled=0;
	var hexWidth = hexagon.renderer.bounds.size.x;
	var hexHeight = hexagon.renderer.bounds.size.y*3/4;
	if (level==1){
		hexagon_empty_arr[0].transform.position = new Vector2(0,0);
		hexagon_empty_arr[1].transform.position = new Vector2(hexWidth,0);
		hexagon_empty_arr[2].transform.position = new Vector2(hexWidth/2,hexHeight);

	}
	if (level==999){
		hexagon_empty_arr[0].transform.position = new Vector2(0,0);
		hexagon_empty_arr[1].transform.position = new Vector2(hexWidth,0);
		hexagon_empty_arr[2].transform.position = new Vector2(hexWidth/2,hexHeight);
		hexagon_empty_arr[3].transform.position = new Vector2(hexWidth*3/2,hexHeight);
		hexagon_empty_arr[4].transform.position = new Vector2(hexWidth/2,-hexHeight);

	}
}

function Update () {

}

function IncreaseFill(up:boolean){
	if (up)	currentFilled++;
	else currentFilled--;
	//Debug.Log(currentFilled);
	if (currentFilled==winningSlots){
		//Debug.Log("Win");
		CheckWin();
	}
}

function SetWrongAttraction(bool:boolean){
	isWrongAttraction=bool;
}

function CheckWin(){
	yield WaitForSeconds(1.5);
	
	if (currentFilled==winningSlots){
		var win:boolean = true;
		var magnet_arr:GameObject[] = GameObject.FindGameObjectsWithTag("Magnet");  //returns GameObject[]
		for (var myMagnet:GameObject in magnet_arr){
			if (myMagnet.GetComponent(magnet).returnIsWrongAttraction()){
				win=false;
				break;
			}
		}
	
		if (win){
			Debug.Log("win");
		} else {
			Debug.Log("not win");
		}
	} else {
		Debug.Log("not win");
	}
}
