import React, { useState, useEffect } from 'react'
import data from './utils/menu'
import Categories from './components/Categories'
import Menu from './components/Menu'

const menuCategories = [ 'all', ...new Set(data.map(items => items.category))]

function App() {

  const [ menuItems, setMenuItems ] = useState(data)
  const [ categories, setCategory ] = useState([])
  const [ active, setActive ] = useState('all')

  

  const filterCategory = (category) => {
    setActive(category)
    const newItems = data.filter((item) => item.category === category)
    return category === 'all' ? setMenuItems(data) : setMenuItems(newItems)
  }

  useEffect(() => {
    setCategory(menuCategories)
  },[])

  return (
    <main >
      <section className='menu section'>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterCategory={filterCategory} categories={categories} active={active}/>
        <Menu menu={menuItems}/>
      </section>
    </main>
  );
}

export default App;
