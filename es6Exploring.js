//Step-1:
document.getElementById("btn-1").addEventListener('click',function(){
    // console.log('btn-1 clicked');
    const friends = document.getElementsByClassName("friends");
    // console.log(friends);
    // console.log(typeof friends);
    for(const friend of friends){
        // console.log(friend);
        // console.log(typeof friend);
        friend.style.backgroundColor = 'lightgray';
    }
   
})

//Step-2:
document.getElementById("btn-2").addEventListener("click",function(){
    // console.log("btn-2 clicked");
    const friend = document.getElementById("friend-2");
    // console.log(friend);
    friend.style.backgroundColor = 'seagreen';
    friend.style.color = 'white';
})

//Step-3:
document.getElementById("btn-3").addEventListener("click",function(){
    // console.log("btn-3 clicked");
    const divContainer = document.getElementById("divContainer");
    // console.log(divContainer);
    const div = document.createElement("div");
    div.classList.add("friends");
    div.innerHTML =`
    <h3>New friends added</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    `;
    divContainer.appendChild(div);
})