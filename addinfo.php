<?php 

$txt=!empty($_POST['textarea'])?$_POST['textarea']:null;
$tel=!empty($_POST['addinfo'])?$_POST['addinfo']:null;

if($txt!=null&&$tel!=null){
$p="testfile.txt";
$mode="a";
$content =$txt."#".$tel."#".time();
writeData($p,$mode,$content);
}
function writeData($path,$mode,$data){
	$fp=fopen($path,$mode);
	$retries=0;
	$max_retries=100;
	do{
		if($retries>0){
			usleep(rand(1,10000));
		}
		$retries+=1;
	}while(!flock($fp,LOCK_EX) and $retries<=$max_retries);
	if($retries==$max_retries){
		return false;
	}
	$result = fwrite($fp,"$data\n");
	flock($fp,LOCK_UN);
	fclose($fp);
	echo $result;
}



 ?>






































