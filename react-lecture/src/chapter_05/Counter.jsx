import React, {useState, useEffect} from "react"

export default function Counter(props) {

    // const [count, setCount] = useState(0) // 초깃값

    function handleStatusChange(status) {
        setIsOnline(status.setIsOnline)
    }



    useEffect(() => {
        ServerAPI.subscribeUserStatu(props.user.id, handleStatusChange)
        return () => {
            ServerAPI.subscribeUserStatu(props.user.id, handleStatusChange)
        }
        // document.title = `총 ${count}번 클릭했습니다`;
    })

    if(isOnline == null) {
        return '대기 중...'
    }
   
    return isOnline ? '온라인' : '오프라인'
}