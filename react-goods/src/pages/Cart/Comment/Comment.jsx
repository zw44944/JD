import React, { useContext, useState } from 'react'
import { Input, Rate } from 'antd';
import MyContext from '../MyContext';
const { TextArea } = Input;

export default function Comment(props) {
    // 定义状态
    let [txt, setTxt] = useState('');
    // 评分
    let [score, setScore] = useState(0)

    const context = useContext(MyContext);
    console.log(context);

    function getValue(val) {
        setScore(val)
    }

    // 提交
    function submit() {
        // 获取文本框输入的值，获取分数 
        if (txt != '' && score > 0) {
            // 收集评论信息，发送到后台，==》返回信息 评论是否成功
            // 成功 （1）关闭评论框  （2）评论==》已评论
            // （1）关闭评论框
            props.changeCurrentId('0')
            // （2）评论==》已评论  通知爷爷加载刷新数据（修改指定对象的iscommit false==>true）
            context.changeIsCommit(props.index)

        } else {
            alert('请输入评论内容或者打分')
        }
    }
    // 取消
    function cancel() {
        props.changeCurrentId('0')
    }
    return (
        <div>
            {/* 评论内容 */}
            <div>
                <TextArea rows={4} placeholder='请输入评论内容...' value={txt} onChange={(e) => { setTxt(e.target.value) }} />
            </div>
            {/* 星星打分 */}
            <div>
                评分：<Rate value={score} onChange={getValue} />
            </div>
            <div>
                <button onClick={submit}>提交</button>
                <button onClick={cancel}>取消</button>
            </div>
        </div>
    )
}
