import { useState } from "react"; // hook 종류 중 useState 사용

export default function Midterm(props) {

    const [fruit, setFruit] = useState(''); // 값에 아무것도 없는 것으로 초기화

    return (
        <div>
            <h1>당신은 어떤 과일을 좋아하나요? {fruit}</h1>
            {/* // 누른 버튼으로 초기화 시키기 */}
            <button onClick={() => setFruit('사과')}>사과</button>
            <button onClick={() => setFruit('오렌지')}>오렌지</button>
            <button onClick={() => setFruit('바나나')}>바나나</button>
        </div>
    )

}