let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) 
{
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "finished";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
let finish = document.getElementsByClassName("finished");
for (let j = 0; j < finish.length; j++) 
{
    finish[j].onclick = function() 
  {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
let lists = document.querySelector('ul');
lists.addEventListener('click', function(ev) 
{
  if (ev.target.tagName == 'LI') 
  {
    ev.target.classList.toggle('checked');
  }
}, false);
function newTask() //main funtion
{
  let li = document.createElement("li");
  let tv=<HTMLInputElement>document.getElementById("myTasks");
  let TaskValue:string = tv.value;
  let input = document.createTextNode(TaskValue);
  li.appendChild(input);
  if (TaskValue == '') 
  {
    alert("You must write something!");
  } 
  else 
  {
    document.getElementById("myUL").appendChild(li);
  }
  let t =<HTMLInputElement>document.getElementById("myTasks");
  t.value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "finished";
  span.appendChild(txt);
  li.appendChild(span);
  for (let i = 0; i < finish.length; i++) 
  {
    let z = finish[i];
    z.onclick = function() 
    {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}