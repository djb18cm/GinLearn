package database

import (
	"database/sql"
	_ "github.com/mattn/go-sqlite3"
	"log"
)

var SqlDB *sql.DB

func init() {
	var err error
	SqlDB, err = sql.Open("sqlite3", "./sqlite.db")
	if err != nil {
		log.Fatal(err.Error())
	}
	err = SqlDB.Ping()
	if err != nil {
		log.Fatal(err.Error())
	}
}
