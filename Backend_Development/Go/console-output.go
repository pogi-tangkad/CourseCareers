// Date: 2024-03-02
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

func main() {
	x := false
	fmt.Println("Hello, World!", 2, x)

	fmt.Printf("type: %T, value: %v \n", x)

	y := 6.9876
	fmt.Printf("\" %10.2f %%\n", y)

	z := fmt.Sprintf("Hello, %v\n", y)

	fmt.Println(z + z + z)
}
