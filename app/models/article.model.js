export default function ArticleModel(mongoose) {
    mongoose.model('article', mongoose.Schema({
        title: String,
        name: String,
        category: String,
        subject: String
    }, {timestamps: true}))
}