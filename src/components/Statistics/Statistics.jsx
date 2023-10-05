export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    
    return (<ul>
        <li>
            <p>Good: {good}</p>
        </li>
        <li>
            <p>Neutral: {neutral}</p>
        </li>
        <li>
            <p>Bad: {bad}</p>
        </li>
        <li>
            <p>Total: {total(good, neutral, bad)}</p>
        </li>
        <li>
            <p>Positive feedback: {positivePercentage(good, neutral, bad)}%</p>
        </li>
    </ul>)
    
}