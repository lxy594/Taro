import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import React from 'react'
function Test() {
    const gotoIndex = () => {
        // 可以返回到上一级
        Taro.navigateTo({ url: '/pages/index/index' })
        
        // 不可以返回到上一级
        // Taro.reLaunch({url:'/pages/index/index'})

        //返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
        //Taro.navigateBack({url:'/pages/index/index'})
    }
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