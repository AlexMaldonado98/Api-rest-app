export const CardFooter = ({getTextos,textos}) => {
   
    const onMouseEnter = (e) =>{
        document.querySelectorAll('li > img').forEach((grupo) => {
            grupo.className = '';
        })
        e.target.className = 'activo';
        getTextos(e.target.name);
    }


   return(
      <div className="card-footer">
         <ul>
            <li>
                <img className={textos.name === 'user' ? 'activo' : ''} onMouseEnter={onMouseEnter} name='user' src="/img/user.svg" alt="" />
            </li>
            <li>
                <img className={textos.name === 'email' ? 'activo' : ''} onMouseEnter={onMouseEnter} name='email' src="/img/email.svg" alt="" />
            </li>
            <li>
                <img className={textos.name === 'phone' ? 'activo' : ''} onMouseEnter={onMouseEnter}  name='phone' src="/img/phone.svg" alt="" />
            </li>
            <li>
                <img className={textos.name === 'address' ? 'activo' : ''} onMouseEnter={onMouseEnter}  name='address' src="/img/address.svg" alt="" />
            </li>
            <li>
                <img className={textos.name === 'birthday' ? 'activo' : ''} onMouseEnter={onMouseEnter} name='birthday' src="/img/birthday.svg" alt="" />
            </li>
            <li>
                <img className={textos.name === 'password' ? 'activo' : ''} onMouseEnter={onMouseEnter}  name='password' src="/img/password.svg" alt="" />
            </li>
         </ul>
      </div>
   );
};