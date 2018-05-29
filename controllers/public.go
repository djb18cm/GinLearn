package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

/**内容页面**/
func IndexController(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{})
}
