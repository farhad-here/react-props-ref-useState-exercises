# ⚛️ React Exercises
#### A React project designed to practice some core React concepts such as props, component composition, useRef, useState and React Fragment.
#### The project includes three simple exercises that focus on passing data between components and interacting with the DOM.

Exercises
##  🐋 1. Simple Product List with Props
Create a product list where each product contains:

- Name
- Price
- Description
- The product data is stored in an array inside the parent component and passed to the ProductCard component using props.
- Each ProductCard is responsible for displaying the product information.

##### 🎈Concepts practiced:

- Props
- Component composition
- Rendering lists with map
## 🐋 2. Show Input Text in Console (Without useState)
Create:

- One input field
- One button
- When the button is clicked, the text inside the input should be printed in the browser console.

##### 👷Constraint:

- Do not use useState
- Use useRef to access the input value directly.
##### 🎈Concepts practiced:

- useRef
- DOM access in React
- Event handling
## 🐋 3. Display User List with Props and Fragment
Create a UserList component that receives an array of users and displays them.

Each user contains:

- Name
- Age
- City
- The component should use React Fragment instead of adding unnecessary <div> wrappers.

#### 🎈Concepts practiced:

- Props
- Rendering lists
- React Fragment (<> </>)

# 🧑‍💻 Technologies Used
- React
- JavaScript (ES6+)
- Vite
- SCSS (optional)
### 🥅Learning Goals
This project focuses on strengthening the following React fundamentals:

- Passing data using props
- Structuring reusable components
- Using useRef for DOM access
- Avoiding unnecessary DOM nodes with React Fragment
- Rendering dynamic lists

### ❔How to Run
Clone the repository

```bash
git clone https://github.com/farhad-here/react-props-ref-useState-exercises.git
```

Install dependencies
```bash
npm install
```
Run the development server
```bash
npm run dev
```
##### 🪶Future Improvements:
- Add styling with SCSS modules
- Add TypeScript version
- Add more React practice exercises
This project is for learning purposes.
