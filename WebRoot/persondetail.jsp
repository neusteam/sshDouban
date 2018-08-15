<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
   

  </head>
  
  <body>
    用户名：${username }<br>
    性别：${sex }<br>
    电话：${phonenumber } <br>
    邮箱：${email } <br>
    居住地：${city }<br>
    生日：${birth }<br> 
    <img alt="" src="${url}">
    
  </body>
</html>
