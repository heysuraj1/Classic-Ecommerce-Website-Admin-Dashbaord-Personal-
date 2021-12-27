import Link from "next/link";
import cookie from "js-cookie";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = () => {
  const cook = parseCookies();
  const userR = cook.userR ? JSON.stringify(cook.userR) : "";
  const use = cook.user ? JSON.stringify(cook.user) : "";
  const userE = cook.userE ? JSON.stringify(cook.userE) : "";

  let router = useRouter();
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        
        <div className="d-flex align-items-center justify-content-between">
          <Link href="/">
            <a className="logo d-flex align-items-center">
              <img src="/img/logo.png" />
              <span className="d-none d-lg-block">NiceAdmin</span>
            </a>
          </Link>

          <i className="bi bi-list toggle-sidebar-btn" />
        </div>
        {/* End Logo */}

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="/img/profile-img.png"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {use.replace(/['"]+/g, "")}
                </span>
              </a>
              {/* End Profile Iamge Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{use.replace(/['"]+/g, "")}</h6>
                  <span>{userE.replace(/['"]+/g, "")}</span>
                  <br />
                  <span>{userR.replace(/['"]+/g, "")}</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="/help">
                    <a className="dropdown-item d-flex align-items-center">
                      <i className="bi bi-question-circle" />
                      <span>Need Help?</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    onClick={() => {
                      toast.success("Logged Out", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                      cookie.remove("token");
                      cookie.remove("user");
                      cookie.remove("userE");
                      cookie.remove("userR");

                      const timer = setTimeout(() => {
                        router.push("/");
                      }, 0.5);
                      return () => clearTimeout(timer);
                    }}
                  >
                    <i className="bi bi-box-arrow-right" />
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
              {/* End Profile Dropdown Items */}
            </li>
            {/* End Profile Nav */}
          </ul>
        </nav>
        {/* End Icons Navigation */}
        <ToastContainer />
      </header>
    </>
  );
};

export default Header;
