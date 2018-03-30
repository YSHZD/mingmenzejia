<?php 
$path="good.pdf";
/*Header("Content-type: application/pdf");
header("Content-Disposition:inline;filename='study.pdf'");
readfile($path);*/
$file = fopen($path,"r"); 
Header("Content-type: application/pdf");
echo fread($file,filesize($path));
fclose($file);
 ?>