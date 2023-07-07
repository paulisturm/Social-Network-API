const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId').get(getSingleUser).put(updateUser);

router.route('/:id/friends/:friendID').post(addFriend);

router.route('/:id/friends/:friendID').delete(removeFriend);

module.exports = router;
