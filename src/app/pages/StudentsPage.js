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
  BookOpen,
  Hash
} from 'lucide-react';

const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All Classes');

  // Sample students data based on your screenshot
  const students = [
    {
      id: 1,
      name: "Sophia Wilson",
      rollNum: "522bcs008",
      class: "12 - A",
      accomType: "Hosteller",
      transport: "No",
      location: "Singanallur",
      contact: "82486 69088",
      rank: "001",
      points: "26800",
      avatar: "👩‍🎓"
    },
    {
      id: 2,
      name: "James Johnson",
      rollNum: "522bcs009",
      class: "12 - B",
      accomType: "Day Scholar",
      transport: "Yes",
      location: "Coimbatore",
      contact: "82486 69089",
      rank: "002",
      points: "26750",
      avatar: "👨‍🎓"
    },
    {
      id: 3,
      name: "Emma Brown",
      rollNum: "522bcs010",
      class: "11 - A",
      accomType: "Hosteller",
      transport: "No",
      location: "Singanallur",
      contact: "82486 69090",
      rank: "003",
      points: "26700",
      avatar: "👩‍🎓"
    },
    {
      id: 4,
      name: "Michael Davis",
      rollNum: "522bcs011",
      class: "11 - B",
      accomType: "Day Scholar",
      transport: "Yes",
      location: "Peelamedu",
      contact: "82486 69091",
      rank: "004",
      points: "26650",
      avatar: "👨‍🎓"
    },
    {
      id: 5,
      name: "Olivia Wilson",
      rollNum: "522bcs012",
      class: "10 - A",
      accomType: "Hosteller",
      transport: "No",
      location: "Singanallur",
      contact: "82486 69092",
      rank: "005",
      points: "26600",
      avatar: "👩‍🎓"
    },
    {
      id: 6,
      name: "William Garcia",
      rollNum: "522bcs013",
      class: "10 - B",
      accomType: "Day Scholar",
      transport: "Yes",
      location: "Gandhipuram",
      contact: "82486 69093",
      rank: "006",
      points: "26550",
      avatar: "👨‍🎓"
    },
    {
      id: 7,
      name: "Ava Martinez",
      rollNum: "522bcs014",
      class: "9 - A",
      accomType: "Hosteller",
      transport: "No",
      location: "Singanallur",
      contact: "82486 69094",
      rank: "007",
      points: "26500",
      avatar: "👩‍🎓"
    },
    {
      id: 8,
      name: "Alexander Rodriguez",
      rollNum: "522bcs015",
      class: "9 - B",
      accomType: "Day Scholar",
      transport: "Yes",
      location: "R.S. Puram",
      contact: "82486 69095",
      rank: "008",
      points: "26450",
      avatar: "👨‍🎓"
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.rollNum.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.contact.includes(searchTerm);
    
    const matchesClass = selectedClass === 'All Classes' || student.class.includes(selectedClass);
    
    return matchesSearch && matchesClass;
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
              <h1 className="text-2xl font-bold text-gray-800">Students</h1>
              <p className="text-sm text-gray-600 mt-1">All Students List</p>
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
                  placeholder="Search by Name or roll..."
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
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            
            <div className="flex gap-2">
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
                  No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Roll num
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Accom_Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transport
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Points
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student, index) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {String(index + 1).padStart(2, '0')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
                        {student.avatar}
                      </div>
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.rollNum}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      student.accomType === 'Hosteller' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {student.accomType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      student.transport === 'Yes' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {student.transport}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-900">{student.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-900">{student.contact}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{student.rank}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {student.points}
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
              <span className="font-medium">{filteredStudents.length}</span> results
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

export default StudentsPage;