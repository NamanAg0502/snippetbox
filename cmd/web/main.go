package main

import (
	"log"
	"net/http"
)

func main() {
	// initialize servermux(express/router) to serve handlers
	mux := http.NewServeMux()

	// defining routes and handlers
	mux.HandleFunc("/", home)
	mux.HandleFunc("/snippet/view", snippetView)
	mux.HandleFunc("/snippet/create", snippetCreate)

	// server initialization
	err := http.ListenAndServe(":4000", mux)
	if err != nil {
		log.Fatal("Error listening to server: ", err)
	}
}
