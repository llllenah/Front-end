todo = []
let id = 0
function addToDo() {
    todo.push($('.task-input').val())
    $('.task-input').val('');

    id = todo.length-1
    $(".list").prepend(`
    <li class="list__item" id="li${id}">
        <input type="checkbox" class="list__item-checkbox" id="checkbox${id}">
        ${todo[id]}
    </li>`) 

    $("#checkbox"+id).click(
        (e) => {
        numbertodo = e.target.id.replace(/\D/g, '')
        $("#li"+numbertodo).toggleClass("list__item_done")
        }
    )
}

$(".create-task-btn").click(addToDo)    
