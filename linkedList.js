class Node {
	constructor(value = null, next = null) {
		this.value = value;
		this.next = next;
	}
}


class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	prepend(value) {
		this.head = new Node(value, this.head);
		this.size++;

	}
	append(value) {
		let newNode = new Node(value);
		let current;

		// if the list has no value
		if (this.head === null) {
			this.head = newNode;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.size++;
	}
	listSize() {
		console.log(this.size);
	}

	listHead() {
		if (!this.head) return;
		else {
			let current = this.head;
			console.log(current.value)
		}
	}

	listTail() {
		let temp;
		if (!this.head) return;
		else {
			let current = this.head;
			while (current) {
				// temporally holds the value of the last node
				// while the current node holds only null value
				temp = current
				current = current.next
			}
			console.log(temp.value)
		}
	}
	elemAt(index) {
		if (index > this.size) return; // out of range
		if (!this.head) return; // list empty
		else {
			let current = this.head; // set the current at the head and start traversing
			let count = 0; // count the number loop cycle
			while (current) {
				if (index === count) {
					console.log(current.value);
					break; // break the program when the index hit the count
				}
				count++;
				current = current.next;
			}
		}
	}

	popping() {
		let temp; // used to hold the current state while traversing
		if (!this.head) return;
		else {
			let current = this.head;
			while (current) {
				temp = current
				current = current.next
			}
			current = temp;
			current.value = null;
			console.log(current.value);
		}
	}

	contains(element) {
		if (!this.head) return; // list empty
		else {
			let current = this.head; // set the current at the head and start traversing
			while (current) {
				if (current.value === element) {
					return true;
				}
				current = current.next;
			}
		}
	}

	find(element) {
		if (!this.head) return; // list empty
		else {
			let current = this.head; // set the current at the head and start traversing
			let count = 0; // count the number loop cycle
			while (current) {
				if (element === current.value) {
					return ('find at index ' + count); // break the program when the element hit its equivalent
				}
				count++;
				current = current.next;
			}
			return null
		}
	}

	printList() {
		let current = this.head;
		while (current) {
			console.log(current.value);
			current = current.next
		}
	}
}



const lList = new LinkedList();
console.log('____prepend____');
lList.prepend(100);
lList.prepend(200);
console.log('____append____');
lList.append(300);
lList.append(500);
console.log('____size____');
lList.listSize();
console.log('____head____');
lList.listHead();
console.log('____tail____');
lList.listTail()
console.log('____index at ____');
lList.elemAt(1);
console.log('____pop last ____');
lList.popping();

console.log('___ contains elem ____');
console.log(lList.contains(100));


console.log('___ find elem ____');
console.log(lList.find(300));

console.log('________________---')
lList.printList();
