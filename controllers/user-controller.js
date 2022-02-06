const { User } = require('../models');
// const { db } = require('../models/Thought');

const userController = {
    //create new user
    addUser({ params, body }, res) {
        console.log(body);
        User.create(body)
            .then(dbUserData => {
                console.log(dbUserData);
                res.json(dbUserData);
            })
            .cath(err => res.json(err));
    },

    //Get all users
    getAllUsers(req, res) {
        User.find({})
            //populate thoughts
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            });

    },

    getUserById({ params, body }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })

    },
    //update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    //delete user by id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    //delete friend
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then(dbUserData => res.json(dbUserData))
            .cath(err => res.json(err));
    },
    //add friend
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' }); w
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
};

module.exports = userController;