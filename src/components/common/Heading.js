function Heading(props) {
    switch (props.importance) {
        case 'h1':
            return <h1>{props.text}</h1>;
        case 'h2':
            return <h2>{props.text}</h2>;
        case 'h3':
            return <h3>{props.text}</h3>;
        case 'h4':
            return <h4>{props.text}</h4>;
        case 'h5':
            return <h5>{props.text}</h5>;
        case 'h6':
            return <h6>{props.text}</h6>;
        default:
            return <p>{props.text}</p>;
    }
}

export default Heading;