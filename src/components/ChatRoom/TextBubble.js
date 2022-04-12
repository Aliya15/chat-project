import TimestampFormatter from '../../utils/TimestampFormatter';
import SecondsToDate from '../../utils/SecondsToDate';

export default function TextBubble({props}) {
    const date = SecondsToDate(props.createdAt.seconds);

    return (
        <div>
            <span>
                {props.author}
            </span>
            <p>
                {props.text}
            </p>
            <span>
                {TimestampFormatter(date)}
            </span>
        </div>
    )
}
