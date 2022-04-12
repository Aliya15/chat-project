import TimestampFormatter from '../../utils/TimestampFormatter';
import SecondsToDate from '../../utils/SecondsToDate';
import './TextBubble.scss'

export default function TextBubble({props}) {
    const date = new Date(TimestampFormatter(SecondsToDate(props.createdAt.seconds)));

    return (
        <div className='text-bubble'>
            <div className='text-bubble_user'>
                {/*<img src={props.photoURL} alt='photo' className='text-bubble_photo'></img>*/}
                <span>{props.author}</span>
            </div>
            <div className='text-bubble_message'>
                <p>{props.text}</p>
                <span>{date.toLocaleString()}</span>
            </div>
        </div>
    )
}
