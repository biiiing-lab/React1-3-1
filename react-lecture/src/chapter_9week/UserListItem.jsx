import UserStatus from "./UseStatus";

export default function UserStatus(props) {
    const isOnline = UserStatus(props.user.id);

    return (
        <li style={{color : isOnline ? 'green' : 'black'}}>
            {props.user.name}
        </li>
    )
}