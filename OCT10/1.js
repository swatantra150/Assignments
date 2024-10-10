const prompt = require('prompt-sync')();
class Node{
    constructor(data){
       this.data=data
       this.next=null
    }
}
const insertAthead=(head,data)=>{
const newNode=new Node(data)
 newNode.next=head
   return newNode
}
const insertAtTail=(head,data)=>{
    const newNode=new Node(data)
    if(head==null){
        return newNode
    }
    let tail=head
    while(tail.next!=null){
        tail=tail.next
    }
    tail.next=newNode
    return head
}
const displayList = (head) => {
    let current = head;
    let result = '';
    while (current) {
        result += current.data + ' -> ';
        current = current.next;
    }
    console.log(result + 'null');
};
const merge=(head1,head2)=>{
    if(head1==null){
        return head2
    }
    if(head2==null){
        return head1
    }
    let c=null
    if(head1.data>head2.data){
        c=head2
        c.next=merge(head1,head2.next)
    }
    else{
        c=head1
        c.next=merge(head1.next,head2)
    }
    return c
}
let head1 = null;
head1 = insertAthead(head1, 3);  // Insert 3 at the head
head1 = insertAthead(head1, 2);  // Insert 5 at the head
head1 = insertAthead(head1, 1);
displayList(head1);
let head2=null;
head2 = insertAthead(head2, 6);  // Insert 3 at the head
head2 = insertAthead(head2, 5);  // Insert 5 at the head
head2 = insertAthead(head2, 4);
displayList(head2)
let ans=merge(head1,head2)
displayList(ans)
let head3 = null;
head3 = insertAtTail(head3, 1);  // Insert 3 at the head
head3 = insertAtTail(head3, 2);  // Insert 5 at the head
head3 = insertAtTail(head3, 3);
displayList(head3);
let head4 = null;
head4 = insertAtTail(head4, 4);  // Insert 3 at the head
head4 = insertAtTail(head4, 5);  // Insert 5 at the head
head4 = insertAtTail(head4, 6);
displayList(head4);
let merged=merge(head3,head4)
displayList(merged)