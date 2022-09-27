
import React, { useState } from 'react'
import MyTabs from '../../components/MyTabs/MyTabs'

export default function Life() {
  // 定义状态
  let [activeKey, setActiveKey] = useState('1')

  // 回调
  function callback(key) {
    setActiveKey(key)
  }

  return (
    <div>
      <h2>自己封装选项卡组件</h2>
      <MyTabs defaultActiveKey={activeKey} onChange={callback}>
        <div tab="标题1" key="1">内容1</div>
        <div tab="标题2" key="2">内容2</div>
        <div tab="标题3" key="3">内容3</div>

        <div tab="标题4" key="4">内容4</div>

      </MyTabs>
    </div>
  )
}
