<?php
$con=mysqli_connect("localhost","pi","","queued_drinks");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  
  
  if (!isset($_POST["programic"])) {
  $sql="INSERT INTO queue (Apple, Cranberry, Grape, Pomegranate, Orange, Name)
VALUES
('".mysqli_real_escape_string ($con,$_POST["Apple"])."',
'".mysqli_real_escape_string ($con,$_POST["Cranberry"])."',
'".mysqli_real_escape_string ($con,$_POST["Grape"])."',
'".mysqli_real_escape_string ($con,$_POST["Pomegranate"])."',
'".mysqli_real_escape_string ($con,$_POST["Orange"])."',
'".mysqli_real_escape_string ($con,$_POST["Name"])."')";

} else {
	
	//all this is for parsing and making the array of the formData
	$arr = explode(",",$_POST['formData']);
	$contents = array();
	$sql="INSERT INTO queue (";
	$varCount = 0;
	
	//parse and make an array of the formData
	foreach ($arr as $key) {
		$index = explode(":",$key);
		$contents[$varCount][0] = $index[0];
		$contents[$varCount][1] = intVal($index[1]);
		$varCount = $varCount +1;
	}
	
	//append in the columns to the sql query
	foreach ($contents as $key)
		$sql = $sql . $key[0] . ",";
	$sql = substr($sql,0,strlen($sql)-1);
	$sql = $sql . ") VALUES (";
	//append in the values to the sql query
	foreach ($contents as $key)
		$sql = $sql . $key[1] . ",";
	$sql = substr($sql,0,strlen($sql)-1);
	$sql = $sql . ")";
	
}

if (!mysqli_query($con,$sql))
  {
	echo "Failed Connection";//die('Error: ' . mysqli_error($con));
  } else {
	echo "Successful Drink Transmission"; //as long as this isn't false, we could return like, drinks ahead of us or
	//whatever.. doesn't need to be success
  }
mysqli_close($db);
?>