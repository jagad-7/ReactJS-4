import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH SUCCESS':   
        return {
            loading: false,
            post: action.playload,
            error: ''
        }
        case 'FETCH ERROR':
        return {
            
        }
    }
}

function RedDataFetchingTwo() {
  return (
    <div>

    </div>
  )
}

export default RedDataFetchingTwo