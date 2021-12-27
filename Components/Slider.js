import Link from 'next/link'
const Slider = () => {
    return (
      
        <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
      <Link href='/'>
        <a className="nav-link " >
          <i className="bi bi-grid" />
          <span>Dashboard</span>
        </a>
        </Link>

      </li>{/* End Dashboard Nav */}
      <li className="nav-item">
        <Link href='/AddProduct'>
        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-menu-button-wide" /><span>Products</span><i className="bi bi-chevron-down ms-auto" />
        </a>
        </Link>
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>

          <Link href='/AddProduct'>
            <a className="nav-link collapsed" >
              <i className="bi bi-circle" /><span>Add Product</span>
            </a>
          </Link>
          </li>
          <li>
          <Link href='/Customers'>
            <a>
              <i className="bi bi-circle " /><span>{"Customer's"}</span>
            </a>
          </Link>

          </li>
          <li>
          <Link href='/Payment'>
            <a href="components-badges.html">
              <i className="bi bi-circle" /><span>Payment</span>
            </a>
          </Link>

          </li>
          
         
          
        </ul>
      </li>
      <li className="nav-item">
                          <Link href='/UserRoles'>
        <a className="nav-link collapsed" >
          <i className="bx bx-user" />
          <span>Staff Roles</span>
        </a>
                          </Link>
      </li>
      <li className="nav-item">
                  <Link href='/AllProducts'>
        <a className="nav-link collapsed" >
          <i className="bx bx-sitemap" />
          <span>All Products</span>
        </a>
                  </Link>
      </li>

      <li className="nav-item ">
          <Link href='/Orders'>
        <a className="nav-link collapsed " >
          <i className="bx bxs-shopping-bag" />
          <span>Orders</span>

        </a>
          </Link>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" >
          <i className="bx bx-window" />
          <span>Go To Web</span>
        </a>
      </li>{/* End Blank Page Nav */}
    </ul>
  </aside>
    );
}

export default Slider;