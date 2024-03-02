// Date: 2024-03-02
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

func main() {

	x := uint(6)
	y := 10
	z := int(x) < y

	fmt.Println(z)

	m := x < uint(y)
	fmt.Println(m)

	n := 3
	p := x < uint(n)
	fmt.Println(p)

	if y < 33 {
		fmt.Println("Less than.")
	} else {
		fmt.Println("not less")
	}

}
