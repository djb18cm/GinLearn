package apis

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

//登录页
func LoginApi(c *gin.Context) {
	c.HTML(http.StatusOK, "login.html", gin.H{
		//"title": "GIN: Bootstrap布局页面",
	})
}

