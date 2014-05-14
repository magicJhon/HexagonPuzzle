#pragma strict
var prefab:GameObject;
function Start () {
var obj:GameObject = Instantiate(prefab, transform.position, Quaternion.identity);
obj.name = prefab.name;
obj.gameObject.transform.localScale = transform.localScale;
obj.transform.rotation = transform.rotation;
obj.transform.parent = transform.parent;
Destroy(gameObject);
}

function Update () {

}