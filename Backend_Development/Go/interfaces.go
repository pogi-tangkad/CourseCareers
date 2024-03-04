// Date: 2024-03-04
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

type Shape interface {
	getPerimeter() uint
}

type Triangle struct {
	a uint
	b uint
	c uint
}

type Square struct {
	w uint
}
func (t Triangle) getPerimeter() uint {
	return t.a + t.b + t.c
}

func (s Square) getPerimeter() uint {
	return 4 * s.w
}

func isEvenPerimeter(shape Shape) bool {
	return shape.getPerimeter() % 2 == 0
}

func main() {

	var s []Shape = []Shape{Triangle{2,3,6},Square{3}}
	fmt.Println(s)

	fmt.Println(s[0].getPerimeter())
	fmt.Println(s[1].getPerimeter())

	for _, shape := range s {
		fmt.Printf("%T: %d: %t\n", shape, shape.getPerimeter() ,isEvenPerimeter(shape))
	}

}
