import axios from "axios";
import { useState } from "react";
import {  useHistory } from "react-router-dom";
import { url } from "../../../Commons/constants";
import { validatePackage } from "@progress/kendo-react-common";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setdob] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("user");

  // get the history object
  const history = useHistory();

  // gets called when user selects an image
  // const onFileSelect = (event) => {
  // setThumbnail(event.target.files[0])

  const addUserToDB = () => {
    if (username.length === 0) {
      alert("select user name");
    } 
    // else if (email.length <7 || email.length >20) {
    //   alert("select correct email format");

    // } 
    else if (password.length < 8 || password.length > 20) {
      alert("select appropriate length of password");
    } else if (gender.length === 0) {
      alert("select gender");
    } else if (phone.length < 10 || phone.length > 10 ) {
      alert("phone number must be 10 digit");
    } else if (dob.length === 0) {
      alert("select dob");
    } else if (address.length === 0) {
      alert("select address");
    } else if (role.length === 0) {
      alert("select role");
    } else {
      const data = new FormData();
      // add the data
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("gender", gender);
      data.append("phone", phone);
      data.append("dob", dob);
      data.append("address", address);
      data.append("role", role);

      // send the data to the API
      axios.post(url + "/user/addUser", data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          alert("Sign Up Successfully");

          history.push("/signin");
        } else {
          alert("Error while Sign Up");
        }
      });
    }
  };

  return (
    <div style={{display:"flex"}}>
      <div className="container" style={{width:'50%',display: 'block'}}>
      <h1 className="title-header">Sign Up</h1>
      <div className="mb-3">
        <label htmlFor="">User Name*</label>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text" required
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Email*</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email" required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">Password*</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password" required
          className="form-control"
        />
      </div>

      <label htmlFor="">Gender*</label><br/>

      <div
        class="form-check"
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >

        <input type="radio" value="Male" name="gender" /> Male
        <br />
        <input type="radio" value="Female" name="gender" /> Female
        <br />
        <input type="radio" value="Other" name="gender" /> Other
        <br />
      </div>
      <div className="mb-3">
        <label htmlFor="">Phone*</label>
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="number" required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">DOB*</label>
        <input
          onChange={(e) => {
            setdob(e.target.value);
          }}
          type="date" required
          defaultValue="2022-01-01"
          InputLabelProps={{
            shrink: true,
          }}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">Address*</label>
        <input
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          type="text" required
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">role*</label>
        <input
          onChange={(e) => {
            setRole(e.target.value);
          }}
          type="text" required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <button onClick={addUserToDB} className="col-2 btn btn-sm btn-success">
          Add
        </button>
&nbsp;&nbsp;
        <button onClick={history.goBack} className="col-2 btn  btn-sm btn-warning">
          Back
        </button>
      </div>
      </div>
    </div>
  );
};
export default SignUp;