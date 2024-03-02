// Date: 2024-03-02
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

func main() {
		a := 1

		switch a {
		case 1:
			fmt.Println("one")
			fallthrough
		case 2:
			fmt.Println("two")
			fallthrough
		default:
			fmt.Println("default")
		}

		switch {
		case a < 2:
			fmt.Println("one")
		case a > 2:
			fmt.Println("two")
			fallthrough
		default:
			fmt.Println("default")
		}

		str := "h"

		switch str {
		case "g", "h", "i", "j":
			fmt.Println("is good")
		default:
			fmt.Println("meh")

		}
}
