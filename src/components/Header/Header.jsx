import React, { useState, useEffect } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import Auth from "../../appwrite/auth";


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [userName, setUserName] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    Auth.getCurrentUser()
      .then((user) => {
        if (user) {
          console.log(user.name)
          setUserName(user.documents?.name || user.name || "Anonymous User");
        } else {
          setUserName("Guest");
        }
      })
      .catch(() => {
        setUserName("Guest");
      });
  }, [authStatus]);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="py-3 bg-light border-b border-gray-200 fixed top-0 left-0 w-full z-50 shadow-md">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <Logo width="100px" />
            </Link>
            <h1 className="ml-4 text-sm font-medium">
              Welcome:{" "}
              <span
                style={{
                  color: "red",
                  fontFamily: "Monospace",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                {userName === null ? "Loading..." : userName}
              </span>
            </h1>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>

          {/* Navigation Items */}
          <ul
            className={`${isMobileMenuOpen ? "block" : "hidden"
              } md:flex items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:relative top-full left-0 md:top-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none py-4 md:py-0`}
          >
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <Link
                      to={item.slug}
                      className="block md:inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                      aria-label={`Navigate to ${item.name}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
            )}
            <div className="relative group">
              <p>News</p>
              <div className="absolute text-left justify-start hidden bg-blue-600 text-white 
              p-4 rounded shadow-xl group-hover:inline md:group-hover:block">
                <Link to={`general`} className="block">General</Link>
                <Link to={`entertainment`} className="mt-5 block">Entertenment</Link>
                <Link to={`technology`} className="mt-5 block">Technology</Link>
                <Link to={`health`} className="mt-5 block">Health</Link>
                <Link to={`sports`} className="mt-5 block">Sports</Link>
                <Link to={`science`} className="mt-5 block">Science</Link>
              </div>
            </div>

            <div className="ml-4">
              <ThemeBtn />
            </div>
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
