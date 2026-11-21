export default class Stack {
    items:number[] =[];
    top = -1;

    push(item:number)
    {
        this.top++;
        this.items[this.top] =item;
    }
    pop()
    {
        return this.items[this.top--];
    }
    size()
    {
        return this.items.length;
    }
}