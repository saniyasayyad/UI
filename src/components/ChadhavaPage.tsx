import React from 'react';
import { Flower2, MapPin, Calendar, Star } from 'lucide-react';
import { Chadhava } from '../types';

interface ChadhavaPageProps {
  chadhavas: Chadhava[];
}

const ChadhavaPage: React.FC<ChadhavaPageProps> = ({ chadhavas }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Star className="w-8 h-8 text-orange-500 animate-pulse" />
            <h1 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Chadhava Offerings
            </h1>
            <Star className="w-8 h-8 text-orange-500 animate-pulse" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full shadow-lg mb-6" />
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Make sacred offerings and receive divine blessings from the almighty
          </p>
        </div>

        {/* Chadhava Cards */}
        {chadhavas.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Flower2 className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">No Chadhava Offerings Available</h3>
            <p className="text-gray-500 text-lg">New offering opportunities will be available soon. Stay blessed!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chadhavas.map((chadhava) => (
              <div 
                key={chadhava.id} 
                className="group bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={chadhava.image}
                    alt={chadhava.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/6667751/pexels-photo-6667751.jpeg?auto=compress&cs=tinysrgb&w=400';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    Blessed
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Flower2 className="w-8 h-8 text-orange-500" />
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                    {chadhava.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {chadhava.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-3 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <span>{chadhava.templeName}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>{formatDate(chadhava.date)}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                    OFFER CHADHAVA
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChadhavaPage;