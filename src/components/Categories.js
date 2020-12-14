import React from 'react'

const Categories = ({ categories, active, filterCategory }) => {
      
    return (
        <div className='btn-container'>
            {
                categories.map((category, index) => (
                    <button key={index} className={`filter-btn ${active === category ? "active-btn" : null }`} onClick={()=> filterCategory(category)}>{category}</button>
                ))
            }
        </div>
    )
}

export default Categories
