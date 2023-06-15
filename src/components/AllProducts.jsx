import React from 'react'
import ProductCard from './ProductCard'

const AllProducts = ({items,setItems}) => {
    // let gender = "male"
    // const prefix = gender === "male" ? "Mr." : gender === "female" ? "Mrs" : undefined
    // const name = prefix || "M"
    // const age = gender === "male"  && 25
    
    const edit_handler = (id) => {
        let found_item = items.find(item => item.id == id)
        let new_title = prompt("Enter new title.")
        let new_desc = prompt("Enter new description.")

        let edited_found_item = {...found_item,title:new_title,desc:new_desc}

        let deleted_items = items.filter(itemid => found_item.id !== itemid.id)

        let temp_items = {...deleted_items,edited_found_item} 
        setItems(temp_items)
    }
    
    const delete_handler = (id) => {
        console.log('working')
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <div style={{ padding: "2rem", display: "flex", }}>
            {items.length ? items.map((item) => <ProductCard item={item} items={items} setItems={setItems} edit_handler={edit_handler} delete_handler={delete_handler}/>) : 'No Item Found'}
        </div>
    )
}

export default AllProducts
