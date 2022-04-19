module.exports = mongoose => {
    return mongoose.model(
        'article',
        mongoose.Schema(
            {
                title: String,
                name : String,
                category : String,
                subject: String
            }, { timestamps : true}
        )
    )
}