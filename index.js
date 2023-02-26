let count=0;
let countEl=document.getElementById("count-el");
function inc(){
    count+=1;
    countEl.textContent=count;
}
let saveEl=document.getElementById("save-el");
function save(){
    let entery=count+" - ";
    saveEl.textContent+=entery;
    countEl.textContent=0;
    count=0;
}

