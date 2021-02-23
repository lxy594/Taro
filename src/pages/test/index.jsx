import Taro from '@tarojs/taro'
import { View, Text, Button,Image } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import images from '../../accect/tox.jpg'
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
            <View>
                <Image src={images} style='width:100px height:200px' lazyLoad='false' />
                <Image src={require('../../accect/12.png')} style='margin-left:10px'></Image>
                <Image src='https://cdn.pixabay.com/photo/2021/01/24/20/21/cloud-5946381__340.jpg'></Image>
                </View>
        </View>
    )
}
export default Test;