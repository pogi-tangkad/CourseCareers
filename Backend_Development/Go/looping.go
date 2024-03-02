// Date: 2024-03-02
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

func main() {
	for idx := 0; idx < 10; idx++ {
		fmt.Println(idx)
	}

	// no while loop

	x := 1
	for x < 10 {
		fmt.Println(x)
		x++
	}

	str := "Hello, World!"
	
	fmt.Println(str[3])			// actually the ascii in byte
	fmt.Println(string(str[3])) // convert ascii to char

	for _, char := range str {
		fmt.Printf("%c", char)
	}

	/*
	ASCII is 1 byte for 256 possible characters
	UTF-8 is 4 bytes
	*/

	fmt.Printf("\n \u2626 \n")
}
