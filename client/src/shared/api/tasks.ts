// const listLoader = async (): Promise<any> => {
//     try {
//       const response = await fetch('http://localhost:7000/add/task', {
//         method: 'POST', 
//         headers: {
//           'Content-Type': 'application/json' 
//         },
//         body: JSON.stringify({              
//           title: "New User",
//           completed: false,
//           status: "newuser@example.com"
//         })
//       });
  
//       if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.statusText}`);
//       }
  
//       const data: any = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Fetch error:', error);
//       throw error;
//     }
// }