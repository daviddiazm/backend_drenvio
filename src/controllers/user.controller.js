const User = require('../models/User')
const bcrypt = require ('bcrypt')

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if(!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.createUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    ...req.body,
    password: hashedPassword,
  });
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'usuario no encontrado' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'usuario no encontrado' });
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addProductUser = async (req, res) => {
  const {userId, productId} = req.body
  try {
    const user = await User.findById(userId)
    if ( ! user ) return res.status(404).json({ message: 'Usuario no encontrado' });

    user.products.addToSet(productId);
    await user.save();
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}