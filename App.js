
import './App.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
const App =()=> {
  return (
    <>
    
    <div className='navbar bg-dark d-flex mb-5'>
      <h1 class="text-white">Bike Walea</h1>
      <ul class="nav text-white">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page"href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white"href="#">Contact</a>
        </li>
      </ul>
    </div>
    <div className="container">
      <div className="row">
        <div class="col-lg-3 mb-3 d-flex align-items-stretch">
          <div class="card">
            <img src="https://th.bing.com/th/id/OIP.GR7sUK903_XgmCCQ0a69QwHaEk?w=313&h=192&c=7&r=0&o=5&pid=1.7"/>
            <hr></hr>
            <div class="card-body  d-flex flex-column">
              <h5 class="card-title">Suzuki Bike</h5>
              <p>It is available in 7 variants and 8 colours. Suzuki Gixxer SF 250 is a sports bike available in 7 variants and 8 colours.</p>
              <a href="#" class="btn btn-primary">Info</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mb-3 d-flex align-items-stretch">
          <div class="card">
            <img src="https://th.bing.com/th/id/OIP.EIUTVyb2gSOOMq55cAP8eAHaEk?w=252&h=180&c=7&r=0&o=5&pid=1.7"class="card-img-top" alt="Good place"/>
            <hr></hr>
            <div class="card-body  d-flex flex-column">
              <h5 class="card-title">Suzuki Bike</h5>
              <p>It is available in 7 variants and 8 colours. Suzuki Gixxer SF 250 is a sports bike available in 7 variants and 8 colours.</p>
              <a href="#" class="btn btn-primary">Info</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mb-3 d-flex align-items-stretch">
          <div class="card">
            <img src="https://th.bing.com/th/id/OIP.UjQCH6gS3wq_5yVW3q-T-wHaEK?w=331&h=186&c=7&r=0&o=5&pid=1.7"class="card-img-top" alt="Good place"/>
           <hr></hr>
            <div class="card-body  d-flex flex-column">
              <h5 class="card-title">Suzuki Bike</h5>
              <p>It is available in 7 variants and 8 colours. Suzuki Gixxer SF 250 is a sports bike available in 7 variants and 8 colours.</p>
              <a href="#" class="btn btn-primary">Info</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mb-3 d-flex align-items-stretch">
          <div class="card">
            <img src="https://th.bing.com/th/id/OIP.0D-Kx3XMiM-6JwR7cQ-0GQHaEk?w=311&h=184&c=7&r=0&o=5&pid=1.7"class="card-img-top" alt="Good place"/>
            <hr></hr>
            <div class="card-body  d-flex flex-column">
              <h5 class="card-title">Suzuki Bike</h5>
              <p>It is available in 7 variants and 8 colours. Suzuki Gixxer SF 250 is a sports bike available in 7 variants and 8 colours.</p>
              <a href="#" class="btn btn-primary">Info</a>
            </div>
          </div>
        </div>
      </div>
      
      
      <footer class="container-fluid bg-dark  text-center text-white">
    {/* <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);"> */}
    © 2023 Copyright:
    <a class="text-white" href="https://sendtomail.com/">Rajalakshmi.com</a>
  {/* </div> */}
  </footer>
   </div> 
         
  </>
  )
  }
export default App;
