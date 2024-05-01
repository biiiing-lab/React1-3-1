import { useState, useEffect } from "react";

export default function UserStatus(props) {
    const[isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        // 온라인인지 아닌지 구분
        ServerAPI.subscripeUserStatus(props.user.id, handleStatusChange) // user의 id값을 가지고 옴
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange)
        }
    })

    return isOnline;
    
    // // 유저 상태
    // if(isOnline == null) {
    //     return '대기중';
    // }
    // return isOnline ? '온라인' : '오프라인';
}