#pragma strict
private var camSpeed:float;
function Start () {
camSpeed=Constants.camSpeed;
}

function Update () {
	if (Input.GetKey("a")) transform.position.x+=-camSpeed;
	if (Input.GetKey("d")) transform.position.x+=camSpeed;
	if (Input.GetKey("s")) transform.position.y+=-camSpeed;
	if (Input.GetKey("w")) transform.position.y+=camSpeed;
}