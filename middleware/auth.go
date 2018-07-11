package middleware

import (
	"github.com/gin-gonic/gin"
	jwt "github.com/dgrijalva/jwt-go"
)

func Auth(c *gin.Context){
	if(1 != 0){
		c.Redirect(302,"/login")
	}
}
func Token(c *gin.Context){
	jwt.DecodeSegment("sss")
}