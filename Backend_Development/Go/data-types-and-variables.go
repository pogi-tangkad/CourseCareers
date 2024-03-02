// Date: 2024-03-02
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

func main() {
	var x string = "Hello, World!"
	fmt.Println(x)

	var y uint32 = 8888888
	fmt.Println(y)

	var z uint8 = 255
	fmt.Println(z)

	const a rune = 'a'
	fmt.Println(a)

	const A rune = 'A'
	fmt.Println(A)

	const g byte = 'a'
	fmt.Println(g)

	fmt.Println(a == rune(g))

	const h string = "a"

	fmt.Println(h == string(g))
}
