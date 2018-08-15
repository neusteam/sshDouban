package com.ycj.web;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.ycj.dao.Users;
import com.ycj.service.UserService;

public class UserAction extends ActionSupport{
	@Autowired
	private UserService  userService;
	private Users user;
	public Users getUser() {
		return user;
	}
	public void setUser(Users user) {
		this.user = user;
	}
	public String register(){
		System.out.println(user.getUsername());
		System.out.println(user.getPassword());
		List<Users> list=this.userService.findUser(this.user.getUsername());
		if(list.size()!=0){
			return "fail";
		}
		else{
			user.setStatus(1);
			this.userService.addUser(this.user);
			ActionContext.getContext().put("msg", "注册成功！");
			return SUCCESS;
		}
	}
	public String updateUser(){
		//System.out.println(user.getUsername());
		List <Users> list=this.userService.findUser(this.user.getUsername());
		//System.out.println(list.toString());
		if(list.size()!=0){
			user.setId(list.get(0).getId());
			user.setUsername(list.get(0).getUsername());
			user.setPassword(list.get(0).getPassword());
			user.setStatus(1);
			user.setSex(user.getSex());
			user.setPhonenumber(user.getPhonenumber());
			user.setEmail(user.getEmail());
			user.setCity(user.getCity());
			user.setBirth(user.getBirth());
			user.setUrl(list.get(0).getUrl());
			//System.out.println(user.toString());
			this.userService.updateUser(this.user);
			return "fail";
		}
		else{
			return SUCCESS;
		}
	}
	
  public String userLogin(){
	 List<Users> list=this.userService.findUser(this.user.getUsername());
	  if (list.size()>0){
		  if(list.get(0).getPassword().equals(user.getPassword())&&1==list.get(0).getStatus()){
			  HttpServletResponse response=ServletActionContext.getResponse();
			  HttpSession session= ServletActionContext.getRequest().getSession();
		  	session.setAttribute("user",user.getUsername());
		  	Cookie cookie=new Cookie("username",user.getUsername());
			cookie.setMaxAge(3000);
        	cookie.setPath("/");
        	response.addCookie(cookie);
			  return SUCCESS;
		  }	  else{
			  return "fail";
		  }
	  }
	  else{
		  return "fail";
	  }

  }
  public String adminLogin(){
	  List<Users> list=this.userService.findUser(this.user.getUsername());
		 
	  System.out.println("信息："+list.toString());
	  if (list.size()>0){
		  if(list.get(0).getPassword().equals(user.getPassword())&&2==list.get(0).getStatus()){
			  
			  HttpSession session= ServletActionContext.getRequest().getSession();
		  	session.setAttribute("user",user.getUsername());
			
			  return SUCCESS;
		  }	  else{
			  return "fail";
		  }
	  }
	  else{
		  return "fail";
	  }
  }
   public String userInfo() throws IOException{
	   HttpServletRequest request=ServletActionContext.getRequest();
		 request.setCharacterEncoding("UTF-8");
	   List<Users>list=this.userService.userInfo(this.user.getUsername());
	   if(list.size()>0){
		   ServletActionContext.getRequest().setAttribute("username",list.get(0).getUsername());
		   ServletActionContext.getRequest().setAttribute("sex",list.get(0).getSex());
		   ServletActionContext.getRequest().setAttribute("phonenumber",list.get(0).getPhonenumber());
		   ServletActionContext.getRequest().setAttribute("email",list.get(0).getEmail());
		   ServletActionContext.getRequest().setAttribute("city",list.get(0).getCity());
		   ServletActionContext.getRequest().setAttribute("birth",list.get(0).getBirth());
		   ServletActionContext.getRequest().setAttribute("url",list.get(0).getUrl());
		   return SUCCESS;
		  }
	   else{
		   return "fail";
	   }
   }
  public String findAllUser(){
	  List<Users> list=this.userService.findAll();
	  System.out.println("信息："+list.toString());
	  return SUCCESS;
  }
}
