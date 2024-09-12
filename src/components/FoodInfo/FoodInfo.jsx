import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Btn from '../../assets/img/foodinfo/icon_back.png';
import FoodDetail from './FoodDetail';
import DrinkDetail from './DrinkDetail';
import DessertDetail from './DessertDetail';
import { useNavigate } from 'react-router-dom'


const FoodInfo = () => {
  const navigation = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [food, setFood] = useState(true);
  const [drink, setDrink] = useState(true);
  const [dessert, setDessert] = useState(true);

  const view_food = () => {
    setFood(!food);
  };
  const view_drink = () => {
    setDrink(!drink);
  };
  const view_dessert = () => {
    setDessert(!dessert);
  };

  const back = () => {
    setIsExiting(true); 
    setTimeout(() => {
      navigation('/'); 
    }, 400); 
  };

  return (
    <motion.div
      className='FoodInfo_wrap container'
      initial={{ opacity: 1, x: 0 }}
      animate={isExiting ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.4 }}
    >

      <header>
        <div className="back_btn" onClick={back}><img src={Btn} alt="뒤로가기" /></div>
        <div className="title">푸드 트럭 영양 정보</div>
      </header>
      <main>

      <div className="category">
        <div className={`cate_food ${food ? 'onClick' : ' '}`} onClick={view_food}>식사류</div>
        <div className={`cate_drink ${drink ? 'onClick' : ' '}`} onClick={view_drink}>음료</div>
        <div className={`cate_dessert ${dessert ? 'onClick' : ' '}`} onClick={view_dessert}>디저트</div>
      </div>


      <div className={food ? '' : 'hide'}>
        <FoodDetail />
      </div>

      <div className={drink ? '' : 'hide'}>
        <DrinkDetail />
      </div>

      <div className={dessert ? '' : 'hide'}>
        <DessertDetail />
      </div>
      </main>
    </motion.div>
  )
}

export default FoodInfo
