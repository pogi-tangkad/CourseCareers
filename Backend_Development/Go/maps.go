// Date: 2024-03-03
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

func main() {
	var mp map[string]int = map[string]int{"a": 1, "j":33}

	mp2 := map[string]int{"b":1, "c":12}
	fmt.Println(mp, mp2)

	mp3 := make(map[string]int)
	mp4 := map[string][]int{"d": {1,2,3}, "k": {2,4}}

	fmt.Println(mp3, mp4)

	mp4["asdf"] = []int{29265}
	fmt.Println(mp4)

	delete(mp4, "d")
	fmt.Println(mp4)
	
	keyArr := [3]string{"asdf", "k", "d"}

	for _, key := range keyArr {
		value, ok := mp4[key]
		fmt.Println(value, ok)
	}

	mp5 := map[uint]uint{}
	n := uint(100)

	for number := uint(1); number <= n; number++ {
		for d := uint(1); d <= 5; d++ {
			if number % d == 0 {
				mp5[d]++
			}
		}
	}
	fmt.Println(mp5)

}