import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

function Index(){
const [useName,setUsename]=useState('lxy.vcom')
return(
  <View>
  <Text>{useName}</Text>
  </View>
)
}
export default Index; 