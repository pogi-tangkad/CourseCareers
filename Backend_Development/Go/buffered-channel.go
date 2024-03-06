// Date: 2024-03-06
// Author: Pogi Tangkad

package main

import (
	"fmt"
	"sync"
)


func r(ch chan bool){
	<-ch
}

type Counter struct {
	value int
	lock sync.Mutex
}

func countCh(counter *Counter, ch chan<- bool){
	counter.lock.Lock()
	defer counter.lock.Unlock()
	counter.value++
	fmt.Println(counter.value)
	ch <- true
}

func countWg(counter *Counter, wg *sync.WaitGroup){
	counter.lock.Lock()
	defer counter.lock.Unlock()
	counter.value++
	fmt.Println(counter.value)
	wg.Done()
}

func main() {
	// ch := make(chan bool, 2)
	// go r(ch)
	// go r(ch)
	// ch <- true
	// ch <- true


	// ch <-true
	// <-ch
	// fmt.Println("Done")

	counter := Counter{}

	ch := make(chan bool)

	numOfRoutines := 20

	for i := 0; i < numOfRoutines; i++ {
		go countCh(&counter, ch)
	}

	for i := 0; i < numOfRoutines; i++ {
		<-ch
	}

	wg := sync.WaitGroup{}
	wg.Add(numOfRoutines)

	for i := 0; i < numOfRoutines; i++ {
		go countWg(&counter, &wg)
	}

	wg.Wait()
}
