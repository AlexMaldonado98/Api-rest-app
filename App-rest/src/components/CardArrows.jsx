import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";

export const CardArrows = ({next,previus,index}) => {
   
   return(
      <div className="card-arrows">
        <div className="arrow-left" onClick={() => previus()} hidden={index === 0}>
            <BsFillArrowLeftCircleFill />
        </div>
        <div className="arrow-right" onClick={() => next()}>
            <BsFillArrowRightCircleFill />
        </div>
      </div>
   );
};