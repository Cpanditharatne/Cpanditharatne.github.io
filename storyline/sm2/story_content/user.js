function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6WVNx8K3VIW":
        Script1();
        break;
      case "6YVs4IH09VR":
        Script2();
        break;
  }
}

function Script1()
{
  var player=GetPlayer();
var notes = player.GetVar('StuNotes');
var Name = player.GetVar('FullName1');
var Unit = player.GetVar('UnitName');

window.open('https://studyconnect.edu.au/printpdf/index.php?w1=' + Name + '&w2=' + Unit + '&w3=' + notes , '_blank' );
}

function Script2()
{
  var player = GetPlayer();

var myName  = lmsAPI.GetStudentName();

var myid  = lmsAPI.GetStudentID();


var array = myName.split(',');
var newName = array[1] + ' ' + array[0];

player.SetVar("FullName1", newName);
player.SetVar("StuId", myid);

}

