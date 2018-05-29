package routers

import (
	. "GinLearn/controllers" //constroller部分
	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	router := gin.Default()
	router.GET("/", IndexController)
	return router
}
