import Axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardTitle, CardBody } from "reactstrap";
function Random() {
  const [res, setres] = useState([]);
  const fdata = async () => {
    const da = await Axios.get("https://randomuser.me/api/");
    // console.log(da)
    const fda = da.data.results[0];
    // console.log(fda.name)
    setres(fda);
  };
  useEffect(() => {
    fdata();
  }, []);
  console.log("****",res)

  return (
    <Container fluid className="p-4 bg-primary d-flex justify-content-center">
      <Card style={{width:'28' +'rem'}}>
        <CardTitle tag="h3">s
          {res.name?.title} {res.name?.first} {res.name?.last}
        </CardTitle>
        <CardBody>
        <img src={res.picture ?.large}  className="rounded-circle" alt="error"/>
          <div className="d-flex justify-content-between">
            <p className="lead fw-bolder">{res?.email}</p>
            <p className="lead fw-bolder">{res?.gender}</p>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
}
export default Random;
