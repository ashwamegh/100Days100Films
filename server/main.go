package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Hello, there!"))
}

func movieDetailsHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	url := fmt.Sprintf("https://apis.justwatch.com/content/titles/movie/%v/locale/en_IN?language=en", vars["id"])

	res, err := http.Get(url)

	if err != nil {
		log.Println(err)
		return
	}

	defer res.Body.Close()

	responseData, err := ioutil.ReadAll(res.Body)

	if err != nil {
		log.Println(err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(responseData)
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/health", helloHandler).Methods("GET")
	r.HandleFunc("/movie/{id}", movieDetailsHandler).Methods("GET")
	http.ListenAndServe(":8080", r)
}
