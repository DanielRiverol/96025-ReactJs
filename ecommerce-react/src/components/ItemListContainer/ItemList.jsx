import Item from './Item'

function ItemList({products}) {
    // console.log(products);
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-6'>
           {
            products.map((product)=>(
                
                <Item key={product.id}  {...product}/>
            ))
           }
        </div>
    )
}

export default ItemList
