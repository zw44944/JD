import React, { useState } from 'react'
import Comment from '../Comment/Comment'
import './CartList.less'

export default function CartList(props) {
    // 定义状态
    // let [isShow,setIsShow]=useState(false)  //一个变量控制不可以
    let [currentId, setCurrentId] = useState('0');
    // 去评论
    function goComment(id) {
        setCurrentId(id)
    }
    return (
        <div>
            <div className="cart-list">
                {
                    props.list.map((item,index) => {
                        return (
                            <div className="cart-item" key={item.id}>
                                <div className='cart-outer'>
                                    {/* 图片 */}
                                    <img className='cart-img' src={item.img} alt="" />

                                    {/* 基本信息 */}
                                    <div className="cart-info">
                                        <div>标题：{item.title}</div>
                                        <div>户型：{item.huxing}</div>
                                        <div>价格：{item.price}</div>
                                    </div>
                                    {/* 评论 */}
                                    <div className="cart-comment">
                                        {
                                            item.iscommit ? <div className='gray'>已评论</div> :
                                                <div onClick={() => { goComment(item.id) }}>评论</div>
                                        }
                                    </div>
                                </div>
                                {/* <div>
                                    currentId:{currentId}
                                </div>
                                <div>
                                    item.id:{item.id}
                                </div> */}
                                {
                                    currentId === item.id ? <Comment  changeCurrentId={goComment} index={index}/> : ''
                                }

                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}
