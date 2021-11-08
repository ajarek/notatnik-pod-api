const Note = require('../../db/models/note')
const mysort = {createdAt:-1}
class NoteActions {
    async saveNote(req, res) {
        const title = req.body.title;
        const content = req.body.content;

        let note
        try{
         note = new Note({title,content})
        await note.save()
        }
        catch(err){
        return res.status(422).json({ message : err.message})
        }
        res.status(201).json(note)
    }
    async getAllNotes(req, res) {
        const doc = await Note.find({}).sort(mysort)
       
        res.status(200).json(doc)
       
    }


    async getNote(req, res) {
        const id = req.params.id
        const note = await Note.findOne({
            _id: id
        })
        res.status(200).json(note)
    }
    async updateNote(req, res) {
        const id = req.params.id
        const title = req.body.title;
        const body = req.body.content;
        const note = await  Note.findOne({_id:id})
        note.title=title
        note.content=body
        await note.save()
        res.status(201).json(note)
    }
    async deleteNote(req, res) {
        const id = req.params.id
        await Note.deleteOne({_id:id})
        res.sendStatus(204)
    }
}
module.exports = new NoteActions()