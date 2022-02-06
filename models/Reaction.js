// const { Schema, model, Types } = require('mongoose');
// const dateFormat = require('../utlis/dateFormat');

// const ReactionSchema = new Schema({
//     reactionId: {
//         type: Schema.Types.ObjectId,
//         default: () => new Types.ObjectId()
//     },
//     reactionBody: {
//         type: String,
//         required: true
//     },
//     username: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         get: createdAtVal => dateFormat(createdAtVal)
//     }
// },
//     {
//         toJSON: {
//             getters: true,
//         },
//         // id: false,
//     }
// );

// const Reaction = model("Reaction", ReactionSchema)
// module.exports = ReactionSchema;
