
import WebsiteTraffice from '../Components/Main/WebsiteTraffice'
const Customers = () => {
    return (
        <div>
            
            <main id="main" className="main">
  <div className="pagetitle">
    <h1>Need Help <i className="bx bxs-help-circle"/></h1>
    
  </div>{/* End Page Title */}
  <section className="section">
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body mt-5">
            <h2>Via Whatsapp <i className="ri-whatsapp-line"></i></h2>

              <p>If you need any technical help then just whatsapp us on +91XXXXXXXXXX. And we will fix that issue as soon as possible.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body mt-5">
            <h2>Via Mail <i className="ri-mail-add-line"></i></h2>

              <p>If you need any technical help then just mail us on ecomninja@gmail.com . And we will fix that issue as soon as possible.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body mt-5">
            <h2>Via Call <i className="ri-phone-line"></i></h2>

              <p>If you need any technical help then just call us on +91XXXXXXXXXX. And we will fix that issue as soon as possible.</p>
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