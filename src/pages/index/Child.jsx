import React from 'react'
import {View,Text} from '@tarojs/components'
function Child(props){
    return(
        <View>
            {/* Child父组件前面的是什么对应的props.是什么 */}
            <Text>我是子组件 父组件向我传值:{props.userchild}</Text>
        </View>
    )
}
export default Child;