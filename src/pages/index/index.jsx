import React, { useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
// 通过导入子组件
import Child from './Child.jsx'
import Taro from '@tarojs/taro'

function Index() {

  const [transfer, setTransfer] = useState('')
  const [useName] = useState('lxy.vcom')
  const [trans, setTran] = useState(' ')

  useEffect(() => {
    // Current=Taro.getCurrentInstance()
    setTransfer(Taro.getCurrentInstance().router.params.transfer)
    setTran(Taro.getCurrentInstance().router.params.trans)
  }, [])
  return (
    <View>
      <Text>{useName}</Text>
      <Child userchild={useName}></Child>
      <View>{transfer}</View>
      <View>{trans}</View>
    </View>
  )
}
export default Index; 