import User from '../models/User.js';

// ── CREATE ───────────────────────────────────────────
export const createUser = async (req, res, next) => {
  try {
    const { name, email, password, gender } = req.body;

    // Check for duplicate email
    const existing = await User.findOne({ email });
    if (existing) {
      const err = new Error('A user with this email already exists');
      err.status = 409;
      return next(err);
    }

    const user = await User.create({ name, email, password, gender });
    res.status(201).json({ data: user, message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

// ── READ ALL ─────────────────────────────────────────
export const readUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json({ data: users, count: users.length, message: 'Users fetched successfully' });
  } catch (error) {
    next(error);
  }
};

// ── READ ONE ─────────────────────────────────────────
export const readUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      const err = new Error('User not found');
      err.status = 404;
      return next(err);
    }
    res.status(200).json({ data: user, message: 'User fetched successfully' });
  } catch (error) {
    next(error);
  }
};

// ── UPDATE ───────────────────────────────────────────
// Fix: use req.params.email to find, req.body to update
export const updateUser = async (req, res, next) => {
  try {
    const { email } = req.params;
    const updates = req.body;

    // Prevent email from being changed via updates
    delete updates.email;

    const user = await User.findOneAndUpdate(
      { email },
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!user) {
      const err = new Error('User not found');
      err.status = 404;
      return next(err);
    }

    res.status(200).json({ data: user, message: 'User updated successfully' });
  } catch (error) {
    next(error);
  }
};

// ── DELETE ───────────────────────────────────────────
// Fix: added next to function signature
export const deleteUser = async (req, res, next) => {
  try {
    const deleted = await User.findOneAndDelete({ email: req.params.email });
    if (!deleted) {
      const err = new Error('User not found');
      err.status = 404;
      return next(err);
    }
    res.status(200).json({ data: deleted, message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};
