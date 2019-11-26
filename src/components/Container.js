/** @jsx jsx */
import { jsx } from 'theme-ui'

const Container = ({children}) => (
    <section
        sx={{
            width: '90%',
            maxWidth: '800px',
            mx: 'auto',
            my: [4, 5]
        }}
    >
        {children}
    </section>
)

export default Container