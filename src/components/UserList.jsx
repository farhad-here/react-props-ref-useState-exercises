import {UserItem} from './UserItem';

const UserList = ({people})=>{
       return(
              <>
                     <div className='user'>
                            {people.map((u)=>
                                   <UserItem key={u.id} uName={u.name} uAge={u.age} uCity={u.city} />
                            )}
                     </div>
              
              
              </>
       );
};

export {UserList};