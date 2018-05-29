package main

import (
	db "GinLearn/database"
	routers "GinLearn/routers"
)

func main() {
	//数据库
	defer db.SqlDB.Close()

	//路由部分
	router := routers.InitRouter()

	//静态资源
	router.Static("/static", "./static")

	//运行的端口
	router.Run(":8000")

}
