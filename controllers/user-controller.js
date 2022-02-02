const { Thought, User } = require('../models');

const userController = {
    addUser({ params, body }, res) {
        console.log(body);
        User.create(body)
            .then(dbUserData => {
                console.log(dbUserData);
                res.json(dbUserData);
            })
            .cath(err => res.json(err));
    },
}