import axios from "axios";
import { useEffect, useState } from "react";
import SearchUser from "../components/SearchUser";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "../components/Pagination";
import loadingGif from "../assets/loading.gif";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(8);
  const [search, setSearch] = useState("");
  const [filteredFollewers, setFilteredFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getdata = async (page) => {
    const res = await axios(
      "https://api.github.com/users/anthonyharold67/followers?per_page=100"
    );
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      getdata();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.login.toLowerCase().includes(search.trim().toLowerCase())
    );
    setFilteredFollowers(filteredData);
    setCurrrentPage(1);
  }, [search, data]);

  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = filteredFollewers.slice(firstDataIndex, lastDataIndex);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return (
      <div className="text-center">
        <img src={loadingGif} alt="loading" className="loading" />
      </div>
    );
  } else {
    return (
      <div>
        <SearchUser search={search} handleSearch={handleSearch} />
        <Pagination
          totalPosts={data.length}
          dataPerPage={dataPerPage}
          setCurrrentPage={setCurrrentPage}
          currentPage={currentPage}
        />
        <Container>
          <Row xs={1} md={2} lg={3} xl={4}>
            {currentData.map((person) => (
              <Col className="mt-4">
                <div
                  className="border rounded py-2 border-primary d-flex align-items-center flex-column"
                  style={{ width: "15rem" }}
                >
                  <img src={person.avatar_url} alt="" />
                  <p>{person.login}</p>
                  <button className="btn btn-primary">
                    <a
                      href={person.html_url}
                      className="text-light text-decoration-none"
                    >
                      VIEW PROFILE
                    </a>
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
};

export default Home;
