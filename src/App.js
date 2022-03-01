import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div class="flex-container">
       <div className="flex-child-signup">
      <div className="head">Signup</div>
     <form>
       <div className="inputf">
          <input type="text" placeholder="First Name" required></input>
       </div>
       <div className="inputf">
          <input type="text" placeholder="Last Name" required></input>
       </div>
       <div className="inputf">
          <input type="text" placeholder="Contact Number" required></input>
       </div>
       <div className="inputf">
          <input type="email" placeholder="Email" required></input>
       </div>
       <div className="inputf">
          <input type="text" placeholder="College(if you're a student)"></input>
       </div>
       <div className="inputf">
          <input type="text" placeholder="Password" required></input>
       </div>
       <div className="inputf">
          <input type="password" placeholder="Confirm Password" required></input>
       </div>
       <div className='signupl'>
         <a className='links' href='#'>Signup</a>
       </div>
       <div className='signinl'>
         <p>Already have an account?</p>
         <a className='links' href='#'>Sign in</a>
       </div>
       

     </form>

    </div>
    <div className='flex-child-photo'>
           
    </div>
    </div>
  );
}

export default App;
