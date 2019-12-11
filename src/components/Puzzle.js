/** @jsx jsx */
import { jsx } from 'theme-ui'

const Puzzle = (props) => (
    <div sx={{
        display: 'block',
        fontFamily: 'body',
        fontSize: 4,
        lineHeight: '120%',
        my: 1,
        color: '#787878',
    }}>
        <span sx={{
            display: 'inline-block',
            cursor: 'pointer',
            ':hover ~ .translit': {
                opacity: '1',
                width: '100%',
            }
        }}>
            {props.text} 
        </span>
        <span
            className="translit"
            sx={{
                transition: '.25s',
                opacity: '0',
                width: '0',
            }}
        >
            {' ' + props.transliteration}
        </span>
    </div>
)

export default Puzzle