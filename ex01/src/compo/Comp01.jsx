import Employee from "./Employee";

const Comp01 = () => {
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
    }

  ]

  return (
    <div>
      <h1>props란</h1>
      <Employee emp={employee[0]}></Employee>
      <hr />
      <Employee emp={employee[1]}></Employee>
    </div>
    
  )
}

export default Comp01;