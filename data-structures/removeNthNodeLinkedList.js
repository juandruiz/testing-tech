/*
19. Remove Nth Node From End of List (from LeetCode)

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head.next === null && n===1){
        return null;
    }
    let currentElement = head
    //counter will find the tail's position
    let counter = 0
    while(currentElement != null){
        currentElement = currentElement.next
        counter++
    }
    let nposition = counter - n + 1
    console.log(`counter is ${counter} nposition is ${nposition}`)
    let prev = null
    currentElement = head
    counter = 1
    while(currentElement != null){
        if(counter === nposition){
            if(prev === null){
                head = currentElement.next
            }
            else{
                prev.next = currentElement.next
                currentElement.next = null
            }
             break;
        }
        prev = currentElement
        currentElement = currentElement.next
        counter++
    }
   return head; 
};