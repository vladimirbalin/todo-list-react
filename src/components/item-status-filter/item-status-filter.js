import React from 'react';

const filterButtons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
];

const ItemStatusFilter = (props) => {
    const buttons = filterButtons.map(({name, label}) => {
        const isActive = name === props.filter;
        const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');
        return <button className={classNames}
                       key={name}
                       onClick={() => props.onFilterChange(name)}
                       type='button'>{label}</button>
    });
    return (
        <div className='btn-group'>
            {buttons}
        </div>
    )

};

export default ItemStatusFilter;
