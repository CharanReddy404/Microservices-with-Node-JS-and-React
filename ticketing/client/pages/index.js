import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  // axios.get("/api/users/currentuser").catch((err) => {
  //   console.log(err.message);
  // });
  return <div>Landing Page</div>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === "undefined") {
    const { data } = await axios
      .get(
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
        {
          headers: req.headers,
        }
      )
      .catch((err) => {
        console.log(err.message);
      });
    return data;
  } else {
    const { data } = await axios.get("/api/users/currentuser").catch((err) => {
      console.log(err.message);
    });
    return data;
  }
};

export default LandingPage;
