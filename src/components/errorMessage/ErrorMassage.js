import img from './error.webp';

const ErrorMassage = () => {
    return(
        <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}  src={img} alt="Error"/>
    )
}

export default ErrorMassage;