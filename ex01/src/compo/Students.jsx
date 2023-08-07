const Students = (props)=>{
  const{no, name, style} = props.Stud;

  return(
    <tr>
      <td>{no}</td>
      <td>{name}</td>
    </tr>
  )
}

export default Students;