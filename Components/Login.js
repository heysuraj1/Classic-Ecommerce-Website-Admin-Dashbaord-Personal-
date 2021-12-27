import Link from 'next/link'
import {useState,useEffect} from 'react'
import cookie from 'js-cookie'
import {useRouter} from 'next/router'
import { parseCookies } from "nookies";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let router = useRouter()


  const cook = parseCookies();
  const user = cook.user ? JSON.stringify(cook.user) : "";



  const handelLogin = async (e) =>{

    



    e.preventDefault()
    console.log(email,password)
    const res =  await fetch('http://143.53:3000/api/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const res2 = await res.json()
    if(res2.error){
      // M.toast({html: res2.error,classes:"red"})
      // window.alert(res2.error)
      // toast(res2.error)
      toast.error('😓 '+ res2.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    }else{
      // window.alert()
      // toast('Welcome, You Are Logged In')
      toast.success('😊 Welcome, You Are Logged In', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      
       console.log(res2)
       cookie.set('token',res2.token)
       cookie.set('user',res2.user.name)
       cookie.set('userE',res2.user.email)
       cookie.set('userR',res2.user.role)
      //  router.push('/')
      const timer = setTimeout(() => {
        router.push('/')
      }, 0.1);
      return () => clearTimeout(timer);

    }


  }


  






    return (
      <>
      

          
          
       
          <div className="container mt-5 mb-5">
          
            <div className="container text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" width={70} alt="" />
                <h5 className="mt-2">Login Please</h5>
            </div>
            <form onSubmit={(e)=>handelLogin(e)}>
  <div className="mb-2">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  
  <div className="text-center">

  <button type="submit" className="btn btn-warning"><a className="sub">SUBMIT</a></button>
  </div>
</form>
<Link href='/Signin'>
<p className="text-center yen  mt-5">{"Don't Have An Account ?"}</p>
</Link>



        </div>
          
          
      
        
        </>
    );
}

export default Signin;




// const Login = () => {
//     return (
//         <main>
//         <div className="container">
//           <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
//             <div className="container">
//               <div className="row justify-content-center">
//                 <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
//                   <div className="d-flex justify-content-center py-4">
//                     <a href="index.html" className="logo d-flex align-items-center w-auto">
//                       <img src="/img/logo.png"  />
//                       <span className="d-none d-lg-block">Ecom</span>
//                     </a>
//                   </div>{/* End Logo */}
//                   <div className="card mb-3">
//                     <div className="card-body">
//                       <div className="pt-4 pb-2">
//                         <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
//                         {/* <p className="text-center small">Enter your username &amp; password to login</p> */}
//                       </div>
//                       <form className="row g-3 needs-validation" noValidate>
//                         <div className="col-12">
//                           <label htmlFor="yourUsername" className="form-label">Email</label>
//                           <div className="input-group has-validation">
//                             {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
//                             <input type="email"  className="form-control" required />
//                             <div className="invalid-feedback">Please enter right email !</div>
//                           </div>
//                         </div>
//                         <div className="col-12">
//                           <label htmlFor="yourPassword" className="form-label">Password</label>
//                           <input type="password" name="passwword" className="form-control" id="yourPassword" required />
//                           <div className="invalid-feedback">Please enter your password!</div>
//                         </div>
                        
//                         <div className="col-12">
//                           <button className="btn btn-primary w-100" type="submit">Login</button>
//                         </div>
                        
//                       </form>
//                     </div>
//                   </div>
//                   <div className="credits">
                    
//                     Powered by <a href="https://twitter.com/hey_suraj1">Suraj Singh</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     );
// }

// export default Login;