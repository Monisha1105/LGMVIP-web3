import React, { useState } from "react";

const Register = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [webLink, setWeblink] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [gender, setGender] = useState("");
  const [datas, setDatas] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    if (
      fName === "" ||
      lName === "" ||
      phone === "" ||
      webLink === "" ||
      email === "" ||
      skills === "" ||
      gender === ""
    ) {
      alert("Please enter values");
    } else {
      setDatas([
        ...datas,
        {
          fName: fName,
          lName: lName,
          phone: phone,
          webLink: webLink,
          email: email,
          skills: skills,
          gender: gender,
        },
      ]);
    }
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setGender("");
    setSkills("");

  };

  return (
    <>
      <div class="container-fluid mt-5 mb-5">
        <h6>Student Registeration Form</h6>
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <form>
              <div class="mt-3">
                <label className="text-white">First Name</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="First Name"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div class="mt-3">
                <label className="text-white">Last Name</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Last Name"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <div class="mt-3">
                <label className="text-white">phone</label>
                <input
                  type="number"
                  name="phone"
                  class="form-control"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div class="mt-3">
                <label className="text-white">Email</label>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="email id"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mt-3">
                <label className="text-white">website link</label>
                <input
                  type="text"
                  name="website link"
                  class="form-control"
                  placeholder="website link"
                  onChange={(e) => setWeblink(e.target.value)}
                />
              </div>
              <br />
              <div class="mt-3">
                <label className="text-white">Skill:</label>
                <select
                  name="SKILLS"
                  id="SKILLS"
                  onChange={(e) => setSkills(e.target.value)}
                >
                  <option value="HTML">html</option>
                  <option value="JAVA">java</option>
                  <option value="CSS">css</option>
                  <option value="PYTHON">python</option>
                </select>
              </div>
              <div class="mt-3">
                <label className="text-white">Gender:</label>
                <select
                  name="Gender"
                  id="SKILLS"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="female">female</option>
                  <option value="male">male</option>
                </select>
              </div>
              <div class="mt-3 text-center">
                <button id="entry" onClick={submit}>
                  ENROLL
                </button>
              </div>
            </form>
            <br />
          </div>
        <div class="col-lg-6 col-sm-12">
          <table className="">
            <thead>
              <tr>
                <th scope="col">firstName</th>
                <th scope="col">lastName</th>
                <th scope="col">phoneNumber</th>
                <th scope="col">email</th>
                <th scope="col">website link</th>
                <th scope="col">skill</th>
                <th scope="col">gender</th>
              </tr>
            </thead>
            <tr>
              {datas.map((data) => {
                return (
                  <>
                    <td>{data.fName}</td>
                    <td>{data.lName}</td>
                    <td>{data.phone}</td>
                    <td>{data.email}</td>
                    <td>{data.webLink}</td>
                    <td>{data.skills}</td>
                    <td>{data.gender}</td>
                  </>
                );
              })}
            </tr>
          </table>
        </div>
        </div>
      </div>
    </>
  );
};
export default Register;
