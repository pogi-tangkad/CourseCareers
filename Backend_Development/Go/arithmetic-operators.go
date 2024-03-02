// Date: 2024-03-02
// Author: Pogi Tangkad

package main

import (
	"fmt"
	"math"
	"strconv"
)

func main() {
	x := 7
	y := 9
	z := x + y
	fmt.Println(z)

	z = y / x
	fmt.Println(z) // integer division

	m := float64(y) / float64(x)
	fmt.Println(m)

	n := string(33)
	fmt.Println(n)

	q := fmt.Sprint(y)
	fmt.Println(q)

	fmt.Println(math.Min(33, 66))
	fmt.Println(math.Sqrt(64))

	str := "2524"

	fmt.Println(strconv.Atoi(str))

	j, _ := strconv.Atoi(str)

	fmt.Println(j)
}
