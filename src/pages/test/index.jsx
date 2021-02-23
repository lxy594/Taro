import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import images from '../../accect/tox.jpg'


function Test() {
    const [transfer, setTransfer] = useState('lxysss')
    const [trans, setTrans] = useState('trans.more.number')
    const gotoIndex = () => {
        Taro.navigateTo({ url: '/pages/index/index?transfer=' + transfer + '&trans=' + trans })
    }

    const contest = [
        { id: 1, name: '小红' },
        { id: 2, name: '小屁' },
        { id: 3, name: '小路' },
        { id: 4, name: '小晓' }
    ]
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

            {
                contest.map((item)=>{
                  return(
                    <View key={item.id}>{item.id}:{item.name}</View>
                  )
                })
            }
        </View>
    )
}
export default Test;