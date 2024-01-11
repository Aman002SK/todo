
document.querySelector("#click").onclick = function(){
    if(document.querySelector("#newtask input").value.length==0){
        alert("please Enter a Task")
    }
    else{
       
        document.querySelector("#tasks").innerHTML += `

        <div class="container">
        <span id="newtask">
        ${document.querySelector("#newtask input").value}
        </span>
        <button class="edit">Edit</button>
            <button id="click" class="delete">Delete</button>
        </div>
        
          `

          var curent_task = document.querySelectorAll(".delete");
          for(let i =0;i<curent_task.length;i++){
            curent_task[i].onclick =function(){
                this.parentNode.remove()
            }
          }
          var edit_task = document.querySelectorAll(".edit");
          for(let i=0; i<edit_task.length; i++)
          {
            edit_task[i].onclick=function(){
                
                var listItem = this.parentNode;
                var spanElement = listItem.querySelector("span");
                
                var newText = prompt("Edit task" , spanElement.textContent)

                if(newText !==null){
                    spanElement.textContent =newText;
                }
            }
          }
          
    }
}