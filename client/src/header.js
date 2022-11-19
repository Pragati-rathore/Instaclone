import { Link } from "react-router-dom";

const Header = () => {
  
  const header = {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid black",
    marginBottom: "20px",
    padding: "15px",
  };
  const img = {
    height: "80px",
  };
 
  return (
    <>
     
          <div >
            <div style={header}>
              <Link to="/">
                <img src="instaCloneImg.jpg" style={img} alt="" />
              </Link>
              <Link to="/form">
                <img src="camera.jpg" style={img} alt="" />
              </Link>
            </div>
          </div>
    </>
  );
};

export default Header;
