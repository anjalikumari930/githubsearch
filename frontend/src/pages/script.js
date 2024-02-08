import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Input,
  Button,
} from "reactstrap";

const Home = () => {
  const [Username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const getname = (name) => {
    axios
      .get(`https://api.github.com/users/${name}/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((err) => console.error(err));
  };

  console.log(repos);

  const handleSubmit = (e) => {
    e.preventDefault();
    getname(Username);
  };

  return (
    <div>
      <Navbar color="light" light expand="lg">
        <Container>
          <NavLink className="navbar-brand" href="#">
            Github details
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleDropdown}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>Names</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Anjali</DropdownItem>
              <DropdownItem>Anand</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Muskan</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About this App</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Usage Guide</NavLink>
            </NavItem>
          </Nav>
          <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <Input
              type="search"
              placeholder="Search"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button type="submit" color="danger">
              Search
            </Button>
          </form>
        </Container>
      </Navbar>

      <Container>
        <h1 className="my-4 text-center text-primary">
          Name of user {Username}
        </h1>
        <main>
          {/* Remaining code remains unchanged */}
          <div className="text-center padding-left-15 padding-right-15">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3 bg-primary">
                  <h4 className="my-0 fw-normal">
                    <strong>Details</strong>
                  </h4>
                </div>
                <div className="card-body">
                  <h1>GitHub Repositories</h1>
                  <ul>
                    {repos.map((repo) => (
                      <li key={repo.id}>
                        <strong>Name:</strong> {repo.name}
                        <br />
                        <strong>Description:</strong> {repo.description}
                        <br />
                        <strong>Node id:</strong> {repo.node_id}
                        <br />
                        <strong>URL:</strong>{" "}
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {repo.html_url}
                        </a>
                        <br />
                        <strong>Stars:</strong> {repo.stargazers_count}
                        <br />
                        <strong>Forks:</strong> {repo.forks_count}
                        <br />
                        <hr />
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
            {/* Repeat similar adjustments for other card sections */}
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Home;
