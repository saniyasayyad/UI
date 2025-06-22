import React, { useState } from 'react';
import { Plus, Trash2, Calendar, Flower2, X, Image as ImageIcon } from 'lucide-react';
import { Puja, Chadhava } from '../types';

interface AdminPanelProps {
  pujas: Puja[];
  chadhavas: Chadhava[];
  onAddPuja: (puja: Omit<Puja, 'id' | 'createdAt'>) => void;
  onDeletePuja: (id: string) => void;
  onAddChadhava: (chadhava: Omit<Chadhava, 'id' | 'createdAt'>) => void;
  onDeleteChadhava: (id: string) => void;
}

type TabType = 'pujas' | 'chadhavas';

const AdminPanel: React.FC<AdminPanelProps> = ({
  pujas,
  chadhavas,
  onAddPuja,
  onDeletePuja,
  onAddChadhava,
  onDeleteChadhava
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('pujas');
  const [showAddForm, setShowAddForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [pujaForm, setPujaForm] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    image: ''
  });

  const [chadhavaForm, setChadhavaForm] = useState({
    title: '',
    description: '',
    templeName: '',
    date: '',
    image: ''
  });

  const showSuccess = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleAddPuja = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPuja(pujaForm);
    setPujaForm({ title: '', description: '', location: '', date: '', image: '' });
    setShowAddForm(false);
    showSuccess('Puja added successfully!');
  };

  const handleAddChadhava = (e: React.FormEvent) => {
    e.preventDefault();
    onAddChadhava(chadhavaForm);
    setChadhavaForm({ title: '', description: '', templeName: '', date: '', image: '' });
    setShowAddForm(false);
    showSuccess('Chadhava offering added successfully!');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 
            className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Admin Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Manage BhaktDwaar content and offerings</p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center">
            {successMessage}
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('pujas')}
              className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-all ${
                activeTab === 'pujas'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-tl-xl'
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Manage Pujas ({pujas.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('chadhavas')}
              className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-all ${
                activeTab === 'chadhavas'
                  ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-tr-xl'
                  : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              <Flower2 className="w-5 h-5" />
              <span>Manage Chadhavas ({chadhavas.length})</span>
            </button>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {activeTab === 'pujas' ? 'Puja Management' : 'Chadhava Management'}
              </h2>
              <button
                onClick={() => setShowAddForm(true)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg ${
                  activeTab === 'pujas'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
                    : 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white'
                }`}
              >
                <Plus className="w-5 h-5" />
                <span>Add {activeTab === 'pujas' ? 'Puja' : 'Chadhava'}</span>
              </button>
            </div>

            {/* Content Grid */}
            {activeTab === 'pujas' ? (
              pujas.length === 0 ? (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">No pujas added yet</h3>
                  <p className="text-gray-500">Click "Add Puja" to create your first puja event.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pujas.map((puja) => (
                    <div key={puja.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                      <div className="relative">
                        <img
                          src={puja.image}
                          alt={puja.title}
                          className="w-full h-48 object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.pexels.com/photos/8436602/pexels-photo-8436602.jpeg?auto=compress&cs=tinysrgb&w=400';
                          }}
                        />
                        <button
                          onClick={() => onDeletePuja(puja.id)}
                          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">{puja.title}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{puja.description}</p>
                        <div className="text-xs text-gray-500 space-y-1">
                          <div>📍 {puja.location}</div>
                          <div>📅 {formatDate(puja.date)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              chadhavas.length === 0 ? (
                <div className="text-center py-12">
                  <Flower2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">No chadhava offerings added yet</h3>
                  <p className="text-gray-500">Click "Add Chadhava" to create your first offering.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chadhavas.map((chadhava) => (
                    <div key={chadhava.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                      <div className="relative">
                        <img
                          src={chadhava.image}
                          alt={chadhava.title}
                          className="w-full h-48 object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.pexels.com/photos/6667751/pexels-photo-6667751.jpeg?auto=compress&cs=tinysrgb&w=400';
                          }}
                        />
                        <button
                          onClick={() => onDeleteChadhava(chadhava.id)}
                          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">{chadhava.title}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{chadhava.description}</p>
                        <div className="text-xs text-gray-500 space-y-1">
                          <div>🏛️ {chadhava.templeName}</div>
                          <div>📅 {formatDate(chadhava.date)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>

        {/* Add Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Add New {activeTab === 'pujas' ? 'Puja' : 'Chadhava'}
                </h3>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {activeTab === 'pujas' ? (
                <form onSubmit={handleAddPuja} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                    <input
                      type="url"
                      value={pujaForm.image}
                      onChange={(e) => setPujaForm({ ...pujaForm, image: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="https://example.com/image.jpg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={pujaForm.title}
                      onChange={(e) => setPujaForm({ ...pujaForm, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="e.g., Ganesh Puja"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={pujaForm.description}
                      onChange={(e) => setPujaForm({ ...pujaForm, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      rows={3}
                      placeholder="Brief description of the puja"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      value={pujaForm.location}
                      onChange={(e) => setPujaForm({ ...pujaForm, location: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="e.g., Temple Hall"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      value={pujaForm.date}
                      onChange={(e) => setPujaForm({ ...pujaForm, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Add Puja
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleAddChadhava} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                    <input
                      type="url"
                      value={chadhavaForm.image}
                      onChange={(e) => setChadhavaForm({ ...chadhavaForm, image: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="https://example.com/image.jpg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={chadhavaForm.title}
                      onChange={(e) => setChadhavaForm({ ...chadhavaForm, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="e.g., Prasadam Offering"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={chadhavaForm.description}
                      onChange={(e) => setChadhavaForm({ ...chadhavaForm, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      rows={3}
                      placeholder="Brief description of the offering"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Temple Name</label>
                    <input
                      type="text"
                      value={chadhavaForm.templeName}
                      onChange={(e) => setChadhavaForm({ ...chadhavaForm, templeName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="e.g., Shri Krishna Temple"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      value={chadhavaForm.date}
                      onChange={(e) => setChadhavaForm({ ...chadhavaForm, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Add Chadhava
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;