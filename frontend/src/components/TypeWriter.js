import useTypewriter from "../hooks/useTypeWriter";


const Typewriter = ({ text, speed, className }) => {
    const displayText = useTypewriter(text, speed);
  
    return <h1 className={className}>{displayText}</h1>;
};
  
export default Typewriter;