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




    
   

