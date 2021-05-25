// Create a "close" button and adds it to each task
let myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) //scans ul for each li 
{
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "finished";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a x button to hide the current list item 
let finished = document.getElementsByClassName("finished");
for (j = 0; j < finished.length; j++) //goes though each span
{
  finished[j].onclick = function() 
  {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(event) 
{
  if (event.target.tagName === 'LI') 
  {
    event.target.classList.toggle('checked');
  }
}, false);
//main funtion... where the magic happens
function newTask() 
{
  let li = document.createElement("li");
  let TaskValue = document.getElementById("myTasks").value;
  let input = document.createTextNode(TaskValue);
  li.appendChild(input);
  if (validating())
  {
    document.getElementById("myUL").appendChild(li);//if user has a task adds it to the todo tasks if its valid
  }
  document.getElementById("myTasks").value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "finished";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < finished.length; i++) //scans though each span in div ul..."myUL"
  {
    finished[i].onclick = function() 
    {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
  //checks unser input to see if valid.
  function validating()
  {
    if (parseInt(TaskValue))
    {
      alert("You cant just enter a number");
      return false;
    }
    if (TaskValue == ''||TaskValue.trim()=="")//can not be empty space or blank
    {
      alert("You must write something!");
      return false;
    }
    return true;
  } 
}