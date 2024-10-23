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
const deleteLastNode=(head)=>{
    let del=head
    while(del.next!=null){
        del=del.next
    }
    let temp=head
    while(temp.next!=del){
        temp=temp.next
    }
    temp.next=del.next
    return head
}
let head1 = null;
head1 = insertAthead(head1, 3);  // Insert 3 at the head
head1 = insertAthead(head1, 2);  // Insert 5 at the head
head1 = insertAthead(head1, 1);
displayList(head1)
deleteLastNode(head1)
displayList(head1)