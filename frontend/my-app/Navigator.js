import {createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Home from './stacks/home'
import Payment from './stacks/payment'

import Signin from './stacks/signin'


const screens = {

    Home : {
        screen: Signin
    },

    Payment: {
        screen: Payment
    },
    signin:{
        screen: Signin
    }
}

const stack = createStackNavigator()

export default createAppContainer(stack)