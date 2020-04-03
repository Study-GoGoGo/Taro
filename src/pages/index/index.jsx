import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor (props) {
    super(props)
    this.state = {
      // 创建一个初始的 Todolist
      list: [
        'get up',
        'coding',
        'sleep',
      ],
      inputVal: ''
    }
  }
  // 添加按钮 onClick 时，添加事项，然后更新 list
  addItem () {
    let {list, inputVal} = this.state
    // 如果输入框的值为空，则返回，否则添加到事项列表里
    if (inputVal == '') return
    else {
      list.push(inputVal)
    }
    this.setState({
      list,
      inputVal: ''
    })
  }
  // 根据索引删除事项，然后更新 list
  delItem (index) {
    let { list } = this.state
    list.splice(index, 1)
    this.setState({
      list
    })
  }
  // 输入框 onInput 的时候，它的值暂存起来
  inputHandler (e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  render () {
    let { list, inputVal } = this.state
    return (
      <View className='index'>
        <Input className='input' type='text' value={inputVal} onInput={this.inputHandler.bind(this)} />
        <Text className='add' onClick={this.addItem.bind(this)}>添加</Text>
        <View className='list_wrap'>
          <Text>Todo list</Text>
          {
            list.map((item, index) => {
              return <View>
                <Text>{index + 1}.{item}</Text>
                <Text className='del' onClick={this.delItem.bind(this, index)}>删除</Text>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}
