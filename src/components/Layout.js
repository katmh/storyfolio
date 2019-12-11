/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import Container from './Container'
import SEO from './SEO'
import theme from '../gatsby-plugin-theme-ui/index'

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <Global
            styles={{
                body: {
                    margin: 0
                },
                '*': {
                    boxSizing: 'border-box',
                    margin: 0,
                    padding: 0
                },
                a: {
                    color: '#39c',
                },
                'a:visited': {
                    color: '#366',
                },
                '.external': {
                    color: '#f69'
                },
                'code, kbd': {
                    display: 'inline-block',
                    background: '#ededed',
                    padding: '0 7.5px',
                }
            }}
        />
        <SEO />
        <Container>
            {children}
        </Container>
    </ThemeProvider>
)

export default Layout