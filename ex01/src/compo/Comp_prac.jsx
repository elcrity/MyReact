import Students from "./Students";
const style = {
  border: '1px solid black',
  borderCollapse: 'collapse'
}


const Comp_prac = () => {
  const name = ['김궁서', '이희태', '김유진', '구상모', '김재훈', '이한재', '박기웅', '안광현', '임대훈', '노태종', '김영란', '김진', '박상현']
  const list = [];
  for (let i in name) {
    let t = { no: parseInt(i) + 1, name: name[i], style : style };
    list.push(t);
  }

  return (
    <div>
      <table style={style}>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
          </tr>
        </thead>
        <tbody>
          {list.map(std =>
            <Students Stud={std}/>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Comp_prac;