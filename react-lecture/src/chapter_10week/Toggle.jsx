import {useState} from "react"

// 클래스형은 상속받아서 사용하지만 함수형은 상속받지 않으므로 default 사용
export default function Toggle(props) {
    const[isToggleOn, setIsToggleOn] = useState(true);

    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn)
    }

    return (
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    )
}