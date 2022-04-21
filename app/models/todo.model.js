export default function TodoModel(mongoose) {
    const todoSchema = mongoose.Schema(
        {   userid: String,
            task: String,
            completed: String
        }, { timestamps: true}
    )
    return mongoose.model('todo', todoSchema)
}