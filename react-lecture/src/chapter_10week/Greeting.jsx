export default function Greeting(props) {
    if(props.isLogedIn) {
        return <p> 환영합니다</p>
    } 
    return <p> 로그인 해주세요</p>
}