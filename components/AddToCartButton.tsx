'use client';

import {useEffect, useRef, useState} from 'react';
import Select from 'react-select';
import {Button} from '@/components/ui/button';

const options = [
    {value: '1', label: 'Qty 1'},
    {value: '2', label: 'Qty 2'},
    {value: '3', label: 'Qty 3'},
    {value: '4', label: 'Qty 4'},
];

export const AddToCartButton = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const ref = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setShowDropdown(true);
        setMenuOpen(true);
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {

            if (selectedOption !== '') {
                return;
            }

            if (ref.current && !ref.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectedOption]);

    return (
        <div ref={ref}>
            {
                showDropdown
                    ? <Select
                        options={options}
                        menuIsOpen={menuOpen}
                        onMenuOpen={() => setMenuOpen(true)}
                        onMenuClose={() => setMenuOpen(false)}
                        onChange={(newValue) => {
                            setSelectedOption(newValue!.value);
                        }}
                    />
                    : <Button onClick={handleClick}>Add To Cart</Button>
            }
        </div>
    );
};