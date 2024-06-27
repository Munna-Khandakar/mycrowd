'use client';

import {useEffect, useRef, useState} from 'react';

export const Searchbar = () => {

    const searchInputRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section className="container p-12">
            <h2>What are you looking for</h2>
            <div className="border rounded-lg px-8 py-2">
                <div
                    ref={searchInputRef}
                    className="flex justify-between items-center">
                    <input type="text"
                           placeholder="Search for Medicines"
                           className="w-full p-2"
                           onChange={(e) => {
                               setSearchQuery(e.target.value);
                           }}
                           onFocus={() => {
                               setShowDropdown(true);
                           }}
                    />
                    <button className="bg-blue-500 text-white p-2">Search</button>
                </div>
                {
                    showDropdown && (
                        <div className="bg-white p-2">
                            <ul>
                                <li>Medicine One</li>
                                <li>Napa Extra</li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </section>
    );
};