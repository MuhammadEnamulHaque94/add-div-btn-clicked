//Step-1:
document.getElementById("btn-1").addEventListener('click',function(){
    const friends = document.getElementsByClassName("friends");
    for(const friend of friends){
        friend.style.backgroundColor = 'lightgray';
    }
   
})

//Step-2:
document.getElementById("btn-2").addEventListener("click",function(){
    const friend = document.getElementById("friend-2");
    friend.style.backgroundColor = 'seagreen';
    friend.style.color = 'white';
})

//Step-3:
document.getElementById("btn-3").addEventListener("click",function(){
    const divContainer = document.getElementById("divContainer");
    const div = document.createElement("div");
    div.classList.add("friends");
    div.innerHTML =`
    <h3>New friends added</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    `;
    divContainer.appendChild(div);
})