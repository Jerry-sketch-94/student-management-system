import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Staff() {
  const [students, setStudents] = useState([
    { name: "Alfin", dept: "CSE", admissionNo: "10778", dob: "2001-01-01" },
    { name: "Jerry", dept: "ECE", admissionNo: "10890", dob: "2000-05-12" }
  ]);

  const [newStudent, setNewStudent] = useState({
    name: "",
    dept: "",
    admissionNo: "",
    dob: ""
  });

  const [showForm, setShowForm] = useState(false);

  
  const handleDelete = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

 
  const handleAdd = () => {
    if (
      newStudent.name.trim() &&
      newStudent.dept.trim() &&
      newStudent.admissionNo.trim() &&
      newStudent.dob.trim()
    ) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: "", dept: "", admissionNo: "", dob: "" });
      setShowForm(false); 
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Staff</h2>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Add +"}
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="card p-3 mb-3 shadow-sm">
          <h5>Add New Student</h5>
          <div className="row g-2">
            <div className="col-md-3">
              <input
                type="text"
                name="name"
                value={newStudent.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name="dept"
                value={newStudent.dept}
                onChange={handleChange}
                className="form-control"
                placeholder="Department"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name="admissionNo"
                value={newStudent.admissionNo}
                onChange={handleChange}
                className="form-control"
                placeholder="Admission No"
              />
            </div>
            <div className="col-md-3">
              <input
                type="date"
                name="dob"
                value={newStudent.dob}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
          <button className="btn btn-success mt-3" onClick={handleAdd}>
            Save Student
          </button>
        </div>
      )}

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Student Name</th>
            <th>Department</th>
            <th>Admission No</th>
            <th>DOB</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.dept}</td>
              <td>{student.admissionNo}</td>
              <td>{student.dob}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {students.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                No students added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Staff;
