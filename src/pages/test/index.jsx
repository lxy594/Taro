import Taro from '@tarojs/taro'
import { View, Text, Button} from '@tarojs/components'
import React, {  useState } from 'react'
// import images from '../../accect/tox.jpg'


function Test() {
    const [transfer, setTransfer] = useState('lxysss')
    const [trans, setTrans] = useState('trans.more.number')
    const gotoIndex = () => {
        Taro.navigateTo({ url: '/pages/index/index?transfer=' + transfer + '&trans=' + trans })
    }

const [remo,setRemo]=useState([])
    // 请求远程数据
    const getremote=()=>{
        Taro.request({
            url:'https://apiblog.jspang.com/default/getArticleList'
        }).then(res=>{
            console.log(res.data);
            setRemo(res.data.list)
        })
    }

    return (
        <View>
            <Text>
                新建的文件
            </Text>
            <Button onClick={gotoIndex}>跳转到index页面</Button>
            
            {/*请求远程数据  */}
            <Button onClick={getremote}>获取数据列表</Button>
            {
                remo.map((item)=>{
               return(
                <View key={item.id} style='font-size:10px; margin:10px'>{item.title}</View>
               )
                })
            }
        </View>
    )
}
export default Test;