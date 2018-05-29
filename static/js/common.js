function reloadcode(){	
	$("#gcodestr").attr("src","inc/checkcode.asp");
}

function reloadcode2(){	
	$("#gcodestr2").attr("src","inc/checkcode2.asp");
}

function checklogin()
{
	if($("#loginform #username").val()=="")
	{
		alert("请输入用户名");
		$("#loginform #username").focus();
		return false;
	}
	
	if($("#loginform #userpassword").val()=="")
	{
		alert("请输入密码");
		$("#loginform #userpassword").focus();
		return false;
	}
	
	if($("#loginform #checkcode").val()=="")
	{
		alert("请输入验证码");
		$("#loginform #checkcode").focus();
		return false;
	}
	return true;
}


function checkpass()
{ 
    var regstr=/^\w{6,}$/;
	var regstr2=/^.+$/;
	
    if(!regstr2.test($("#passform #oldpass").val())){
		$("#passform #oldpasswordSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#passform #oldpasswordSpan").css({color:"#999999"});
	}

    if(!regstr.test($("#passform #newspass").val())){
		$("#passform #passwordSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#passform #passwordSpan").css({color:"#999999"});
	}
	
	if($("#passform #newspass").val()!=$("#passform #newspass2").val()){
		$("#passform #repasswordSpan").html("两次输入的密码不一致");
		$("#passform #repasswordSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#regform #repasswordSpan").html("再次输入密码");
		$("#regform #repasswordSpan").css({color:"#999999"});
	}
}

function checkreg(){
	var regstr=/^\w{6,}$/;
	var regstr2=/^\d{5,}$/;
	var regstr3=/^\d{4}$/;
	var email=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	
	if(!regstr.test($("#regform #username").val())){
		$("#regform #usernameSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#regform #usernameSpan").css({color:"#999999"});
	}
	
	if(!regstr.test($("#regform #userpassword").val())){
		$("#regform #passwordSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#regform #passwordSpan").css({color:"#999999"});
	}

	if($("#regform #userpassword").val()!=$("#regform #repassword").val()){
		$("#regform #repasswordSpan").html("两次输入的密码不一致");
		$("#regform #repasswordSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#regform #repasswordSpan").html("再次输入密码");
		$("#regform #repasswordSpan").css({color:"#999999"});
	}
	
	if(!regstr2.test($("#regform #qq").val())){
		$("#regform #qqSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#regform #qqSpan").css({color:"#999999"});
	}
	
	if(!email.test($("#regform #email").val())){
		$("#regform #emailSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#regform #emailSpan").css({color:"#999999"});
	}
	
	if(!regstr3.test($("#regform #checkcode").val())){
		$("#regform #checkcodeSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#regform #checkcodeSpan").css({color:"#999999"});
	}
}


function checkprofile(){

	var regstr=/^\d{5,}$/; 
	var email=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  
	
	if(!regstr.test($("#profileform #qq").val())){
		$("#profileform #qqSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#profileform #qqSpan").css({color:"#999999"});
	}
	
	if(!email.test($("#profileform #email").val())){
		$("#profileform #emailSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#profileform #emailSpan").css({color:"#999999"});
	}

}


function checkbind(){
	var regstr=/^.+$/;
	
    if(!regstr.test($("#bindform #realname").val())){
		$("#bindform #realnameSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#bindform #realnameSpan").css({color:"#999999"});
	}
	
    if(!regstr.test($("#bindform #alipay").val())){
		$("#bindform #alipaySpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#bindform #alipaySpan").css({color:"#999999"});
	}
}


function checkrepass(){
	var regstr=/^.+$/;  
	
    if(!regstr.test($("#repassform #username").val())){ 
		alert("请输入用户名");
		$("#repassform #username").focus();
		return false;
	}
	
    if(!regstr.test($("#repassform #email").val())){ 
		alert("请输入E-mail");
		$("#repassform #email").focus();
		return false;
	}
}


function checkaddress(){
	var regstr=/^.+$/;  
	
    if(!regstr.test($("#addressform #realname").val())){
		$("#addressform #realnameSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#addressform #realnameSpan").css({color:"#999999"});
	}
	
    if(!regstr.test($("#addressform #tel").val())){
		$("#addressform #telSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#addressform #telSpan").css({color:"#999999"});
	}
	 
    if(!regstr.test($("#addressform #provice option:selected").val())){
		$("#addressform #addressSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#addressform #addressSpan").css({color:"#999999"});
	}
	
	if(!regstr.test($("#addressform #street").val())){
		$("#addressform #streetSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#addressform #streetSpan").css({color:"#999999"});
	}
}


function getaddrlist(){
	var provice=$("#provice option:selected").val();
	$("#addressform #addressSpan").css({color:"#999999"});
	
	if(provice!="")
	{
		$.post("getaddrlist.asp",{"provice":provice},function(msg){ 
			var arrmsg=msg.split("|@#|");
			$("#city").html(arrmsg[0]);
			$("#county").html(arrmsg[1]);
		});
	}
	else
	{
		$("#city").html("<option value=\"\">城市</option>");
		$("#county").html("<option value=\"\">县区</option>");
	} 
}


function getcounty(){
	var city=$("#city option:selected").val(); 
	
	if(city!="")
	{
		$.post("getcounty.asp",{"city":city},function(msg){ 
			$("#county").html(msg);
		});
	}
	else
	{ 
		$("#county").html("<option value=\"\">县区</option>");
	} 
}


function defconfirm(tipstr,linkstr){
	if(confirm(tipstr)){
		location.href=linkstr;
	}
}

function checkdidan(){
	var regstr=/^\d+$/;  
	
	if(!regstr.test($("#didanform #num").val())){
		$("#didanform #numSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#didanform #numSpan").css({color:"#999999"});
	}
} 


function checkchongzhi(){
	var regstr=/^\d{20,}$/;  
	var regstr2=/^[0-9]+\.?[0-9]{0,2}$/;  
	
	if(!regstr2.test($("#chongzhi #amount").val())){
		alert('请输入金额。');
		$("#chongzhi #amountSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#chongzhi #amountSpan").css({color:"#999999"});
	}
	
	if(!regstr.test($("#chongzhi #alipay_orderno").val())){
		alert('交易号格式不正确，请输入正确的交易号。');
		$("#chongzhi #ordernoSpan").css({color:"#ff0000"});
		return false;
	}
	else
	{
		$("#chongzhi #ordernoSpan").css({color:"#999999"});
	}
}


function getmyprice(){
	var regstr=/^\d+$/; 
	var kbtype=$("#orderform #typ").val();
	if(regstr.test(kbtype)){
		 $.post("getmyprice.asp",{"typ":kbtype},function(msg){
		 	$("#priceSpan").html(msg);
		 });
	} 
	
}


function checkkongbao(){
	var regstr=/^\d+$/;   
	
	if(!regstr.test($("#orderform #address").val())){
		alert("请设置发货地址");
		return false;
	}
	
	if(!regstr.test($("#orderform #typ").val())){
		alert("请选择快递类型");
		return false;
	}	 
} 


function chkqqhf(){
	var regstr2=/^\d{5,}$/;
	if(!regstr2.test($("#regform #qq").val())){
		$("#regform #qqSpan").css({color:"#ff0000"}); 
	}
	else
	{		
		$("#regform #qqSpan").css({color:"#999999"});
		$("#regform #email").val($("#regform #qq").val()+"@qq.com");
	}
}