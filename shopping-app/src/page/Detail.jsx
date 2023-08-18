import React from 'react'
import { useParams } from 'react-router-dom';

const Detail = ({props}) => {
  console.log('props: ', props);
  
  let {id} = useParams();
  id = parseInt(id);
  console.log('props: ', id);
  const { title, content, price, imgUrl} = props.find(item => id === item.id);
  // const { title, content, price, imgUrl} = props.filter(item => id === item.id)[0];

  console.log('title: ',id, title, content, price, imgUrl);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={"../"+imgUrl} alt={title} width='95%'/>
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{title}</h4>
          <p>{content}</p>
          <p>{price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail


// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// const Detail = (props) => {
//   let { id } = useParams();
//   // id = parseInt(id);
//   // console.log(id);
//   // const { title, imgUrl, content, price } = props.data[id];
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     const parsedId = parseInt(id);
//     const product = props.data.find(item => item.id === parsedId);
//     setSelectedProduct(product);
//   }, [id, props.data]);

//   if (!selectedProduct) {
//     return <div>Loading...</div>;
//   }

//   const { title, imgUrl, content, price } = selectedProduct;

//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-md-6'>
//           <img src={'../' + imgUrl} alt={title} width='90%' />
//         </div>
//         <div className='col-md-6'>
//           <h4 className='pt-5'>{title}</h4>
//           <p>{content}</p>
//           <p>{price}</p>
//           <button className='btn btn-danger'>주문하기</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Detail