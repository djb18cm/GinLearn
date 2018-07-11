package routers

import (
	. "GinLearn/apis"        //api部分
	. "GinLearn/controllers" //constroller部分
	. "GinLearn/middleware"
	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	router := gin.New()

	public := router.Group("")
	public.GET("/login", LoginController)
	public.POST("/login", LoginApi)

	authorized := router.Group("")
	authorized.Use(Auth)
	authorized.GET("/", IndexController)
	//router.GET("/", IndexController)
	return router
}
