import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Upload, 
  Save, 
  RotateCcw,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  FileText
} from 'lucide-react';

const CreateTeacherPage = ({ onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    religion: '',
    email: '',
    phone: '',
    address: '',
    class: '',
    section: '',
    subject: '',
    idNo: '',
    userName: '',
    password: '',
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
      gender: '',
      dateOfBirth: '',
      religion: '',
      email: '',
      phone: '',
      address: '',
      class: '',
      section: '',
      subject: '',
      idNo: '',
      userName: '',
      password: '',
      photo: null
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Teacher form submitted:', formData);
    alert('Teacher added successfully!');
    onBack();
  };

  return (
    <div className="p-2 sm:p-4 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm max-w-full sm:max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onBack}
              className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} sm:size={20} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Add New Teacher</h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Home → Add New Teacher</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-2 sm:p-6">
          <div className="space-y-4 sm:space-y-8">
            {/* Teacher Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-2 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-2 sm:mb-6">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">Teacher Information</h2>
                <div className="flex gap-1 sm:gap-2 mt-2 sm:mt-0">
                  <button
                    type="button"
                    onClick={onBack}
                    className="text-gray-500 hover:text-gray-700 px-2 sm:px-3 py-1 border border-gray-300 rounded text-xs sm:text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-gray-500 hover:text-gray-700 px-2 sm:px-3 py-1 border border-gray-300 rounded text-xs sm:text-sm"
                  >
                    <RotateCcw size={12} sm:size={16} className="inline mr-1" /> Reset
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm"
                  >
                    <Save size={12} sm:size={16} className="inline mr-1" /> Save
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                    placeholder="Enter first name"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                    placeholder="Enter last name"
                  />
                </div>

                {/* Class */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Class
                  </label>
                  <select
                    value={formData.class}
                    onChange={(e) => handleInputChange('class', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                  >
                    <option value="">Please Select Class</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                  </select>
                </div>

                {/* Section */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Section
                  </label>
                  <select
                    value={formData.section}
                    onChange={(e) => handleInputChange('section', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                  >
                    <option value="">Please Select Section</option>
                    <option value="A">Section A</option>
                    <option value="B">Section B</option>
                    <option value="C">Section C</option>
                  </select>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                  >
                    <option value="">Please Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                  >
                    <option value="">Please Select Subject</option>
                    <option value="Math">Math</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="Social Science">Social Science</option>
                    <option value="Religion">Religion</option>
                    <option value="Finance">Finance</option>
                    <option value="Bangla">Bangla</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                    placeholder="dd/mm/yyyy"
                  />
                </div>

                {/* ID No */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    ID No
                  </label>
                  <input
                    type="text"
                    value={formData.idNo}
                    onChange={(e) => handleInputChange('idNo', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                    placeholder="Enter ID number"
                  />
                </div>

                {/* Religion */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Religion
                  </label>
                  <input
                    type="text"
                    value={formData.religion}
                    onChange={(e) => handleInputChange('religion', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                    placeholder="Enter religion"
                  />
                </div>

                {/* E-mail */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                    placeholder="Enter email address"
                  />
                </div>

                {/* Phone No */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone No
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                    placeholder="Enter phone number"
                  />
                </div>

                {/* Address */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                    placeholder="Enter address"
                  />
                </div>
              </div>

              {/* Photo Upload */}
              <div className="mt-2 sm:mt-6">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Upload Teacher Photo (150px X 150px)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 sm:p-6 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="cursor-pointer flex flex-col items-center gap-1 sm:gap-2"
                  >
                    <Upload size={20} sm:size={40} className="text-gray-400" />
                    <span className="text-xs sm:text-sm text-gray-500">
                      {formData.photo ? formData.photo.name : 'Choose File'}
                    </span>
                    <span className="text-xs sm:text-xs text-gray-400">No File Chosen</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Login/Account Details */}
            <div className="bg-white border border-gray-200 rounded-lg p-2 sm:p-6">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-6">Login/Account Details</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                {/* User Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    value={formData.userName}
                    onChange={(e) => handleInputChange('userName', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                    placeholder="User Name"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-base"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTeacherPage;