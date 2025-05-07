import Blog from "./components/Blogs";


export default function App() {
  const blogs= [

    {title: "My blog 1", content: "My blog 1 content"},
    {title: "My blog 2", content: "My blog 2 content"},
    {title: "My blog 3", content: "My blog 3 content"},
    {title: "My blog 4", content: "My blog 4 content"},
    {title: "My blog 5", content: "My blog 5 content"},

  ];
  return (
  <div>
    <h1>Blogs</h1>
    <hr />
    {blogs.map((blog) => (
      <Blog title={blog.title} content={blog.content} />
    ))}
  </div>
  );
}






// import { useState } from "react";

// export default function App() {

//   const increment = () => {
//     setCount(count => count + 1);
//     console.log('Count is now: ', count);
//     setCount(count => count + 1);

//   };

// const [count, setCount]= useState(0);
//   return(
//     <div className="main">
//       <h1>{count}</h1>
//       <button className="button-main" onClick={increment}>+</button>
      
//     </div>
//   );
// }





