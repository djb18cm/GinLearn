package database

import (
	"database/sql"
	_ "github.com/bmizerany/pq"
	"log"
)

var SqlDB *sql.DB

func init() {
	var err error
	SqlDB, err := sql.Open("postgres", "")
	if err != nil {
		log.Fatal(err.Error())
	}
	err = SqlDB.Ping()
	if err != nil {
		log.Fatal(err.Error())
	}
}
