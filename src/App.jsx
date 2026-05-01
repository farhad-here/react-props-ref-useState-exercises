import './App.css'
  // product
import { ProductList } from './components/ProductList';

  // showing input value in console
import { ShowInputConsoleWithoutUseState} from './components/ShowInputWithoutUseState';
  // user
import { UserList } from './components/UserList';

// products list
const userProducts = [
  {
    id: 1,
    name: "Laptop",
    price: "$1200",
    description: "Powerful laptop for programming and work"
  },
  {
    id: 2,
    name: "Smartphone",
    price: "$800",
    description: "Modern smartphone with great camera"
  },
  {
    id: 3,
    name: "Headphones",
    price: "$150",
    description: "Wireless headphones with noise cancellation"
  },
  {
    id: 4,
    name: "Keyboard",
    price: "$90",
    description: "Mechanical keyboard for comfortable typing"
  },
  {
    id: 5,
    name: "Mouse",
    price: "$40",
    description: "Ergonomic wireless mouse"
  }
];
// User list
const users = [
  { id: 1, name: "Fred", age: 24, city: "Tehran" },
  { id: 2, name: "Sara", age: 30, city: "Tokyo" },
  { id: 3, name: "Mari", age: 22, city: "Michigan" },
  { id: 4, name: "Jhon", age: 28, city: "Rasht" },
  { id: 5, name: "Rose", age: 35, city: "NewYork" }
];


function App() {

  return (
    <>
      {/* for products */}
      <ProductList items={userProducts} />
      {/* for showing inputs value in console */}
      <ShowInputConsoleWithoutUseState />
      {/* for User */}
      <UserList people={users} />

    </>
  )
}

export default App;
