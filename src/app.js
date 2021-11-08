const feedDisplay = document.querySelector('#feed')
const title = document.querySelector('#title')
const desc = document.querySelector('#desc')

  

async function displayNote(){
const res = await fetch("http://localhost:3000/api/notes")
const notes = await res.json()
notes.forEach(note => {
      
      const data=` <div class="card my-3 "  >
      <div class="card-body my-2" >
      <h5 class="card-header ">${note.title}</h5>
      <p class="card-text  ">${note.content}</p>
      
      <button type="button" id="${note._id}" class="btn fiolet text-light" onclick="editNote(event)">edytuj</button>
      <button type="button" id="${note._id}" class="btn red text-light " onclick="deleteNote(event)">usuń</button>
      </div>
      </div>`
      feedDisplay.innerHTML += data
    })
    
}
displayNote()

const form = document.querySelector('form')

 function logSubmit(e){
  e.preventDefault()
  const title = document.querySelector('input[name="title"]').value
  const content = document.querySelector('input[name="desc"]').value
  const data = {
    title: title,
    content: content
  }
  fetch('http://localhost:3000/api/notes', {
  method: 'POST', 
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
  
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data)
})
.catch((error) => {
  console.error('Error:', error)
})
 location.reload()
}
form.addEventListener('submit', logSubmit)




 async function deleteNote(e){
  const _id=  e.target.id
  
    
  await fetch(`http://localhost:3000/api/notes/${_id}`, {
  method: 'DELETE', 
  
 })

.then(data => {
  console.log('Delete Success:', data)
})
.catch((error) => {
  console.error('Error:', error)
})

 location.reload()
}


async function editNote(e){
 
  const form = document.querySelector('#form')
  const wrap = document.querySelector('.wrap')
  const _idn=  e.target.id
  
  
form.style.display = 'none'
  
  const res =await fetch(`http://localhost:3000/api/notes/${_idn}`)
  
  const notes = await res.json()
 
    title.value = notes.title
    desc.value = notes.content 
   const div=document.createElement('div')
   div.innerHTML=
   `<form class="bg-light p-3" method="post" id="form1"  >
    <div class="mb-3">
        <label for="title" class="form-label">Tytuł</label>
        <input type="text" value="${ title.value}" class="form-control" id="title1" name="title1" >
    </div>
    <div class="mb-3">
        <label for="desc" class="form-label">Opis</label>
        <input type="text" value="${ desc.value}" class="form-control" id="desc1" name="desc1">
    </div>
    <button type="button" id=${_idn} class="btn green text-light kot" onclick="changeSubmit(event)">Zapisz zmiany</button>
</form>`
    wrap.append(div)

}

function changeSubmit(e){
  e.preventDefault()
  const idBtn = document.querySelector('button.kot').id
  const title = document.querySelector('input[name="title1"]').value
  const content = document.querySelector('input[name="desc1"]').value
  
  
  const data = {
    title: title,
    content: content
  }
  
  fetch(`http://localhost:3000/api/notes/${idBtn}`, {
  method: 'put', 
  body: JSON.stringify(data),
  
  headers: {
    'Content-Type': 'application/json',
  },
  
})
.then(response => response.json())
.then(data => {
  console.log('Success update:', data)
})
.catch((error) => {
  console.error('Error:', error)
})
 location.reload()
 
}




