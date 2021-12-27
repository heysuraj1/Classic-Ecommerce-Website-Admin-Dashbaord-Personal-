// import Header from '../Components/Header'
// import Slider from '../Components/Slider'
import WebsiteTraffice from '../Components/Main/WebsiteTraffice'

const UserRoles = () => {
    return (
        <div>
            {/* <Header/>
            <Slider/> */}
            <main id="main" className="main">
  <div className="pagetitle">
    <h1>Manage Staff Roles <i className="bx bxs-user"/></h1>
    
  </div>{/* End Page Title */}
  <section className="section">
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body mt-5">



          <table className="table datatable">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Brandon Jacob</td>
      <td>Designer</td>
     
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Bridie Kessler</td>
      <td>Developer</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ashleigh Langosh</td>
      <td>Finance</td>
      
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Angus Grady</td>
      <td>HR</td>
      
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Raheem Lehner</td>
      <td>Dynamic Division Officer</td>
      
    </tr>
  </tbody>
</table>







          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <WebsiteTraffice/>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

        </div>
    );
}

export default UserRoles;