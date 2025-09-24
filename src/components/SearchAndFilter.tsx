'use client';

import { useState } from 'react';
import { Search, Filter, X, MapPin } from 'lucide-react';
import { trainingCategories } from '@/data/trainingPartners';

interface SearchAndFilterProps {
    onSearch: (query: string) => void;
    onFilterChange: (filters: string[]) => void;
    searchQuery: string;
    selectedFilters: string[];
}

const SearchAndFilter = ({ onSearch, onFilterChange, searchQuery, selectedFilters }: SearchAndFilterProps) => {
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
        <div className="w-full max-w-5xl mx-auto">
            {/* Floating Search Bar */}
            <div className="relative mb-6">
                <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden backdrop-blur-sm bg-white/95">
                    <div className="flex items-center">
                        {/* Search Icon */}
                        <div className="pl-6 pr-4 py-6">
                            <Search className="h-6 w-6 text-slate-400" />
                        </div>

                        {/* Search Input */}
                        <div className="flex-1 py-6">
                            <input
                                type="text"
                                placeholder="Search trainers by name, expertise, or location..."
                                className="w-full text-lg text-slate-800 placeholder-slate-400 bg-transparent border-none outline-none focus:ring-0"
                                value={searchQuery}
                                onChange={(e) => onSearch(e.target.value)}
                            />
                        </div>

                        {/* Location Icon */}
                        <div className="px-4 py-6 border-l border-slate-200">
                            <MapPin className="h-5 w-5 text-slate-400" />
                        </div>

                        {/* Filter Button */}
                        <div className="px-6 py-6 border-l border-slate-200">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 font-medium ${showFilters || selectedFilters.length > 0
                                    ? 'bg-blue-600 text-white border-blue-700'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                            >
                                <Filter size={18} />
                                <span>Filters</span>
                                {selectedFilters.length > 0 && (
                                    <span className="bg-white text-blue-600 rounded-full px-2 py-0.5 text-xs font-bold min-w-[20px] text-center">
                                        {selectedFilters.length}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search suggestions or quick actions could go here */}
                {searchQuery && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border-2 border-slate-200 py-2 z-50">
                        <div className="px-4 py-2 text-sm text-slate-600">
                            Press Enter to search for &quot;{searchQuery}&quot;
                        </div>
                    </div>
                )}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
                {selectedFilters.length > 0 && (
                    <button
                        onClick={clearFilters}
                        className="flex items-center space-x-2 text-red-600 hover:text-red-700 px-4 py-2 rounded-full hover:bg-red-50 transition-all duration-200 font-medium border border-red-200 hover:border-red-300"
                    >
                        <X size={16} />
                        <span>Clear All Filters</span>
                    </button>
                )}

                {/* Quick filter pills */}
                <div className="flex flex-wrap gap-2">
                    {['Leadership Development', 'Digital Marketing', 'Data Science'].map((quickFilter) => (
                        <button
                            key={quickFilter}
                            onClick={() => handleFilterToggle(quickFilter)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedFilters.includes(quickFilter)
                                ? 'bg-blue-600 text-white border-blue-700'
                                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            {quickFilter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Selected Filters */}
            {selectedFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {selectedFilters.map((filter) => (
                        <span
                            key={filter}
                            className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm flex items-center space-x-2 font-medium border border-blue-200"
                        >
                            <span>{filter}</span>
                            <button
                                onClick={() => handleFilterToggle(filter)}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <X size={14} />
                            </button>
                        </span>
                    ))}
                </div>
            )}

            {/* Advanced Filter Options */}
            {showFilters && (
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 backdrop-blur-sm bg-white/95">
                    <div className="flex items-center justify-between mb-6">
                        <h4 className="font-bold text-slate-800 text-xl">Filter by Expertise</h4>
                        <button
                            onClick={() => setShowFilters(false)}
                            className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {trainingCategories.map((category) => (
                            <label
                                key={category}
                                className={`flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 ${selectedFilters.includes(category)
                                    ? 'bg-blue-600 text-white border-blue-700 transform scale-105'
                                    : 'hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedFilters.includes(category)}
                                    onChange={() => handleFilterToggle(category)}
                                    className="hidden"
                                />
                                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${selectedFilters.includes(category)
                                    ? 'border-white bg-white'
                                    : 'border-slate-300'
                                    }`}>
                                    {selectedFilters.includes(category) && (
                                        <div className="w-2 h-2 bg-blue-600 rounded"></div>
                                    )}
                                </div>
                                <span className={`text-sm font-medium ${selectedFilters.includes(category) ? 'text-white' : 'text-slate-700'
                                    }`}>
                                    {category}
                                </span>
                            </label>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-slate-600">
                            {selectedFilters.length} filter{selectedFilters.length !== 1 ? 's' : ''} selected
                        </span>
                        <div className="flex gap-3">
                            <button
                                onClick={clearFilters}
                                className="px-6 py-2 text-slate-600 hover:text-slate-800 font-medium transition-colors"
                            >
                                Clear All
                            </button>
                            <button
                                onClick={() => setShowFilters(false)}
                                className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition-colors"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchAndFilter;