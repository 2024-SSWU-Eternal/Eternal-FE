import React from 'react'
import Btn from '../../assets/img/foodinfo/icon_back.png'
import FoodDetail from './FoodDetail'
import DrinkDetail from './DrinkDetail'
import DessertDetail from './DessertDetail'

const FoodInfo = () => {
  return (
    <div className='FoodInfo_wrap container'>
        <header>
            <div className="back_btn"><img src={Btn} alt="뒤로가기" /></div>
            <div className="title">푸드 트럭 영양 정보</div>
        </header>
        <div className="category">
            <div className="cate_food">식사류</div>
            <div className="cate_drink">음료</div>
            <div className="cate_dessert">디저트</div>
        </div>
        <FoodDetail/>
        <DrinkDetail/>
        <DessertDetail />
    </div>
  )
}

export default FoodInfo
