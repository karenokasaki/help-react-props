import style from "./idCard.module.css"

export function IdCard(props) {
    return (
        <div className={style.container}>
            <p>Primeiro nome: {props.firstName}</p>
            <p>Sobrenome: {props.lastName}</p>
            <p>Genero: {props.gender}</p>
            <p>Height: {props.height}</p>
            <img src={props.picture} alt="foto" />
        </div>
    )
}