import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'

const changeDateil = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title: fromJS(title),
    content: fromJS(content)
})

export const getDetail = (id) => (
    (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data
            dispatch(changeDateil(result.title, result.content))
        })
    }
)