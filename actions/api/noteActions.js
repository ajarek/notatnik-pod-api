const Note = require('../../db/models/note')

class NoteActions {
    saveNote(req, res) {
        //    const newNote=new Note({
        //        title:'Zrobić zakupy',
        //        body:'kawa,herbata,cukier'
        //    })
        //    newNote.save().then(()=>{
        //        console.log(('notatka została zapisana'));
        //    })
        const title = req.body.title;
        const body = req.body.body;
        res.send('Notatka została stworzona.Tytuł: '+title+' Treść: '+body)
    }
    getAllNotes(req, res) {
        res.send('API działa')
    }
    getNote(req, res) {
        res.send('Info o notatce')
    }
    updateNote(req, res) {

        res.send('Notatka została zaktualizowana')
    }
    deleteNote(req, res) {
        const id = req.params.id
        res.send('Notatka została usunięta. ID:' + id)
    }
}
module.exports = new NoteActions()