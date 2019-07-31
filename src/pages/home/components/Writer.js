import React, { PureComponent } from 'react'
import { WriterWrapper, WriterTitle, WriterSwitch, WriterList, WriterListItem, WriterListInfo } from '../style'
import { connect } from 'react-redux'
class Writer extends PureComponent {
    render () {
        const { writerList } = this.props
        return (
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <WriterSwitch>
                        <i className="iconfont spin">&#xe851;</i>
                        换一换
                    </WriterSwitch>
                </WriterTitle>
                <WriterList>
                    {
                        writerList.map((item, index) => (
                            <WriterListItem key={index}>
                                <img src={item.get('avatar_source')} alt="头像"/>
                                <WriterListInfo>
                                    <span className="focus">
                                        <i className="iconfont spin">&#xe618;</i>
                                        关注
                                    </span>
                                    <h3 className="name">{item.get('nickname')}</h3>
                                    <p className="info">写了{item.get('total_wordage') / 1000}k字 · {item.get('total_likes_count') / 1000}k喜欢</p>
                                </WriterListInfo>
                            </WriterListItem>
                        ))
                    }
                </WriterList>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    writerList: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer)