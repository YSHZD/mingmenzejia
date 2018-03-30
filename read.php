<?php 	
header('content-type:text/html;charset=utf-8');
$content=file_get_contents("testfile.txt");
$arr_hang=explode("\n",$content);
if($arr_hang){
   echo "<table border='1' style='border-collapse:collapse;margin:100px auto;'>";
   echo "<thead><tr><th>宝贵意见</th><th>联系信息</th><th>时间</th></tr></thead>";
   foreach($arr_hang  as  $lie){
       list($txt,$tel,$time)=explode("#",$lie);
       if($txt&&$tel&&$time){
       	echo  "<tr><td>{$txt}</td><td>{$tel}</td><td>".date("Y-m-d H:i",$time) ."</td></tr>";
       }
       
   }
   echo "</table>";
}







 ?>