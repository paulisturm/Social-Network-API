const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    //get users
    async getUsers (req, res) {
        try { 
        const users = await User.find();
        res.json(users);
        } catch (err) {
        res.status(500).json(err);
        }
    },
    //get a single user
    async getSingleUser(req, res) {
    try {
        const user = await User.findOne({ _id: req.params.userId })
            .select('-__v')
            .lean();

        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }

        res.json({
            user,
            thought: await thought(req.params.userId)
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    //create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //update user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }   
            );

        if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
          res.json(course);
        } catch (err) {
          res.status(500).json(err);
        }
        },
        //delete user
        async deleteUser(req, res) {
            try {
              const user = await User.findOneAndRemove({ _id: req.params.userId });
        
              if (!user) {
                return res.status(404).json({ message: 'No such user exists' })
              }
        
              res.json({ message: 'User successfully deleted' });
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },
};