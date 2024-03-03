// Date: 2024-03-03
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

func main() {
	// pointer
	// length
	// capacity

	arr := [5]int{1,8,663,17,95}
	sl := arr[1:4]
	fmt.Println(sl)
	sl[1] = 33
	fmt.Println(sl[1])
	fmt.Println(sl, len(sl), cap(sl))
	sl = sl[:4]
	fmt.Println(sl, len(sl), cap(sl))

	sl2 := []string{"hello", "world"}
	fmt.Println(sl2, len(sl2), cap(sl2))

	sl3 := []string{"hello", "world", "jimmy", "don", "billy"}
	fmt.Println(sl3, len(sl3), cap(sl3))

	for x := 0; x < 10; x++ {
		sl2 = append(sl2, "pogi")
		fmt.Println(sl2, len(sl2), cap(sl2))
	}

	sl4 := make([]int, 10, 33)
	fmt.Println(sl4, len(sl4), cap(sl4))

	test(sl3)
	fmt.Println(sl3)
}

func test(arr []string) {	//unlike arrays, the slice is changed
	arr[1] = "changed this"
}