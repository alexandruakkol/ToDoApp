var ids = [];
var complCont = document.querySelector('.completedContainer');

//build completed task
function complete(id,date){
    let completeObj = document.createElement('div');
    completeObj.style = `id:${id}`;
    completeObj.classList.add('completed');
    let titleObj = document.createElement('h1');
    titleObj.classList.add('projectTitle');
    titleObj.textContent = id;
    complCont.appendChild(completeObj);
    completeObj.appendChild(titleObj);
    dateDiv = document.createElement('div');
    dateDiv.classList.add('dateDiv');
    dateDiv.textContent = date;
    completeObj.appendChild(dateDiv);
}

function Project(title){
    //add title & own div
    this.title = title;
    ids.push(title);
    newProject = document.createElement('div');
    newProject.classList.add('project');
    newProject.id = title;
    projectTitle = document.createElement('h1');
    projectTitle.classList.add('projectTitle');
    projectTitle.textContent = title;
    document.querySelector('.projectContainer').appendChild(newProject);
    newProject.appendChild(projectTitle);

    //add Date
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const today = new Date();
    let mth = month[today.getMonth()];
    this.date = mth+'-'+today.getDate()+ " "+today.getHours() + ":" + today.getMinutes();
    dateDiv = document.createElement('div');
    dateDiv.classList.add('dateDiv');
    dateDiv.textContent = this.date;
    newProject.appendChild(dateDiv);
    //add doubleclick for completion
    newProject.addEventListener('dblclick', function (){
        complete(this.id, this.querySelector('div').textContent);
        this.remove();
        ids.splice(ids.indexOf(this.id),1);
    });
}

doneTab = document.querySelector('#doneTab');
doneTab.addEventListener('click', function(){complCont.style = "display:grid;"});
notesTab = document.querySelector('#notesTab');
notesTab.addEventListener('click', function(){complCont.style = "display:none;"});
todoTab = document.querySelector('#todoTab');


newBtn = document.querySelector('#NPButton');
inputField = document.querySelector('#newProject');
newBtn.addEventListener('click', function(){
    if(inputField.value){
        
        if(ids.includes(inputField.value)){
            alert("You have already entered this task.");
            
        }else{
            if(isNaN(inputField.value.charAt(0))){
                new Project(inputField.value);}
            else alert("Task cannot start with a number")}}
      
    

});

