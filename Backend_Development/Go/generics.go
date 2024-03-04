// Date: 2024-03-04
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

func addGeneric[T int | float64 | string](x T, y T) T {
	return x + y
}

type Number interface {
	int | float64 | string | uint
}

func addGeneric2[T Number](x T, y T) T {
	return x + y
}


func getValues[K comparable, V any](mp map[K]V) []V {
	values := []V{}

	for _, value := range mp {
		values = append(values, value)
	}
	return values
}

func main() {

	fmt.Println(addGeneric(1, 3))
	fmt.Println(addGeneric(4.1, 7.29))
	fmt.Println(addGeneric("Hello, ", "World!"))

	mp := map[string]int{"a": 3, "b": 8, "g": 7, "f": 5}
	values := getValues(mp)
	fmt.Println(values	)


	fmt.Println(addGeneric2("Evan", "escence"))
	fmt.Println(addGeneric2(3, 9))
}
