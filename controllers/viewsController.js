const Booking = require('../models/bookingModel');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const Tour = require('./../models/tourModel');
const catchasync = require('./../utils/catchAsync');

exports.getOverview = catchasync(async (req, res, next) => {
  const tours = await Tour.find();

  res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});

exports.getTour = catchasync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review user rating'
  });

  if (!tour) return next(new AppError('There is no tour with that name.', 404));

  res.status(200).render('tour', {
    title: tour.name,
    tour
  });
});

exports.login = catchasync(async (req, res, next) => {
  res.status(200).render('login', {
    title: 'Login page'
  });
});

exports.getAccount = catchasync(async (req, res, next) => {
  res.status(200).render('account', {
    title: 'Your account'
  });
});

exports.getMyTour = catchasync(async (req, res, next) => {
  const bookings = await Booking.find({ user: req.user.id });

  const tourIDs = await bookings.map(el => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIDs } });

  res.status(200).render('overview', {
    title: 'My tours',
    tours
  });
});

exports.updateUserData = catchasync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email
    },
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser
  });
});
