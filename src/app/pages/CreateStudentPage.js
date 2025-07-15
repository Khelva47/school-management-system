"use client";
import React, { useState } from 'react';
import { 
  Upload, 
  Save, 
  RotateCcw,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign
} from 'lucide-react';

const CreateStudentPage = ({ onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'male',
    dateOfBirth: '',
    class: '',
    section: '',
    userName: '',
    password: '',
    phone: '',
    email: '',
    address: '',
    location: '',
    district: '',
    pincode: '',
    state: '',
    fatherName: '',
    motherName: '',
    fatherContact: '',
    motherContact: '',
    fatherOccupation: '',
    annualIncome: '',
    accommodationType: 'day_scholar',
    transportType: 'transport',
    photo: null
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      gender: 'male',
      dateOfBirth: '',
      class: '',
      section: '',
      userName: '',
      password: '',
      phone: '',
      email: '',
      address: '',
      location: '',
      district: '',
      pincode: '',
      state: '',
      fatherName: '',
      motherName: '',
      fatherContact: '',
      motherContact: '',
      fatherOccupation: '',
      annualIncome: '',
      accommodationType: 'day_scholar',
      transportType: 'transport',
      photo: null
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student form submitted:', formData);
    alert('Student added successfully!');
    onBack();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Add New Student</h1>
              <p className="text-sm text-gray-600 mt-1">Home → Add New Student</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-8">
            {/* Basic Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Basic Information</h2>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onBack}
                    className="text-gray-500 hover:text-gray-700 px-3 py-1 border border-gray-300 rounded text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-gray-500 hover:text-gray-700 px-3 py-1 border border-gray-300 rounded text-sm"
                  >
                    <RotateCcw size={16} className="inline mr-1" /> Reset
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                  >
                    <Save size={16} className="inline mr-1" /> Save
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="First Name"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Last Name"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="mr-2"
                      />
                      Male
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="mr-2"
                      />
                      Female
                    </label>
                  </div>
                </div>

                {/* Photo Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Photo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="student-photo-upload"
                    />
                    <label
                      htmlFor="student-photo-upload"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <Upload size={24} className="text-gray-400" />
                      <span className="text-sm text-gray-500">
                        Drop your files to upload
                      </span>
                      <button
                        type="button"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm"
                      >
                        Select files
                      </button>
                    </label>
                  </div>
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Class */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class
                  </label>
                  <select
                    value={formData.class}
                    onChange={(e) => handleInputChange('class', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Class</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>

                {/* Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section
                  </label>
                  <select
                    value={formData.section}
                    onChange={(e) => handleInputChange('section', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Section</option>
                    <option value="A">Section A</option>
                    <option value="B">Section B</option>
                    <option value="C">Section C</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Login/Account Details */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Login/Account Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* User Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    value={formData.userName}
                    onChange={(e) => handleInputChange('userName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="User Name"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="flex items-center">
                    <Phone size={16} className="text-gray-400 mr-2" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Contact number"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="flex items-center">
                    <Mail size={16} className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                    placeholder="Area and Street"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <div className="flex items-center">
                        <MapPin size={16} className="text-gray-400 mr-2" />
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Location"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        District
                      </label>
                      <input
                        type="text"
                        value={formData.district}
                        onChange={(e) => handleInputChange('district', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="District"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode
                      </label>
                      <input
                        type="text"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Pincode"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Details */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Parent Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Father Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Father Name
                  </label>
                  <div className="flex items-center">
                    <User size={16} className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      value={formData.fatherName}
                      onChange={(e) => handleInputChange('fatherName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="First Name"
                    />
                  </div>
                </div>

                {/* Mother Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mother Name
                  </label>
                  <div className="flex items-center">
                    <User size={16} className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      value={formData.motherName}
                      onChange={(e) => handleInputChange('motherName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="First Name"
                    />
                  </div>
                </div>

                {/* Father Contact */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Father Contact
                  </label>
                  <div className="flex items-center">
                    <Phone size={16} className="text-gray-400 mr-2" />
                    <input
                      type="tel"
                      value={formData.fatherContact}
                      onChange={(e) => handleInputChange('fatherContact', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Contact number"
                    />
                  </div>
                </div>

                {/* Mother Contact */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mother Contact
                  </label>
                  <div className="flex items-center">
                    <Phone size={16} className="text-gray-400 mr-2" />
                    <input
                      type="tel"
                      value={formData.motherContact}
                      onChange={(e) => handleInputChange('motherContact', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Contact number"
                    />
                  </div>
                </div>

                {/* Father Occupation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Father Occupation
                  </label>
                  <input
                    type="text"
                    value={formData.fatherOccupation}
                    onChange={(e) => handleInputChange('fatherOccupation', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Occupation"
                  />
                </div>

                {/* Annual Income */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Income
                  </label>
                  <div className="flex items-center">
                    <DollarSign size={16} className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      value={formData.annualIncome}
                      onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Annual Income"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Accommodation and Transport */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Accommodation & Transport</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Accommodation Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Accommodation Type
                  </label>
                  <select
                    value={formData.accommodationType}
                    onChange={(e) => handleInputChange('accommodationType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="day_scholar">Day Scholar</option>
                    <option value="hosteller">Hosteller</option>
                  </select>
                </div>

                {/* Transport Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transport Type
                  </label>
                  <select
                    value={formData.transportType}
                    onChange={(e) => handleInputChange('transportType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="transport">Transport</option>
                    <option value="no_transport">No Transport</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudentPage;