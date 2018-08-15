<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="com.ycj.entity.Movieinfo" %>
<%

String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>

<head>
    <base href="<%=basePath%>">
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="./css/common.css">
    <link rel="stylesheet" href="./css/result.css">
    <title>${moviename}</title>
</head>

<body>
    <div class="index-wrapper">
        <div class="index-header">
            <ul class="index-left-nav index-nav">
                <a href="">
                    <li>豆瓣</li>
                </a>
                <a href="">
                    <li>读书</li>
                </a>
                <a href="">
                    <li>电影</li>
                </a>
                <a href="">
                    <li>音乐</li>
                </a>
                <a href="">
                    <li>同城</li>
                </a>
                <a href="">
                    <li>小组</li>
                </a>
                <a href="">
                    <li>阅读</li>
                </a>
                <a href="">
                    <li>FM</li>
                </a>
                <a href="">
                    <li>时间</li>
                </a>
                <a href="">
                    <li>豆品</li>
                </a>
                <a href="">
                    <li>更多</li>
                </a>
            </ul>
            <ul class="index-right-nav index-nav">
                <a href="./login.html">
                    <li>登录</li>
                </a>
                <a href="./register.html">
                    <li>注册</li>
                </a>
            </ul>
        </div>
        <div class="index-search-banner">
            <div class="index-search-content">
                <div class="movie-logo" href="./index.html">
                    <img src="./image/movie_logo.png" alt="">
                </div>
                <div class="search-input-banner">
                    <form action="">
                        <input name="keyWord" type="text" class="search-input" placeholder="搜索电影、电视剧、综艺、影人">
                        <input type="submit" class="search-input-submit" value="搜索">
                    </form>
                </div>
            </div>
        </div>
        <div class="index-menu-banner">
            <ul class="menu">
                <li>影讯&购票</li>
                <li>选电影</li>
                <li>电视剧</li>
                <li>排行榜</li>
                <li>分类</li>
                <li>影评</li>
                <li>2017年度榜单</li>
                <li>2017观影报告</li>
            </ul>
        </div>






        <div class="movie-info-banner">

<%
	ArrayList<Movieinfo> list = (ArrayList)request.getAttribute("list");
    for(int i=0;i<list.size();i++){
%>
    
    		 <div class="movie-info-small">
                <div class="content">
                    <a href="./selectmovie?movieInfo.moviename=<%=list.get(i).getMoviename() %>"><h1><%=list.get(i).getMoviename() %> <%=list.get(i).getType() %></h1></a>
                    <img src="<%=list.get(i).getPicture() %>" alt="">
                    <p>类型 ： <%=list.get(i).getType() %></p>
                    <p>日期 ： <%=list.get(i).getDate() %></p>
                    <p>地区 ： <%=list.get(i).getCountry() %></p>
                    <p>语言 ： <%=list.get(i).getLanguage() %></p>
                    <p>评分 ： <span class="score"><%=list.get(i).getAverage() %>分</span>
                    <p class="actor mockp">演员 ：<%=list.get(i).getActor() %></p>
                </div>
            </div>

<% 
    }
 %>


 


            </div>
        </div>
    </div>
</body>

</html>

