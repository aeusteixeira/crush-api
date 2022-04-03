function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <h1>
                Tempo
            </h1>
            <p>
                {dynamicDateString} (dinamico)
            </p>
            <p>
                {props.staticDateString} (estatico)
            </p>
        </div>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString,
        },
    }
}

export default Tempo;