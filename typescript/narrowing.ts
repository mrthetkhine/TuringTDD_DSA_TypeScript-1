function order(id:number | string){
    if(typeof id === "string")
    {
        console.log('ID ',id.toLowerCase());
    }
    else
    {
        console.log('ID ',id.toFixed(2));
    }
}
order('12Hello');
order(12.34);