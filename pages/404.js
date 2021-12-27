import Link from 'next/link'

const Err = () => {
    return (
        <main>
  <div className="container mt-5">
    <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1>404</h1>
      <h2>The page you are looking for doesnt exist.</h2>
      <Link href='/'>
      <a className="btn" >Back to home</a>
      </Link>
      <img src="/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />
      
    </section>
  </div>
</main>

    );
}

export default Err;