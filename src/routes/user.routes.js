const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)

router.post('/', userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)


// pude haber utilizado la url para pedor los id como en las otras consulatas
// pero los id pueden ser tan extensos y en la url hay un limite de caracteres
router.post('/aniadir_producto', userController.addProductUser)


module.exports = router