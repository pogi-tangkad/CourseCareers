// Date: 2024-03-05
// Author: Pogi Tangkad

package main

import (
	"fmt"
	"time"
)


func runner(){
	time.Sleep(2 * time.Second)
	fmt.Println("run1")
}
func runner2(){
	time.Sleep(5 * time.Second)
	fmt.Println("run2")
}
func runner3(){
	time.Sleep(3 * time.Second)
	fmt.Println("run3")
}

func addCh(x int, y int, ch chan<- int, delay int){
	time.Sleep(time.Duration(delay) * time.Second)
	fmt.Println(x, "+", y)
	ch <- x + y
}

func addWait(x int, y int, ch chan<- int, delay int){
	time.Sleep(time.Duration(delay) * time.Second)
	fmt.Println(x, "+", y)
	ch <- x + y
}

func main() {
	go runner()
	go runner2()
	go runner3()
	
	ch := make(chan int)
	ch2 := make(chan int)
	go addCh(5, 9, ch, 5)
	go addCh(1, 2, ch2, 2)

	for i := 0; i < 2; i++{
		select {
		case x := <- ch:
			fmt.Println(x)
		case y := <- ch2:
			fmt.Println(y)
		}
	}

	ch3 := make(chan int)
	ch4 := make(chan int)
	go addWait(5, 9, ch3, 2)
	go addWait(1, 2, ch4, 8)


	j := <-ch3
	k := <-ch4

	fmt.Println(j, k)

	fmt.Println("done")

}
