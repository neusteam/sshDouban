<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
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
   
  <form action="updateuser">
   账号:<input name="user.username"  type="text"><br>
   密码:<input name="user.sex"  type="password"><br>
   电话：  <input name="user.phonenumber"  type="text"><br>
   邮箱：  <input name="user.email"  type="text"><br>
   城市：  <input name="user.city"  type="text"><br>
   生日：   <input name="user.birth"  type="text"><br>
  <input type="submit"  value="注册">
   </form>
   <a href="findAll">查所有用户</a>
   <a href="findAllMovie">查所有电影</a>
  </body>
</html>
