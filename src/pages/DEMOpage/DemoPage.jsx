// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';

// export default function DemoPage() {

//   const apiUrl = 'http://localhost:3001';

//   const { handleSubmit, register } = useForm();

//   const [user, setUser] = useState(null);
//   const [isLogin, setIsLogin] = useState(true);

//   // Load profile data on first render to check if user is logged in
//   useEffect(() => {
//     axios
//       // We have to use { withCredentials: true } to send and receive valid cookies
//       .get(`${apiUrl}/auth/profile`, { withCredentials: true })
//       .then(({ data }) => setUser(data))
//       .catch(console.log);
//   }, []);

//   const registerUser = (values) => {
//     axios
//       .post(`${apiUrl}/auth/register`, values, { withCredentials: true })
//       // Axios returns { data: API_RESPONSE } and our API response has a .data property too
//       .then(({ data }) => setUser(data.data))
//       .catch(console.log);
//   };

//   const loginUser = (values) => {
//     axios
//       .post(`${apiUrl}/auth/login`, values, { withCredentials: true })
//       // Axios returns { data: API_RESPONSE } and our API response has a .data property too
//       .then(({ data }) => setUser(data.data))
//       .catch(console.log);
//   };

//   const logout = (values) => {
//     axios
//       .get(`${apiUrl}/auth/logout`, { withCredentials: true })
//       .then(() => setUser(null))
//       .catch(console.log);
//   };

//   const googleLogin = (values) => {
//     axios
//       .get(`${apiUrl}/auth/google`, { withCredentials: true })
//       .then(({ data }) => {
//         console.log(data);
//         setUser(null);
//       })
//       .catch(console.log);
//   };

//   const onSubmit = (values) =>
//     isLogin ? loginUser(values) : registerUser(values);

//   return (
//     <div className="App">
//       {user ? (
//         <div>
//           <h2>You are logged in!</h2>

//           <p>
//             <b>Id:</b> {user._id}
//           </p>
//           <p>
//             <b>Email:</b> {user.email}
//           </p>

//           <button onClick={logout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h2>No session found</h2>

//           <h1>{isLogin ? 'Login' : 'Register'}</h1>
//           <button onClick={() => setIsLogin(!isLogin)}>Change mode</button>
//           <br />

//           {/* Render google login page in our sever so it redirects back to the client */}
//           <a href="http://localhost:4000/api/auth/google">Login con Google</a>
//           <br />

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               ref={register({ required: true })}
//             />
//             <br />

//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               ref={register({ required: true })}
//             />
//             <br />

//             <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }
