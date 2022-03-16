import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import  './props_shoping';
//import ShopingApp from './App';


function ShopingApp (Props){



  return (
  <>
<div className='cards'>
<div className='card'>
<img src={Props.imgsrc }  className='cart_img' />
<div className="card_title">
  <h3 className='title'> {Props.title}</h3>
  <p className='description'>{Props.description} </p>
  <h4 className='pricing'>{Props.price} </h4>

</div>
<div className='cart_btn'>
<a href={Props.link} target='_blank'>
<button className='cart_btn'>{Props.button}</button>
</a>

</div>
</div>
</div>



  </>
  );


}



ReactDOM.render(
  <>
  {/** Implementing custom attributes/Props with different cart  */}

<ShopingApp 
imgsrc= "https://cdn.pixabay.com/photo/2017/01/13/04/56/blank-1976334_640.png"
title="Cotton T- Shirt"
description="Comfortable and pure Cotton T- shirt "
price="Rs 250 50% Off"
link=""
button="Add Cart"
/>

<ShopingApp 

imgsrc= "https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_640.png"
title="Cotton T- Shirt"
description="Comfortable and pure Cotton T- shirt "
price="Rs 250 50% Off"
link=""
button="Add Cart"
/>

<ShopingApp

imgsrc= "https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852113_640.png"
title="Cotton T- Shirt"
description="Comfortable and pure Cotton T- shirt "
price="Rs 250 50% Off"
link=""
button="Add Cart"
/>
  
  </>,
  document.getElementById('root')
);


