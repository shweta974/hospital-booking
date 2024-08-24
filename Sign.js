
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Register() {
    const [editingCompleted, setEditingCompleted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:'',
    });
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      password:'',
    });
    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        // Validate each form field
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Title is required';
            valid = false;
        }

        if (!formData.password.trim()) {
          newErrors.password = 'Title is required';
          valid = false;
      }


        setErrors(newErrors);
        return valid;
    }
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            setFormData({
              name: '',
              email: '',
            })
            if (response.ok) {
                // swal("Success!", "Product created successfully.", "success");
                console.log('donee')
                setEditingCompleted(true);
            }
            // Assuming response contains JSON data of the saved product
            const responseData = await response.json();

        } catch (error) {
            // swal("Error!", "Failed to create product. Please try again later.", "error");
            console.error('Error:', error.message);
        }
    };
    useEffect(() => {
        if (editingCompleted) {
            navigate('/login');
        }
    }, [editingCompleted, navigate]);
    return (
        <div  className="d-flex justify-content-center align-items-center bg-secondary vh-100">
           <div className="bg-white p-3 rounded w-25">
            <h3 text-center>Sign Up </h3>
            <form onSubmit={handleFormSubmit}>

                <div className="mb-3">
                    <label> <strong>Name:</strong> </label>

                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} 
                    className='form-control rounded-0' />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="mb-3">
                    <label><strong>Email</strong></label>

                    <input type="text" name="email" value={formData.email} onChange={handleInputChange}
                    className='form-control rounded-0'  />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="mb-3">
                    <label><strong>Password</strong></label>

                    <input type="password" name="password" value={formData.password} onChange={handleInputChange}
                    className='form-control rounded-0'  />
                    {errors.password && <span className="error">{errors.passwors}</span>}
                </div>
                
                <button type="submit" className="btn btn-success w-100 rounded-0">Submit</button>
            </form>
            </div>
        </div>
    )
}
export default Register;