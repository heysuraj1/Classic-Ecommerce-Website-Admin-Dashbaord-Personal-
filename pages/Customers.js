
import WebsiteTraffice from '../Components/Main/WebsiteTraffice'
const Customers = () => {
    return (
        <div>
        
            <main id="main" className="main">
  <div className="pagetitle">
    <h1>My Customers <i className="bx bxs-user"/></h1>
    
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
      <th scope="col">Position</th>
      <th scope="col">Age</th>
      <th scope="col">Start Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Brandon Jacob</td>
      <td>Designer</td>
      <td>28</td>
      <td>2016-05-25</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Bridie Kessler</td>
      <td>Developer</td>
      <td>35</td>
      <td>2014-12-05</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ashleigh Langosh</td>
      <td>Finance</td>
      <td>45</td>
      <td>2011-08-12</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Angus Grady</td>
      <td>HR</td>
      <td>34</td>
      <td>2012-06-11</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Raheem Lehner</td>
      <td>Dynamic Division Officer</td>
      <td>47</td>
      <td>2011-04-19</td>
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

export default Customers;