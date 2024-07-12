const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT=process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/",express.static(path.join(__dirname, "client/build")));
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "client/build")));
}
app.listen(PORT, () => console.log(`Server started at ${PORT}`));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build/index.html'));
// });
console.log(__dirname);
// Route to get all accommodation details
app.get('/api/accommodations', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM accommodations');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//to get all user details 
// Route to get all user details

// Route to get all user details
app.get('/api/allusers', async (req, res) => {
try {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
});
// Route to get a single user by ID
app.get('/api/users/:id', async (req, res) => {
try {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);

  if (result.rows.length > 0) {
    res.json(result.rows[0]);
  } else {
    res.status(404).json({ msg: `User with ID ${id} not found` });
  }
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
});
// Route to insert a new user
// app.post('/api/users', async (req, res) => {
//     try {
//       const { name, email, password } = req.body;

//       const result = await pool.query(
//         'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
//         [name, email, password]
//       );

//       res.json(result.rows[0]);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   });
app.post('/api/users', async (req, res) => {
try {
  const { first_name, last_name, email, password, mobile_number, level, address } = req.body;

  const result = await pool.query(
    'INSERT INTO users (first_name, last_name, email, password, mobile_number, level, address) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [first_name, last_name, email, password, mobile_number, level, address]
  );

  res.json(result.rows[0]);
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
});
//update user details 
app.put('/api/users/:id', async (req, res) => {
try {
  const { id } = req.params;
  const { first_name, last_name, email, mobile_number, level, address } = req.body;

  const result = await pool.query(
    'UPDATE users SET first_name = $1, last_name = $2, email = $3, mobile_number = $4, level = $5, address = $6 WHERE user_id = $7 RETURNING *',
    [first_name, last_name, email, mobile_number, level, address, id]
  );

  res.json(result.rows[0]);
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
});
// Route to delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
try {
  const { id } = req.params;
  const result = await pool.query('DELETE FROM users WHERE user_id = $1 RETURNING *', [id]);

  if (result.rows.length > 0) {
    res.json({ msg: `User with ID ${id} has been deleted` });
  } else {
    res.status(404).json({ msg: `User with ID ${id} not found` });
  }
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
});


// Route to log in a user
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);

    if (user.rows.length === 0) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    res.json({ msg: 'Login successful', user: user.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Admin login
app.post('/api/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query('SELECT * FROM admins WHERE email = $1 AND password = $2', [email, password]);

    if (user.rows.length === 0) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    res.json({ msg: 'Login successful', user: user.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route to get bookings by user
app.get('/api/bookings/:user_id', async (req, res) => {
try {
  const { user_id } = req.params;
  const result = await pool.query('SELECT * FROM bookings WHERE user_id = $1', [user_id]);
  res.json(result.rows);
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
});

// Route to get all accommodation details
// app.get('/api/accommodations', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM accommodations');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });
// Import required libraries


// Enable CORS and JSON body parsing


// Route to get available accommodation details based on check-in and check-out dates


// app.post('/api/book', async (req, res) => {
//   const client = await pool.connect();
//   try {
//     const {
//       user_id,
//       sr_no,
//       check_in_date,
//       check_out_date,
//       room_type,
//       guest_house,
//       relation,
//       guest_name,
//       number_of_rooms
//     } = req.body;

//     // Begin transaction
//     await client.query('BEGIN');

//     // Check availability and update accommodations
//     let updateQuery = '';
//     if (room_type === 'vip_room') {
//       updateQuery = 'UPDATE accommodations SET vip_rooms = vip_rooms - 1 WHERE sr_no = $1 AND vip_rooms > 0 RETURNING *';
//     } else if (room_type === 'vvip_suite') {
//       updateQuery = 'UPDATE accommodations SET vvip_suites = vvip_suites - 1 WHERE sr_no = $1 AND vvip_suites > 0 RETURNING *';
//     } else if (room_type === 'standard_room') {
//       updateQuery = 'UPDATE accommodations SET no_of_rooms = no_of_rooms - 1 WHERE sr_no = $1 AND no_of_rooms > 0 RETURNING *';
//     } else {
//       return res.status(400).json({ msg: 'Invalid room type' });
//     }

//     const accommodationUpdate = await client.query(updateQuery, [sr_no]);

//     if (accommodationUpdate.rows.length === 0) {
//       await client.query('ROLLBACK');
//       return res.status(400).json({ msg: 'Room not available' });
//     }

//     // Get user details to set user_name
//     const userQuery = 'SELECT first_name, last_name FROM users WHERE user_id = $1';
//     const userResult = await client.query(userQuery, [user_id]);
//     if (userResult.rows.length === 0) {
//       await client.query('ROLLBACK');
//       return res.status(400).json({ msg: 'User not found' });
//     }
//     const userName = `${userResult.rows[0].first_name} ${userResult.rows[0].last_name}`;

//     // Insert booking
//     const bookingQuery = `
//       INSERT INTO bookings (
//         user_id,
//         sr_no,
//         check_in_date,
//         check_out_date,
//         room_type,
//         guest_house,
//         relation,
//         guest_name,
//         number_of_rooms,
//         user_name
//       ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *
//     `;
//     const booking = await client.query(bookingQuery, [
//       user_id,
//       sr_no,
//       check_in_date,
//       check_out_date,
//       room_type,
//       guest_house,
//       relation,
//       guest_name,
//       number_of_rooms,
//       userName
//     ]);

//     // Commit transaction
//     await client.query('COMMIT');

//     res.json(booking.rows[0]);
//   } catch (err) {
//     await client.query('ROLLBACK');
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   } finally {
//     client.release();
//   }
// });
app.post('/api/book', async (req, res) => {
const client = await pool.connect();
try {
  const {
    user_id,
    sr_no,
    check_in_date,
    check_out_date,
    room_type,
    guest_house,
    relation,
    guest_name,
    number_of_rooms
  } = req.body;

  // Begin transaction
  await client.query('BEGIN');

  // Insert booking
  const userNameQuery = 'SELECT first_name, last_name FROM users WHERE user_id = $1';
  const userResult = await client.query(userNameQuery, [user_id]);

  if (userResult.rows.length === 0) {
    await client.query('ROLLBACK');
    return res.status(400).json({ msg: 'User not found' });
  }
  
  const userName = `${userResult.rows[0].first_name} ${userResult.rows[0].last_name}`;

  // Insert booking
  const bookingQuery = `
    INSERT INTO bookings (
      user_id,
      sr_no,
      check_in_date,
      check_out_date,
      room_type,
      guest_house,
      relation,
      guest_name,
      number_of_rooms,
      user_name
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *
  `;
  
  await client.query(bookingQuery, [
    user_id,
    sr_no,
    check_in_date,
    check_out_date,
    room_type,
    guest_house,
    relation,
    guest_name,
    number_of_rooms,
    userName
  ]);

  // Commit transaction
  await client.query('COMMIT');

  res.json({ msg: 'Booking successful' });
} catch (err) {
  await client.query('ROLLBACK');
  console.error(err.message);
  res.status(500).send('Server Error');
} finally {
  client.release();
}
});



// Route to get all booking details
app.get('/api/bookings', async (req, res) => {
try {
  const result = await pool.query('SELECT * FROM bookings');
  res.json(result.rows);
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
});

// app.post('/api/cancellations', async (req, res) => {
//   try {
//     const { booking_id, reason } = req.body;
//     const client = await pool.connect();

//     try {
//       // Begin transaction
//       await client.query('BEGIN');

//       // Delete cancellation record
//       await client.query('DELETE FROM cancellations WHERE booking_id = $1', [booking_id]);

//       // Delete booking record
//       await client.query('DELETE FROM bookings WHERE id = $1', [booking_id]);

//       // Commit transaction
//       await client.query('COMMIT');

//       res.json({ message: 'Booking cancelled successfully' });
//     } catch (err) {
//       // Rollback transaction if error occurs
//       await client.query('ROLLBACK');
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     } finally {
//       client.release();
//     }
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });
// app.post('/api/cancellations', async (req, res) => {
//   try {
//     const { booking_id, reason } = req.body;
//     const client = await pool.connect();

//     try {
//       // Begin transaction
//       await client.query('BEGIN');

//       // Fetch the booking details to get room_type and sr_no
//       const bookingQuery = 'SELECT * FROM bookings WHERE id = $1';
//       const bookingResult = await client.query(bookingQuery, [booking_id]);

//       if (bookingResult.rows.length === 0) {
//         await client.query('ROLLBACK');
//         return res.status(400).json({ msg: 'Booking not found' });
//       }

//       const booking = bookingResult.rows[0];

//       // Delete booking record
//       await client.query('DELETE FROM bookings WHERE id = $1', [booking_id]);

//       // Add the cancelled room back to the accommodations
//       let updateQuery = '';
//       if (booking.room_type === 'vip_room') {
//         updateQuery = 'UPDATE accommodations SET vip_rooms = vip_rooms + 1 WHERE sr_no = $1 RETURNING *';
//       } else if (booking.room_type === 'vvip_suite') {
//         updateQuery = 'UPDATE accommodations SET vvip_suites = vvip_suites + 1 WHERE sr_no = $1 RETURNING *';
//       } else if (booking.room_type === 'standard_room') {
//         updateQuery = 'UPDATE accommodations SET no_of_rooms = no_of_rooms + 1 WHERE sr_no = $1 RETURNING *';
//       } else {
//         await client.query('ROLLBACK');
//         return res.status(400).json({ msg: 'Invalid room type' });
//       }

//       const accommodationUpdate = await client.query(updateQuery, [booking.sr_no]);

//       if (accommodationUpdate.rows.length === 0) {
//         await client.query('ROLLBACK');
//         return res.status(400).json({ msg: 'Accommodation update failed' });
//       }

//       // Commit transaction
//       await client.query('COMMIT');

//       res.json({ message: 'Booking cancelled successfully' });
//     } catch (err) {
//       // Rollback transaction if error occurs
//       await client.query('ROLLBACK');
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     } finally {
//       client.release();
//     }
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });
app.post('/api/cancellations', async (req, res) => {
try {
  const { booking_id, reason } = req.body;
  const client = await pool.connect();

  try {
    // Begin transaction
    await client.query('BEGIN');

    // Fetch the booking details to get room_type and sr_no
    const bookingQuery = 'SELECT * FROM bookings WHERE id = $1';
    const bookingResult = await client.query(bookingQuery, [booking_id]);

    if (bookingResult.rows.length === 0) {
      await client.query('ROLLBACK');
      return res.status(400).json({ msg: 'Booking not found' });
    }

    const booking = bookingResult.rows[0];

    // Delete booking record
    await client.query('DELETE FROM bookings WHERE id = $1', [booking_id]);

    // Commit transaction
    await client.query('COMMIT');

    res.json({ message: 'Booking cancelled successfully' });
  } catch (err) {
    // Rollback transaction if error occurs
    await client.query('ROLLBACK');
    console.error(err.message);
    res.status(500).send('Server Error');
  } finally {
    client.release();
  }
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
});




app.get('/api/accommodations/availability', async (req, res) => {
const { checkInDate, checkOutDate, selectedAccommodation } = req.query;
console.log(`checkInDate: ${checkInDate}, checkOutDate: ${checkOutDate}, selectedAccommodation: ${selectedAccommodation}`);

let query = `
  SELECT a.sr_no, a.work_centre, a.vip_rooms, a.vvip_suites, a.no_of_rooms, a.remarks,
    COALESCE(b.vip_booked, 0) AS vip_booked,
    COALESCE(b.vvip_booked, 0) AS vvip_booked,
    COALESCE(b.standard_booked, 0) AS standard_booked
  FROM accommodations a
  LEFT JOIN (
    SELECT sr_no,
      SUM(CASE WHEN room_type = 'vip_room' THEN number_of_rooms ELSE 0 END) AS vip_booked,
      SUM(CASE WHEN room_type = 'vvip_suite' THEN number_of_rooms ELSE 0 END) AS vvip_booked,
      SUM(CASE WHEN room_type = 'standard_room' THEN number_of_rooms ELSE 0 END) AS standard_booked
    FROM bookings
    WHERE (check_in_date <= $2 AND check_out_date >= $1) OR (check_in_date <= $1 AND check_out_date >= $2)
    GROUP BY sr_no
  ) b ON a.sr_no = b.sr_no
`;

const values = [checkInDate, checkOutDate];

if (selectedAccommodation !== 'all') {
  query += ' WHERE a.sr_no = $3';
  values.push(selectedAccommodation);
}

try {
  const { rows } = await pool.query(query, values);
  console.log(rows); // Log the resulting rows
  res.json(rows);
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
});

app.get('/api/accomodations', async (req, res) => {
try {
  const query = 'SELECT sr_no, work_centre FROM accommodations';
  const { rows } = await pool.query(query);
  res.json(rows);
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
});


//delete booking by user 
app.delete('/api/bookings/:id', async (req, res) => {
const { id } = req.params;
try {
  const client = await pool.connect();

  try {
    // Begin transaction
    await client.query('BEGIN');

    // Fetch the booking details to get room_type and sr_no
    const bookingQuery = 'SELECT * FROM bookings WHERE id = $1';
    const bookingResult = await client.query(bookingQuery, [id]);

    if (bookingResult.rows.length === 0) {
      await client.query('ROLLBACK');
      return res.status(400).json({ msg: 'Booking not found' });
    }

    const booking = bookingResult.rows[0];

    // Delete booking record
    await client.query('DELETE FROM bookings WHERE id = $1', [id]);

    // Update the number of rooms available based on room_type and sr_no
   

    

    // Commit transaction
    await client.query('COMMIT');

    res.json({ message: 'Booking cancelled successfully' });
  } catch (err) {
    // Rollback transaction if error occurs
    await client.query('ROLLBACK');
    console.error(err.message);
    res.status(500).send('Server Error');
  } finally {
    client.release();
  }
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
});
