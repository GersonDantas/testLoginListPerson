import {createMuiTheme} from '@material-ui/core/styles'
import {red, green} from '@material-ui/core/colors'

export default createMuiTheme({
    palette: {
        primary:{
            main: '#fff',
        },
        secondary: {
            main: '#0c8ef7'
        },
        error: {
            main: red.A700,
        },
        background: {
            default: 'linear-gradient(to left top, #8C8B8B 30%, #6bb4ef 70%)'
        },
        success: {
            main: green.A400 
        },
        info: {
            main: '#3a3a3a'
        }
    },
})