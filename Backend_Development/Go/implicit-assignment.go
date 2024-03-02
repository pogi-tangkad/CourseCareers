// Date: 2024-03-02
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

func main() {
	var x uint8 = 2	// explicit assignment
	fmt.Println(x)

	y := 2
	fmt.Println(y)

	z := uint8(7)

	fmt.Printf("%T \n", x)
	fmt.Printf("%T \n", y)
	fmt.Printf("%T \n", z)

	var number int32

	number = -10
	fmt.Println(number)

	number2 := uint32(number)
	fmt.Println(number2)

	number3 := 9999
	fmt.Println(number3)

	number4 := int8(number3)
	fmt.Println(number4)
} 
