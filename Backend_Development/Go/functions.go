// Date: 2024-03-03
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

func add(num1 int, num2 int) int {
	return num1 + num2
}

func add2(num1 int, num2 int) (string, int) {
	return "=", num1 + num2
}

func callFunc(callable func(int)int) int{
	return callable(10)
}

func doubleNumber(num int) int{
	return num * 2
}

func getFunc(str string) func(string) string {
	return func(str2 string) string{
		return str + str2
	}
}

func sum(nums ...int)int{
	total := 0
	for _, num := range nums{
		total += num
	}
	return total
}

func sum2(nums ...int) (sumTotal int){
	for _, num := range nums{
		sumTotal += num
	}
	return
}

func main() {

	value := add(43, 19)
	fmt.Println(value)

	fmt.Println(add2(4, 2))

	fmt.Println(callFunc(doubleNumber))

	value2 := callFunc(func(x int) int {
		return x + 3
	})
	fmt.Println(value2)

	f1 := func(x int) int {
		return x/2
	}

	fmt.Println(callFunc(f1))

	f2 := getFunc("hello, ")
	fmt.Println(f2("world!"))
	value3 := f2("Pogi.")
	fmt.Println(value3)

	s1 := sum(3,12,881,1)
	fmt.Println(s1)

	s2 := sum([]int{1,3,55,1,0,1245}...)
	fmt.Println(s2)

	s3 := sum(4,5,2,8)
	fmt.Println(s3)



}
