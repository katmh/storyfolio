/** @jsx jsx */
import { jsx } from 'theme-ui'

const PullQuote = (props) => (
    <h3
        sx={{
            fontFamily: 'Georgia',
            fontStyle: 'italic',
            fontWeight: '400',
            fontSize: 5,
            my: 4,
            width: ['50%', '80%'],
            mr: 2,
            color: 'textHeading'
        }}
    >
        {props.children}
    </h3>
)

export default PullQuote