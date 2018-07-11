package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

//首页
func IndexController(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		//"title": "GIN: Bootstrap布局页面",
	})
}
//登录页
func LoginController(c *gin.Context) {
	c.HTML(http.StatusOK, "login.html", gin.H{
		//"title": "GIN: Bootstrap布局页面",
	})
}
