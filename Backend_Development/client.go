// Date: 2024-03-06
// Author: Pogi Tangkad

package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type book struct {
	ID       string `json:"id"`
	Title    string `json:"title"`
	Author   string `json:"author"`
	Quantity int    `json:"quantity"`
}

const BASE_URL = "http://127.0.0.1:8080"

func get() {
	response, err := http.Get(BASE_URL + "/books")

	if err != nil {
		fmt.Println(err.Error())
		return
	}

	responseData, err := io.ReadAll(response.Body)

	if err != nil {
		fmt.Println(err.Error())
		return
	}

	var books []book
	json.Unmarshal(responseData, &books)
	fmt.Println(books)

}

func post() {
	postBody := book{ID: "5", Title: "Pogi's Book", Author: "Pogi Tangkad", Quantity: 33}
	bodyBytes, err := json.Marshal(&postBody)

	if err != nil {
		fmt.Println("Error")
		return
	}

	requestBody := bytes.NewReader(bodyBytes)

	resp, err := http.Post(BASE_URL+"/books", "application/json", requestBody)

	if err != nil {
		fmt.Println("Error")
		return
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error")
		return
	}
	s := string(body)
	fmt.Println(s)
}

func main() {
	get()
	post()
}
