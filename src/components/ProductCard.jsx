const ProductCard = ({id, prName, prPrice, prDesc, onDelete})=>{

       
       return(
              <>
                     <div>
                            <button onClick={()=>onDelete(id)}>X</button>
                            <p>{prName}</p>
                            <p>{prPrice}</p>
                            <p>{prDesc}</p>
                     </div>
              </>
       )



};







export {ProductCard};