import { useCallback, useEffect, useRef, useState } from 'react';
import css from './FilterDropdown.module.css';

export const FilterDropdown = ({onSelect, placeholder}) => {

    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef();

    const closeOpenDropdown = useCallback((e) => {
        if (
            dropdownRef.current &&
            isOpen &&
            !dropdownRef.current.contains(e.target)
        ) {
            setIsOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        document.addEventListener('mousedown', closeOpenDropdown);
    }, [closeOpenDropdown]);


    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleSelectItem = (e) => {
        const selectedItem = e.target.value;

        onSelect(selectedItem);
    }

    const dropdownClassName = isOpen 
    ? `${css.dropdown} ${css.open}`
    : `${css.dropdown}`;

    const dropdownPlaceholder = isOpen 
    ? 'Select: '
    : placeholder;

    return (
        <div ref={dropdownRef} className={dropdownClassName} onClick={handleOpen}>
            {dropdownPlaceholder}


            {isOpen ? (
                <ul className={css.menu}>
                    <li className={css.item}>
                        <button onClick={handleSelectItem} type='button' value={'show all'}>All</button>
                    </li>

                    <li className={css.item}>
                        <button onClick={handleSelectItem} type='button' value={'follow'}>Follow</button>
                    </li>

                    <li className={css.item}>
                        <button onClick={handleSelectItem} type='button' value={'followings'}>Following</button>
                    </li>
                </ul>
            ) : null}
           
        </div>
    )
}