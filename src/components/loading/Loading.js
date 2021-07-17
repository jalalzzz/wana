import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const icon = <AiOutlineLoading3Quarters size={68} color="blue" />;


const Loading = ({text}) => {
    return (
        <div className="loader">
           <span className="loading">
               {icon}
           </span>
           <p>
               Please Wait while loading {text}, this should take a second. 
           </p>
        </div>
    )
}

export default Loading
