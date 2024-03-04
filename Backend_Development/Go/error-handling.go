// Date: 2024-03-04
// Author: Pogi Tangkad

package main

import (
	"errors"
	"fmt"
)

func divideByZero(a int, b int) (int, error) {
	if b == 0 {		// no runtime panic
		return 0, errors.New("Division by 0")
	}
	return a / b, nil
}

func deferredFunc() {
	fmt.Println("defer")
	r := recover()
	if r == nil {
		fmt.Println("No error")
	} else{
	fmt.Println(r)
	}
}

func main() {
	//defer deferredFunc()
	//panic("cause a crash")
	//fmt.Println("run")
	fmt.Println(divideByZero(2, 0))

	result, err := divideByZero(4, 0)

	if err == nil {
		fmt.Println(result)
	}else{
		fmt.Println(err)
	}

	result2, err2 := divideByZero(4, 2)

	if err2 == nil {
		fmt.Println(result2)
	}else{
		fmt.Println(err2)
	}


}
