// Date: 2024-03-07
// Author: Pogi Tangkad

package main

import (
	"fmt"
)

type Node[T any] struct {
	next  *Node[T]
	prev  *Node[T]
	value T
}

type LinkedList[T any] struct {
	head   *Node[T]
	length uint
}

func (ll *LinkedList[T]) index(idx uint) (T, bool) {
	var badVal T
	if ll.length == 0 || idx > ll.length-1 {
		return badVal, false
	}

	n := ll.head
	for i := uint(0); i < idx; i++ {
		n = n.next
	}
	return n.value, true
}

func (ll *LinkedList[T]) append(value T) {
	ll.length++
	if ll.length == 1 {
		ll.head = &Node[T]{}
		ll.head.next = ll.head
		ll.head.prev = ll.head
		ll.head.value = value
		return
	}
	nn := &Node[T]{ll.head, ll.head.prev, value}
	ll.head.prev.next = nn
	ll.head.prev = nn
	return
}

func (ll *LinkedList[T]) pop() T {
	var pVal T
	if ll.length > 1 {
		pVal = ll.head.prev.value
		ll.head.prev = ll.head.prev.prev
		ll.head.prev.next = ll.head
		ll.length--

	}
	if ll.length == 1 {
		pVal = ll.head.value
		ll.head = &Node[T]{}
		ll.length--
	}
	return pVal

}

func (ll *LinkedList[T]) printList() {
	n := ll.head
	for i := uint(0); i < ll.length; i++ {
		fmt.Println(i, " = ", n.value)
		n = n.next
	}
}

func main() {
	ll := LinkedList[int]{}
	ll.index(0)
	ll.pop()
	ll.append(1)
	ll.printList()
	ll.pop()
	ll.printList()
	fmt.Println(ll.head, ll.length)

	ll.append(21)
	ll.append(8)
	ll.append(3)
	ll.append(22)
	ll.append(38)
	ll.append(19)
	ll.printList()

	ll.pop()
	ll.pop()
	fmt.Println("Pop twice")
	ll.printList()
	ll.pop()
	fmt.Println("Pop once")
	ll.printList()
	ll.append(33)
	fmt.Println("Append value 33")
	ll.printList()

	fmt.Println("Index 2:")
	fmt.Println(ll.index(2))
	fmt.Println("Index 0:")
	fmt.Println(ll.index(0))
	fmt.Println("Index: 11 = ")
	fmt.Println(ll.index(11))
	fmt.Println("Index: 3 = ")
	fmt.Println(ll.index(3))
	fmt.Println("Index: 4 = ")
	fmt.Println(ll.index(4))

}
