import ItemList from "./ItemList";

function ItemListContainer({text}) {
    return (
      <div className='h-full overflow-y-auto pr-2'>
        <h2 className='text-3xl font-bold my-3'>{text}</h2>
        <ItemList/>
      </div>
    );
}

export default ItemListContainer
