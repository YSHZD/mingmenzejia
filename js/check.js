 
    function search(){
        var oinput = document.querySelectorAll('.wx')[0];
        var oresult = document.querySelectorAll('.oresult')[0];
        var oresults = document.querySelectorAll('.oresults')[0];
        if(trim(oinput.value)==''){
            oresult.innerHTML = "<p style='color:red';>不能为空</p>";
            return false;
        }else{
            oresult.innerHTML = "";
            var xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); 
            var data = "wx=" + encodeURIComponent(trim(oinput.value));

            xmlHttp.open("post", "check.php", true);

            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    $('.check_results').show();
                    if(xmlHttp.responseText==110){
                        oresults.innerHTML=`<p class="no">\“ 对不起，你所查询的老师不存在，谨防上当受骗！\”</p>`;  
                    }else{
                        oinput.value='';
                        oresults.innerHTML=`<p class="ok">“ 您好，你所查询的微信号属于名门泽佳下属护肤中心老师，请您放心接受服务！”</p>`
                    }
                    
                }
            }
            xmlHttp.send(data);
        }   
    }
    $(".resultsclose").on("click",function(){
         $('.check_results').hide();   
    });
    function add(){
        var otextarea = document.querySelectorAll('.textarea')[0];
        var addinfo = document.querySelectorAll('.addinfo')[0];
        if(trim(otextarea.value)==''){
            alert("宝贵意见不能为空");
            return false;
        }
        else if(trim(addinfo.value)==''){
            alert("联系方式不能为空") ;
            return false;
        }
        else{
            var xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); 
           /* var data ={
                textarea:encodeURIComponent(trim(otextarea.value)),
                addinfo:encodeURIComponent(trim(addinfo.value))
            } */
             var data = "textarea=" + encodeURIComponent(trim(otextarea.value))+"&addinfo="+encodeURIComponent(trim(addinfo.value));
            xmlHttp.open("post", "addinfo.php", true);

            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                   if(xmlHttp.responseText>0){
                    alert("信息成功提交，尽快答复您！");
                   }else{
                    alert('提交失败');
                   }
                    
                }
            }
            console.log(data);
            xmlHttp.send(data);
        }
        
        
    }
    function trim(str){
        return str.replace(/(^\s*)|(\s*$)/g,"");
    }
