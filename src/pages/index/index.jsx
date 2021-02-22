import React, { useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
// 通过导入子组件
import Child from './Child.jsx'
import Taro, { Current } from '@tarojs/taro'

function Index() {

  const [transfer, setTransfer] = useState('')
  const [useName] = useState('lxy.vcom')
  
  useEffect(() => {
    // Current=Taro.getCurrentInstance
    setTransfer(Current.router.params.transfer)
  }, [])
  return (
    <View>
      <Text>{useName}</Text>
      <Child userchild={useName}></Child>
      <View>{transfer}</View>
    </View>
  )
}
export default Index; 