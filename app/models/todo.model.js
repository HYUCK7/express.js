export default function TodoModel(mongoose) {
    mongoose.model('todo', mongoose.Schema({
        userid: String,
        task: String,
        completed: String

    }, {timestamps: true}))
}