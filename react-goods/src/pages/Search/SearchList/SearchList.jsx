import React from 'react'

import style from './SearchList.module.less'


export default function SearchList(props) {
    return (
        <div className={style['hot-house']}>
            <ul className={style.list}>
                {
                    props.list.map(item => {
                        return (
                            <li className={style.item} key={item.id}>
                                <img src={item.img} alt="" />
                                <div className={style.info}>
                                    {/* 左侧 */}
                                    <div className={style.desc}>
                                        <div>{item.title}</div>
                                        <div>楼层：{item.floor}</div>
                                    </div>
                                    {/* 右侧 ：类型 */}
                                    <div className={style.type}>
                                        <span>{item.type}</span>
                                        <div>{item.price}元/月</div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>

        </div>
    )
}
