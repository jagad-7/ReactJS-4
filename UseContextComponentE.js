import React,{useContext} from 'react'
import UseContextComponentF from './UseContextComponentF'
import { UserContext, ChannelContext } from '../App'

function UseContextComponentE() {
    const user = UserContext(UserContext)
    const channel = ChannelContext(ChannelContext)
  return (
    <div>
        {user},
        {channel}
    </div>
  )
}

export default UseContextComponentE