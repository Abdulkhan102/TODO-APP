
// add to-do taks's:-
let push =document.querySelector('#push')
    push.onclick = function(){

// TRy-Catch code:-
//     if(document.querySelector('#new-task input').
// value.length == 0){.....
//         alert("Please Enter The Task !!!")
//     }else{

let taskn = document.querySelector('#tasks')
    taskn.innerHTML
        += `
            <div class ="task">
                <span id="taskname">
                    ${document.querySelector
                     ('#new-task input').value}
                 </span>
                      <button class="delete">
                      <i class="fa-solid fa-trash"></i>
                      </button>
            </div>
         `;
// For deleteing the task's :-
         let crnTsk = document.querySelectorAll(".delete");
         
         for(var i=0;i<crnTsk.length;i++)
         {
            crnTsk[i].onclick = function(){
            this.parentElement.remove();
            }
         }
         let task = document.querySelectorAll(".task");
         for(let i=0;i<task.length; i++){
            task[i].onclick = function(){
                this.classList.toggle('completed');//this is line-through code.
            }
         }

//  removing the task's to the palceholder:-
     document.querySelector("#new-task input").
     value =[]; // or "";

     }
// }
