// import
import { ProductCard } from './ProductCard';
import {useState} from 'react';
// productlist
const ProductList = ({items}) => {
       const [products, setProduct] = useState(items);
       // for removing product
       const removeProduct = (id) => {
              setProduct(products.filter(p => p.id !== id));
       };
       // filter products
       const [nameProduct, setNameProduct] = useState('');
       const [maxProduct, setMaxProduct] = useState('');
       const [minProduct, setMinProduct] = useState('');
       
       const filtering = products.filter((prd)=>{
              const matchName = prd?.name.toLowerCase().includes(nameProduct.toLowerCase());
              const matchMin = !minProduct || Number(prd.price.replace('$','')) >= parseFloat(minProduct);
              const matchMax = !maxProduct || Number(prd.price.replace('$','')) <= parseFloat(maxProduct);
              return matchMin && matchName && matchMax;
       });
       return(
              <>
              <div className={'products-listTemp'}>
                     <h1 className={'prHeading'}>Simple Products list with Prop</h1>
                     <div className='prFilter'>
                            <p className='pr-filter-title'>Filters</p>
                            <div>
                                   <label>Filter by Name:</label>
                                   <input type="text" placeholder='search product...' value={nameProduct} onChange={(e) => setNameProduct(e.target.value)}/>
                                   
                            </div>
                            <div>
                                   <label>Filter by Min Price $:</label>
                                   <input type="number" placeholder='Min' value={minProduct} onChange={(e) => setMinProduct(e.target.value)}/>
                                   
                            </div>
              
                            <div>
                                   <label>Filter by Max Price $:</label>
                                   <input type="number" placeholder='Max' value={maxProduct} onChange={(e) => setMaxProduct((e.target.value))}/>
                                   
                            </div>

                     </div>
                     
                     <div className="productCard-template">
                            {!filtering.length ? (
                                   <p>No product match result</p>
                            ):(
                                   filtering.map((p)=><ProductCard key={p.id} id={p.id} prName={p.name} prPrice={p.price} prDesc={p.description} onDelete={removeProduct} />)
                            )}
                     </div>
              </div>
              
              
              
              </>
       )


}






export {ProductList};