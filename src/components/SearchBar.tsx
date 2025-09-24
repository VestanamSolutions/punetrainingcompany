'use client';

import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { trainingCategories } from '@/data/trainingPartners';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: string[]) => void;
  searchQuery: string;
  selectedFilters: string[];
}

const SearchBar = ({ onSearch, onFilterChange, searchQuery, selectedFilters }: SearchBarProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterToggle = (category: string) => {
    const updatedFilters = selectedFilters.includes(category)
      ? selectedFilters.filter(f => f !== category)
      : [...selectedFilters, category];
    onFilterChange(updatedFilters);
  };

  const clearFilters = () => {
    onFilterChange([]);
  };

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Search by trainer name, expertise, or location..."
          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent text-slate-800 placeholder-slate-400 transition-colors"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            showFilters 
              ? 'bg-slate-800 text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Filter size={18} />
          <span>Filters</span>
          {selectedFilters.length > 0 && (
            <span className="ml-2 bg-white text-slate-800 rounded-full px-2 py-0.5 text-xs font-medium">
              {selectedFilters.length}
            </span>
          )}
        </button>

        {selectedFilters.length > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={clearFilters}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
          >
            <X size={18} />
            <span>Clear Filters</span>
          </motion.button>
        )}
      </div>

      {/* Selected Filters */}
      <AnimatePresence>
        {selectedFilters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap gap-2"
          >
            {selectedFilters.map((filter) => (
              <motion.span
                key={filter}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm flex items-center space-x-1 group hover:bg-slate-200 transition-colors"
              >
                <span>{filter}</span>
                <button
                  onClick={() => handleFilterToggle(filter)}
                  className="ml-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={14} />
                </button>
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Options */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-slate-50 rounded-xl p-4 border border-slate-200"
          >
            <h4 className="font-medium text-slate-800 mb-3">Filter by Expertise:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {trainingCategories.map((category) => (
                <motion.label
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                    selectedFilters.includes(category)
                      ? 'bg-slate-800 text-white'
                      : 'hover:bg-slate-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(category)}
                    onChange={() => handleFilterToggle(category)}
                    className="hidden"
                  />
                  <span className={`text-sm ${selectedFilters.includes(category) ? 'text-white' : 'text-slate-700'}`}>
                    {category}
                  </span>
                </motion.label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;