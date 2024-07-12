import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null); // State to manage which user is being edited
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    level: '',
    address: ''
  });

  useEffect(() => {
    // Fetch user details from the server when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://guesthouse-m97w.onrender.com/api/allusers');
        setUsers(response.data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  // Function to handle form input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle editing a user
  const handleEditUser = (user) => {
    setEditUser(user);
    setFormData({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      mobile_number: user.mobile_number || '',
      level: user.level || '',
      address: user.address || ''
    });
  };

  // Function to update user details
  const updateUser = async () => {
    try {
      const { first_name, last_name, email, mobile_number, level, address } = formData;
      const updatedUser = {
        first_name,
        last_name,
        email,
        mobile_number,
        level,
        address
      };
      const response = await axios.put(`https://guesthouse-m97w.onrender.com/api/users/${editUser.user_id}`, updatedUser);
      console.log('Updated user:', response.data);

      // Update the local users list
      const updatedUsers = users.map(user => (user.user_id === editUser.user_id ? response.data : user));
      setUsers(updatedUsers);
      setEditUser(null); // Clear edit mode
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        mobile_number: '',
        level: '',
        address: ''
      });
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  // Function to delete a user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`https://guesthouse-m97w.onrender.com/api/users/${userId}`);
      // Remove the deleted user from the local users list
      const updatedUsers = users.filter(user => user.user_id !== userId);
      setUsers(updatedUsers);
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">User Details</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Level</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.user_id}>
                <th scope="row">{index + 1}</th>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.mobile_number}</td>
                <td>{user.level}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm mr-2"
                    onClick={() => handleEditUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(user.user_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit User Form */}
      {editUser && (
        <div className="card mt-4">
          <div className="card-header">Edit User</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile_number">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile_number"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="level">Level</label>
                <input
                  type="text"
                  className="form-control"
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={updateUser}>
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary ml-2"
                onClick={() => setEditUser(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
