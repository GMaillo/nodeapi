'use strict';

const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: process.env.SENGRID_USER,
      pass: process.env.SENGRID_PASS
    }
  });

  module.exports = transport;