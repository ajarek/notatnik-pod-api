const Note =require('../../db/models/note')

module.exports={
    saveNote(req,res){
    const createNote = async (data) => {
    try {
        const newNote = new Note(data)
        await newNote.save()
        console.log(newNote);
    } catch (error) {
        console.log(error);
    }
    res.send('Strona główna działa ')
}
createNote({
    title:'Kolacja',
    body: 'parówka,kanapki,pomidor'
})
}
}


