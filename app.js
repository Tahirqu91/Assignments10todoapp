var listitem = document.getElementById("listitem");

function addTodo(){
var todoitems = document.getElementById("todoitems");

// create li tag
var li = document.createElement('li')
li.setAttribute("class","li1")
var limesg = document.createTextNode(todoitems.value)

li.appendChild(limesg)

// create del button tag
var delbutton =document.createElement("button")
var delmesg = document.createTextNode(" Delete ")
delbutton.setAttribute("class","btn btn-info bton1")
delbutton.setAttribute("onclick","deleteTodo(this)")
delbutton.appendChild(delmesg)

// create edit button tag
var editbutton =document.createElement("button")
var editmesg = document.createTextNode(" Edit ")
editbutton.appendChild(editmesg)
editbutton.setAttribute("class","btn btn-info bton")
editbutton.setAttribute("onclick","editTodo(this)")
li.appendChild(editbutton)

li.appendChild(delbutton)
listitem.appendChild(li)
todoitems.value=""


}

function deleteTodo(g){

g.parentNode.remove()
}

function editTodo(h){
var edit = prompt("Enter update value",h.parentNode.firstChild.nodeValue)
h.parentNode.firstChild.nodeValue = edit;
    }


    function deleteAll(){
        listitem.innerHTML = ""
    }