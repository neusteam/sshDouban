﻿
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
    <script src="./js/util.js"></script>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
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
	if(list != null && list.size()>0){
	System.out.println(list.size());
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
	}else{
%>
				<div style="min-height: 200px;"><h3>无搜索结果</h3></div>
<%
	}
%>

                <div class="common-footer" style="float: left;">
                    <span class="fleft span-footer">© 5002－8102 fakedouban.com, all rights reserved</span>
                    <span class="fright span-footer"><a href="">关于豆瓣</a>
                    <a href="">在豆瓣工作</a>
                    <a href="">联系我们</a>
                    <a href="">免责声明</a>
                    <a href="">帮助中心</a>
                    <a href="">开发者</a>
                    <a href="">移动应用</a>
                    <a href="">豆瓣广告</a></span>
                </div>
 


            </div>
        </div>
    </div>
    <script src="./js/searchresult.js"></script>	
</body>

</html>

