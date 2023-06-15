import { Fragment, useState } from "react"
import AllProducts from "./AllProducts"
import AddProduct from "./AddProduct.jsx"

function HomePage() {

    const [items, setItems] = useState([{title:"default title",desc:"default descripton",id:1,weight:1}])

    return <Fragment>
        {/* < items={items} setItems={setItems} /> */}
        
        <div>
            <AllProducts items={items} setItems={setItems}  />
        </div>
    </Fragment>
}

export default HomePage