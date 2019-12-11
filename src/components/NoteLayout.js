/** @jsx jsx */
import { jsx } from 'theme-ui'

const NoteLayout = ({children}) => (
    <div
        sx={{
            'p, li, h1': {
                fontFamily: 'Shadows Into Light !important',
            },
            'p, li': {
                fontSize: '1.75rem',
                lineHeight: '125%',
                letterSpacing: '.4px'
            }
        }}
    >
        <span
            sx={{
                position: 'absolute',
                top: '5rem',
                transform: 'rotate(16deg)',
                marginLeft: '20rem',
                color: '#555'
            }}
        >
            <p>storyfolio notes!</p>
        </span>
        {children}
    </div>
)

export default NoteLayout