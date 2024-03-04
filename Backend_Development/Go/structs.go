// Date: 2024-03-04
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

type Sport struct {
	name string
	position string
}
type Person struct {
	name string		//name only usable here, Name would be public
	Age uint		//ex. Age can be used if Person is exported
	f func(string) string
	favSports []Sport
}

// standard function style
func getName(p Person) string {
	return p.name
}

// method style
func (p Person) getName2() string {
	return p.name
}

func main() {
	p1 := Person{}
	fmt.Println(p1, p1.name, p1.Age)

	p1.name ="Pogi"
	p1.Age =44
	fmt.Println(p1, p1.name, p1.Age)

	p1.f = func(x string) string {
		return x + " is handsome."
	}

	p2 := Person{
		"Maganda", 
		46, 
		func(x string)string{return x +" is sexy."},
		[]Sport{{"Basketball", "Center"}},
	}
	fmt.Println(p2, p2.name, p2.Age)

	fmt.Println(getName(p1))
	fmt.Println(getName(p2))

	fmt.Println(p1.f(p1.name))
	fmt.Println(p2.f("Marilou"))

	fmt.Println(p1.getName2())

	p1.favSports = []Sport{{"Soccer", "Center"}, {"Racing", "Driver"}}

	fmt.Println(p1.favSports)
}
