import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Edit, 
  Eye, 
  Trash2, 
  Download,
  Filter,
  MoreHorizontal,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen
} from 'lucide-react';

const TeachersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');

  // Sample teachers data based on your screenshot
  const teachers = [
    {
      id: 2901,
      name: "Richi Rozario",
      gender: "Female",
      subject: "Math",
      class: "1",
      section: "A",
      address: "TA 110, North Sydney",
      dateOfBirth: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "ridsons@gmail.com",
      avatar: "👩‍🏫"
    },
    {
      id: 2902,
      name: "Kazi Rahim",
      gender: "Male",
      subject: "English",
      class: "2",
      section: "B",
      address: "TA 110, North Sydney",
      dateOfBirth: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "ridsons@gmail.com",
      avatar: "👨‍🏫"
    },
    {
      id: 2903,
      name: "Richi Rozario",
      gender: "Female",
      subject: "Finance",
      class: "1",
      section: "C",
      address: "TA 110, North Sydney",
      dateOfBirth: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "ridsons@gmail.com",
      avatar: "👩‍🏫"
    },
    {
      id: 2904,
      name: "Richi Rozario",
      gender: "Male",
      subject: "Religion",
      class: "3",
      section: "B",
      address: "TA 110, North Sydney",
      dateOfBirth: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "ridsons@gmail.com",
      avatar: "👨‍🏫"
    },
    {
      id: 2905,
      name: "Richi Rozario",
      gender: "Female",
      subject: "Science",
      class: "4",
      section: "A",
      address: "TA 110, North Sydney",
      dateOfBirth: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "ridsons@gmail.com",
      avatar: "👩‍🏫"
    },
    {
      id: 2906,
      name: "Richi Rozario",
      gender: "Female",
      subject: "Social Science",
      class: "5",
      section: "A",
      address: "TA 110, North Sydney",
      dateOfBirth: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "ridsons@gmail.com",
      avatar: "👩‍🏫"
    },
    {
      id: 2907,
      name: "Richi Rozario",
      gender: "Female",
      subject: "Bangla",
      class: "1",
      section: "B",
      address: "TA 110, North Sydney",
      dateOfBirth: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "ridsons@gmail.com",
      avatar: "👩‍🏫"
    },
    {
      id: 2908,
      name: "Richi Rozario",
      gender: "Female",
      subject: "Math",
      class: "2",
      section: "C",
      address: "TA 110, North Sydney",
      dateOfBirth: "10/03/2010",
      mobile: "+8812 00 5098",
      email: "ridsons@gmail.com",
      avatar: "👩‍🏫"
    }
  ];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesClass = selectedClass === 'All Classes' || teacher.class === selectedClass;
    const matchesSubject = selectedSubject === 'All Subjects' || teacher.subject === selectedSubject;
    
    return matchesSearch && matchesClass && matchesSubject;
  });

  const ActionButton = ({ icon: Icon, onClick, variant = 'default' }) => {
    const variants = {
      default: 'text-gray-500 hover:text-gray-700',
      view: 'text-blue-500 hover:text-blue-700',
      edit: 'text-green-500 hover:text-green-700',
      delete: 'text-red-500 hover:text-red-700'
    };
    
    return (
      <button
        onClick={onClick}
        className={`p-1 rounded transition-colors ${variants[variant]}`}
      >
        <Icon size={16} />
      </button>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">All Teachers</h1>
              <p className="text-sm text-gray-600 mt-1">
                Home → All Teachers List
              </p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
              <Plus size={16} />
              Add New
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-1 gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search by Name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All Classes</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All Subjects</option>
                <option>Math</option>
                <option>English</option>
                <option>Science</option>
                <option>Social Science</option>
                <option>Religion</option>
                <option>Finance</option>
                <option>Bangla</option>
              </select>
            </div>
            
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                <Search size={16} />
                SEARCH
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Photo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Section
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date of Birth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mobile No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  E-mail
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{teacher.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
                      {teacher.avatar}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      teacher.gender === 'Female' 
                        ? 'bg-pink-100 text-pink-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {teacher.gender}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-900">{teacher.subject}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {teacher.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {teacher.section}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-900">{teacher.address}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-900">{teacher.dateOfBirth}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-900">{teacher.mobile}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-900">{teacher.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <ActionButton icon={Eye} variant="view" />
                      <ActionButton icon={Edit} variant="edit" />
                      <ActionButton icon={Trash2} variant="delete" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
              <span className="font-medium">{filteredTeachers.length}</span> results
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersPage;