
const tbody =document.querySelector("tbody")
fetch(` http://localhost:3000/products`)
.then((abc)=>abc.json())
.then(function(data){
    showUser(data)
    const xoa = document.querySelectorAll(".xoa")
    for(let btn of xoa){
        btn.addEventListener("click",function(){
            const id = btn.dataset.id
            return removee(id)
        })
    }
})

const showUser=function(data){
    tbody.innerHTML=data.map(function(data,index){
        return/*html*/`
        <tr>
        <td class="border-2 p-2 border-orange-200">${index+1}</td>
        <td class="border-2 p-2 border-orange-200">${data.name}</td>
        <td class="border-2 p-2 border-orange-200"><img src="${data.image}"></td>
        <td class="border-2 p-2 border-orange-200">
        <button class="xoa bg-red-200 rounded-md py-2 px-4 font-bold" data-id=${data.id}>Xóa</button>
        </td>
        </tr>
        `
    }).join('')
}
const removee = function(id){
    fetch(`http://localhost:3000/products/${id}`,{
        method:"DELETE"
    }).then(function(){
        confirm("bạn có muốn xóa ko")
    })
}

const addUser = function(){
    document.querySelector("body").innerHTML=/*html*/`
    <form class="p-4">
    <label for="">Nhập tên</label>
    <input type="text" id="name" class="border-2 border-amber-300 mb-10 "  placeholder="Nhập tên" required><br>
    <button id="submit" class="bg-amber-300 rounded-md py-2 px-4">thêm</button>
    </form>
    `
    document.querySelector("#submit").addEventListener("click",function(){
     alert("bạn đã thêm thành công")
        const add={
            "name": document.querySelector("#name").value
          
            
        }
        fetch(`http://localhost:3000/products`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(add)
        })
    })
}
document.querySelector("#btn-add").addEventListener("click",addUser)
