const inputBox=document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");

function addTask(){
    if(inputBox.value ===''){
        swal("Vaccent Field!", "Please Write Your Task Name.", "error");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        SaveData()
    }
    inputBox.value = "";
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        removedel() 
        SaveData()
    }
    else if(e.target.tagName ==="SPAN"){
          e.target.parentElement.remove();
          SaveData();
    }
},false)

function SaveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");

}

showData();
function removedel() {
    if(e.target.classList.toggle("checked")) {
        span.innerHTML=" ";
    }
}

function clearTask(){
    if(listContainer.innerHTML===""){
        swal("Vaccent Field!", "Tasks Area is Empty.Please Make Your Task List.", "error");
     }
    else{
        
        listContainer.innerHTML= "ALL TASKS AER DELETED SUCCESSFULLY.MAKE NEW ONE AND CONTINEUE YOU JOURNEY!";
        localStorage.removeItem("data",listContainer.innerHTML);
        
        alert("To-Do-List is Cleared Successfully.\nHope!you have completed your today's whole Tasks.\n Make a new list and Continue your study.\nYou have to clear SSC at any cost.!! YOU CAN DO IT !!\n YOU HAVE TO DO IT FOR YOU PARENTS,DO HARD WORK FOR IT\n Definitely you will crack it.\n Make New List Right now now now.....\n You have to complete your 21 Days Challenge Given By GOLDEN ASO SIR !!!\n<May GOD wacth over you!==>DEEPAK SHARMA>");
    }
   

}






    
   

