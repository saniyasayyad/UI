import React, { useState, useEffect } from 'react';
import { Flower2, Image as ImageIcon, Plus, Gift } from 'lucide-react';
import { Chadhava } from '../types';
import { getChadhavas, saveChadhavas } from '../utils/storage';

const ChadhavaManagement: React.FC = () => {
  const [chadhavas, setChadhavas] = useState<Chadhava[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [showSubmitted, setShowSubmitted] = useState(false);

  useEffect(() => {
    setChadhavas(getChadhavas());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newChadhava: Chadhava = {
      id: Date.now().toString(),
      ...formData,
      createdAt: Date.now()
    };

    const updatedChadhavas = [newChadhava, ...chadhavas];
    setChadhavas(updatedChadhavas);
    saveChadhavas(updatedChadhavas);

    setFormData({ title: '', description: '', image: '' });
    setSuccessMessage('Chadhava offering submitted successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Chadhava Offerings</h2>
          <p className="text-gray-600">Manage sacred offerings and donations</p>
        </div>
        <button
          onClick={() => setShowSubmitted(!showSubmitted)}
          className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Gift className="w-5 h-5" />
          <span>{showSubmitted ? 'Add Offering' : 'View Submitted'}</span>
        </button>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          {successMessage}
        </div>
      )}

      {!showSubmitted ? (
        /* Add Chadhava Form */
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
              <Flower2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Add Chadhava Offering</h3>
              <p className="text-gray-600">Submit a new sacred offering</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offering Image URL
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="https://example.com/offering-image.jpg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offering Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="e.g., Prasadam, Flowers, etc."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  rows={4}
                  placeholder="Describe the offering and its significance"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02]"
              >
                <Plus className="w-5 h-5" />
                <span>Offer Chadhava</span>
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* Submitted Chadhavas */
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Gift className="w-6 h-6 text-orange-500" />
            <h3 className="text-xl font-bold text-gray-800">Submitted Offerings</h3>
          </div>

          {chadhavas.length === 0 ? (
            <div className="text-center py-12">
              <Flower2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">No offerings submitted yet</h3>
              <p className="text-gray-500">Submit your first chadhava offering to see it here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chadhavas.map((chadhava) => (
                <div key={chadhava.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    {chadhava.image ? (
                      <img
                        src={chadhava.image}
                        alt={chadhava.title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.pexels.com/photos/6667751/pexels-photo-6667751.jpeg?auto=compress&cs=tinysrgb&w=400';
                        }}
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                        <ImageIcon className="w-12 h-12 text-orange-300" />
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      New
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-lg text-gray-800">{chadhava.title}</h3>
                      <Flower2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{chadhava.description}</p>
                    
                    <div className="text-xs text-gray-500">
                      Submitted on {formatDate(chadhava.createdAt)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChadhavaManagement;