import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
import moment from "moment";

const GetAllTravel = () => {
  const [travels, setTravels] = useState([]);
  const state = useSelector((state) => {
    return {
      url: state.imgUploader.url,
      token: state.login.token,
      id: state.id.id,
    };
  });
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/travelPlans`)
      .then((result) => {
        setTravels(result.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <>
      {state.token ? (
        <div className="add">
          <button
            style={{ backgroundColor: "rgb(240, 240, 240)", border: "none" }}
            onClick={() => {
              history.push("/addTravel");
            }}
            title="Create Travel Plan"
          >
            <IconContext.Provider
              value={{
                style: { fontSize: "35px", color: "rgb(232, 180, 48)" },
              }}
            >
              <FaPlus />
            </IconContext.Provider>
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="post_page">
        {travels &&
          travels.map((element, index) => {
            return (
              <div className="post_card" key={index}>
                <div>
                  <img
                    className="poster_image"
                    src={element.images}
                    onClick={() => {
                      history.push(`travelPlans/${element.id}`);
                    }}
                  />
                </div>
                <div className="post_details">
                  <div className="uploader">
                    <img src={element.profile_image} className="img"></img>
                    
                    {state.id != element.user_id ? (<Link className="link" to={`/users/user/${element.user_id}`}>
                      <p style={{ color: "black" }}>
                        {element.first_name} {element.last_name}
                      </p>
                    </Link>) : (<Link className="link" to={`/profile`}>
                      <p style={{ color: "black" }}>
                        {element.first_name} {element.last_name}
                      </p>
                    </Link>)}
                  </div>

                  <div
                    className="post_info"
                    onClick={() => {
                      history.push(`travelPlans/${element.id}`);
                    }}
                  >
                    <h2
                      style={{ color: "rgb(232,180,48)", fontWeight: "bold" }}
                    >
                      {element.title}
                    </h2>
                    <p className="text">Travel to : {element.countries}</p>
                    <p className="text">
                      Start date :{" "}
                      {moment(element.start_date, "YYYY-MM-DD")
                        .add(1, "days")
                        .format("DD-MM-YYYY")}
                    </p>
                    <p className="text">
                      Finish date :{" "}
                      {moment(element.finish_date, "YYYY-MM-DD")
                        .add(1, "days")
                        .format("DD-MM-YYYY")}
                    </p>
                    <div style={{ display: "flex", gap: "116px" }}>
                      <p className="text">
                        Estimated budget : {element.estimated_budget} $
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default GetAllTravel;
