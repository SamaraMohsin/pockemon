// import { useEffect, useState } from 'react';
// import UseMyApi from '../Hooks/UseApi';


// function LeftSide (){

//     const [data,setData] = useState();

//     function afnan(event){
//         async function CallMyAPIchild() {
//           const result = await fetch(event.target.id)
//           .then((response) => response.json());
//           setData(result);
          
//       }
//       CallMyAPIchild();
    
//       }

//       const a = UseMyApi();
    
//     return (
//           <div className='leftside'>
//           {
//             a.map((boj,i)=>{
//               return <div key={i} id={boj.url} onClick={afnan}>
//                 {boj.name} 
//                 </div>
//             })
//           }
//           </div>
//     )
// }

// export default LeftSide;