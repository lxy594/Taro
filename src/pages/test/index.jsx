import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import React, { useEffect, useState } from 'react'

//资源引入
import {imhone,imgtwo} from '../../toolsimg'

function Test() {
    const [transfer, setTransfer] = useState('lxysss')
    const [trans, setTrans] = useState('trans.more.number')
    const gotoIndex = () => {
        Taro.navigateTo({ url: '/pages/index/index?transfer=' + transfer + '&trans='+trans })
    }

    useEffect(()=>{
        imgtwo()
        imhone()
    },[])
    return (
        <View>
            <Text>
                新建的文件
            </Text>
            <Button onClick={gotoIndex}>跳转到index页面</Button>
        </View>
    )
}
export default Test;