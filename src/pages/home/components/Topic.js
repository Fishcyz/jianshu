import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends PureComponent {
    render () {
        const { topicList } = this.props
        return (
            <TopicWrapper>
                {
                    topicList.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img 
                                    className="topic-pic"
                                    src={ item.get('imgUrl') }
                                    alt="图片"
                                />
                                { item.get('title') }
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic)