import { useEffect, useState } from "react";
import { CardArrows } from "./CardArrows";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";

export const Card = ({ users, pedir}) => {

    const [index, setIndex] = useState(0);
    const [textos, setTextos] = useState({});

    const previus = () => {
        setIndex(index - 1);
        if(index <= 0){
            setIndex(0);
        }
    }

    const next = () => {
        setIndex(index + 1);
        if(index === users.length-10 ){
            pedir();
            console.log('pedi usuarios nuevos');
        }
        

    };

    const getTextos = (name) => {
        switch (name) {
            case 'user':
                setTextos({
                    h4: 'My name is',
                    h2: `${users[index].name.first} ${users[index].name.last}`,
                    name: 'user'
                });
                break;
            case 'email':
                setTextos({
                    h4: 'My email is',
                    h2: `${users[index].email}`,
                    name: 'email'
                });
                break;
            case 'phone':
                setTextos({
                    h4: 'My phone is',
                    h2: `${users[index].phone}`,
                    name: 'phone'
                });   
                break;
            case 'address':
                setTextos({
                    h4: 'My address is',
                    h2: `${users[index].location.street.name} / ${users[index].location.street.number}`,
                    name: 'address'
                });
                break;
            case 'birthday':
                setTextos({
                    h4: 'My birthday is',
                    h2: `${users[index].dob.date.slice(8,10)} / ${users[index].dob.date.slice(5,7)} / ${users[index].dob.date.slice(0,4)}`,
                    name: 'birthday'
                });
                break;
            case 'password':
                setTextos({
                    h4: 'My password is',
                    h2: `${users[index].login.password}`,
                    name: 'password'
                });
        }

    }

    useEffect(() => {
        getTextos('user')
    },[index]);

    return (
        <div className="card">

            <CardBody user={users[index]} textos={textos}/>
            <CardArrows previus={previus} next={next} index={index}/>
            <CardFooter getTextos={getTextos} textos={textos}/>
        </div>
    );
};