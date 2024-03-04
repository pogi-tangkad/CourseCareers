// Date: 2024-03-04
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

func change(x *int) {
	*x = 100
}

type Book struct {
	id int
	title string
}

func (b *Book) setTitle(title string) {
	b.title = title
}

func testeroni(pointerSlice *[]*int) []int {
	values := []int{}

	for _, value := range *pointerSlice {
		fmt.Println(value, " ", *value)
		values = append(values, *value)
	}

	return values
}

func main() {

	e := 2
	r := 4
	t := 8
	values := &[]*int{&e, &r, &t}

	fmt.Println(values, " ", &values, " ", *values)

	fmt.Println(testeroni(values))

	x := 0
	y := &x

	fmt.Println(x,y)
	fmt.Println(x, *y)

	*y = 3
	fmt.Println(x, *y)

	x = 9
	fmt.Println(x, *y)

	a := 10
	fmt.Println(a)
	change(&a)
	fmt.Println(a)

	b := Book{10, "Old"}
	fmt.Println(b)
	b.setTitle("New")
	fmt.Println(b)

	m := 33
	n := &m
	j := &n

	fmt.Println(m, n, j)
	fmt.Println(m, *n, *j)
	fmt.Println(m, *n, **j)



}
