import React from 'react'
import { Rate } from 'antd';

const styObj = {
    borderBottom: '1px solid #ccc',
    padding: '.2rem'
}

export default function CommentInfo(props) {
    return (
        <>
            {
                props.list.map(item => {
                    return (
                        <div style={styObj} key={item.id}>
                            <div>
                                电话：{item.tel}
                            </div>
                            <div>
                                打分：{item.star}--- <Rate disabled defaultValue={item.star} />
                            </div>
                            <div>
                                评论内容：{item.content}
                            </div>
                        </div>
                    )
                })
            }



        </>
    )
}
