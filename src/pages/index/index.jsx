import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
// 通过导入子组件
import Child from './Child.jsx'
import './index.less'
function Index(){
const [useName,setUsename]=useState('lxy.vcom')
return(
  <View>
  <Text>{useName}</Text>
  <Child></Child>
  </View>
)
}
export default Index; 