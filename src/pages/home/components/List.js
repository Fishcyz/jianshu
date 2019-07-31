import React, { PureComponent } from 'react'
import { ListItem, ListInfo, InfoMeta, MetaItem, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
class List extends PureComponent {
    render () {
        const { articleList, getMoreList, page } = this.props
        return (
            <div>
                {
                    articleList.map((item, index) => (
                        <Link key={index} to="/detail">
                            <ListItem>
                                <img className="pic" src={item.get('imgUrl')} alt="图片"/>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                    <InfoMeta>
                                        <MetaItem className="active">
                                            <i className="iconfont">&#xe63c;</i>
                                            17.3
                                        </MetaItem>
                                        <MetaItem>木兰姑娘Mulan</MetaItem>
                                        <MetaItem>
                                            <i className="iconfont">&#xe61b;</i>
                                            3
                                        </MetaItem>
                                        <MetaItem>
                                            <i className="iconfont">&#xe60f;</i>
                                            37
                                        </MetaItem>
                                    </InfoMeta>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
    getMoreList (page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState, mapDispatch)(List)