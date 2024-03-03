// Date: 2024-03-03
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

func main() {
	var arr [2]int
	var arr2 [3]int
	fmt.Printf("%T : %T\n", arr, arr2)

	arr3 := [5]int{1,2,3,4,5}

	fmt.Println(arr3)

	arr4 := [3][2]int{{1,2}, {3,4}, {5,6}}
	fmt.Println(arr4)

	arr5 := [...]string{"dog", "cat", "monkey", "eagle"}
	fmt.Println(arr5)

	arr6 := [...]int {3,2,1,4}
	arr6[2] = 9
	fmt.Println(arr6)

	arr7 := [...][2]int{{3,1},{4,7},{8,3},{3,9}}
	arr7[3] = [2]int{5,5}
	fmt.Println(arr7)

	for i, value := range arr6 {
		fmt.Println(i, value)
	}

	for j, nested := range arr7 {
		for k, value := range nested {
			fmt.Println(j,k,value)
		}
	}

	test(arr7)
	fmt.Println(arr7)

	var arr9 [3]int = [3]int{5,5,5}
	fmt.Println(arr9)
}


func test(arr[4][2]int) {
	arr[0] = [2]int{100,100}
	fmt.Println(arr)
}