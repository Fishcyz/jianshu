import styled from 'styled-components'

export const HomeWrapper = styled.div `
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div `
    width: 640px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;

    .banner-img{
        width: 625px;
        height: 270px;
    }
`

export const HomeRight = styled.div `
    width: 280px;
    float: right;
`

export const TopicWrapper = styled.div `
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.span `
    float: left;
    background: #F7F7F7;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #bcbcbc;
    border-radius: 4px;

    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div `
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;

    .pic{
        display: block;
        float: right;
        width: 150px;
        height: 100px;
        border-radius: 10px;
    }
`

export const ListInfo = styled.div `
    width: 480px;
    float: left;
    /* padding-right: 160px; */

    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`

export const InfoMeta = styled.div `
    width: 480px;
    line-height: 20px;
`

export const LoadMore = styled.div `
    width: 640px;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`

export const MetaItem = styled.span `
    margin-right: 10px;
    color: #b4b4b4;
    font-size: 12px;
    line-height: 20px;
    vertical-align: middle;
    cursor: pointer;

    .iconfont {
        margin-right: 5px;
    vertical-align: middle;
    }

    &.active{
        color: #ea6f5a;
    }

    &:hover{
        color: #ea6f5a;
    }
`

export const RecommendWrapper = styled.div `
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div `
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 6px;
`

export const WriterWrapper = styled.div `
    width: 278px;
    /* border: 1px solid #dcdcdc; */
    border-radius: 3px;
    height: 300px;
    text-align: center;
`

export const WriterTitle = styled.div `
    font-size: 14px;
    color: #969696;
    text-align: left;
    overflow: hidden;
`

export const WriterSwitch = styled.span `
    float: right;

    .iconfont {
        margin-right: 5px;
        font-weight: 1em;
        vertical-align: middle;
    }
`

export const WriterList = styled.div `
    overflow: hidden;
`

export const WriterListItem = styled.div `
    margin-top: 15px;
    line-height: 20px;

    img{
        display: block;
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        border: 1px solid #ddd;
        border-radius: 50%;
        vertical-align: middle;
    }
`

export const WriterListInfo = styled.div `
    text-align: left;
    .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }

    .info {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }

    .focus {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
`

export const BackTop = styled.div `
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    color: #ccc;
    font-size: 16px;
    font-weight: bold;
`