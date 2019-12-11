/** @jsx jsx */
import { jsx } from 'theme-ui'

const Sidebar = (props) => (
    <aside
        sx={{
            float: 'left',
            mr: '1.8rem',
            'p': {
                fontSize: 2,
                mt: 0,
                mb: 1,
            },
            'ul': {
                width: 'auto',
                background: '#eee',
                boxSizing: 'border-box',
                py: '.6rem',
                px: '.75rem'
            },
            overflow: 'auto',
            'li': {
                my: 0,
                fontSize: 2,
            }
        }}
    >
        {props.children}
    </aside>
)

export default Sidebar