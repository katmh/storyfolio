/** @jsx jsx */
import { jsx } from 'theme-ui'

const RadioForm = (props) => (
    <div
        sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            fontFamily: 'body',
            fontSize: 3,
            lineHeight: '150%',
            mt: 4,
            'input': {
                mr: 2,
            }
        }}
    >
        <div
            sx={{
                color: '#555'
            }}
        >
            <input type="radio" id="ms" name="ms" value="Math and science" />
            <label for="ms">Math and science</label><br/>
            
            <input type="radio" id="he" name="he" value="History and English" />
            <label for="he">History and English</label>
        </div>

        <div
            sx={{
                color: '#999'
            }}
        >
            <input type="radio" name="ms" value="Math and science" disabled />Math and science<br/>
            <input type="radio" name="he" value="History and English" disabled />History and English
        </div>
    </div>
)

export default RadioForm