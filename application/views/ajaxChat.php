<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- jQuery静态库。-->
    <script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>

    <script type="text/javascript">

        $(document).ready(function (){

            var message = "";
            setInterval(function(){
                getdata();
            },500);

            function getdata() {
                $.get("getdata.php",function (data) {
                    var count = 0;
                    for (a in data){
                        count++;
                    }
                    var show = 0;
                    for (a in data){
                        if ( show >= count-15 ){
                            message += "<p>"+ data[a].username + "：" + data[a].message+"</p>";
                            $("#show_message").html(message);
                        }
                        show++;
                    }

                    message = "";
                });
            }

            $("#ckq").keydown(function(e){    //按下键盘触发函数
                if(e.keyCode==13){            //如果按下的是回车
                    var user = $('input:radio:checked').val();
                    $.ajax({
                        url: "chat.php",
                        type: "post",
                        async: false,
                        data: {"in":$("#ckq").val(),"username":user}
                    });
                    getdata();
                    $("#ckq").val("");
                }
            });

        })

    </script>


    <style type="text/css">

    </style>


</head>
<body>

<p id="message">小董与晴晴的对话：</p>
选择身份：<input type="radio" name="sex" value="小董" checked>小董
<input type="radio" name="sex" value="晴晴">晴晴
<br>
<div id="show_message">
</div>
<input type="text" id="ckq" name="in">

</body>
</html>