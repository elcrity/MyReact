import React from "react";
import Employee from "./Employee";

const Comp02 = () => {
  const employee = [
    {
      no: 202301,
      name: 'hong',
      dept: '서당'
    },
    {
      no: 202302,
      name: 'baek',
      dept: '마당'
    },
    {
      no: 202303,
      name: 'bak',
      dept: '마당'
    }
  ]
  return (
    <div>
      <h1>props란</h1>
      {employee.map(emp =>
        <Employee key={emp.no} emp={emp}></Employee>
      )}
      {/* <h1>props란</h1>
      {employee.map(emp => {
        return <Employee emp={emp}></Employee>
      })} */}
    </div>

  )

}
export default Comp02;