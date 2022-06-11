export const CardBody = ({user,textos}) => {
   
   return(
      <div className="card-body">
        <div className="card-body-img">
            <img src={user.picture.large} alt='' />
        </div>
        <div className="card-body-text">
            <h4>{textos.h4}</h4>
            <h2>{textos.h2}</h2>
        </div>
      </div>
   );
};