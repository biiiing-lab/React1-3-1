# 6월 12일 수업
## css란?
- 사용자에게 문서를 보여줄 때, 문서의 스타일을 꾸밀 때 사용하는 스타일 시트 언어
- 글꼴, 배경색 등 지정, 선택자와 스타일로 이루어져 있음
- 선택자 -> 적용 스타일을 세미콜론으로 구분하여 작성

## 레이아웃과 관련된 속성(display, visibillity, position, flex box, font)
### display 
- 화면에 어떻게 배치할 것인가 결정하며 기본 값 변경이 가능함
- none, block, inline, inline-block 총 네가지의 값이 있음

### visibillity
- 엘리먼드의 가시성
- 화면에 보여주거나 숨기는 기능을 주로 함
- visible, hidden, collapse, inherit 총 네 가지의 값이 있음

### position
- 엘리먼트를 어디에다 위치할 것인지 정의
- top, left, bottom, right 총 네 가지의 속성이 있음

### flex box
- flex box 내 아이템 간 공간 배분과 강력한 정렬 기능을 제공
- 1차원 레이아웃 모델로 설계
- Container, item으로 구성

### font
- 글꼴 관련

# 6월 11일 수업
## specialization(특수화)
- 한 컴포넌트를 다른 컴포넌트로부터 파생 시켜 특정한 기능이나 속성을 추가하거나 수정
- 구별이 되게 구체화를 할 때 사용하는 용어
- 재사용하며 새로운 특성 부여 가능
- 합성을 사용

## containment + specialization
- 한 컴포넌트가 다른 컴포넌트를 자식 요소로 포함하는 것을 의미하며, 중첩된 구조를 만들어낼 수 있음
- prop.children을 사용하며 정의한 props를 사용

## 리액트 상속
- 자식 클래스는 상위 클래스의 속성을 가질 수 있음
- 보통 containment를 더 많이 사용하는 경향이 있음

## context
- 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 전체의 데이터를 제공할 수 있음
- 애플리케이션 안의 여러 컴포넌트들에 전해줘야 하는 경우 번거로울 수 있음
- 전역적 데이터를 공유할 수 있는 방법

### context api

``` const MyContext = React.createContext(defaultValue);```
- context 객체를 만들고, 트리 상위에서 가장 가까이 있는 짝이 맞는 provider로부터 현재값을 읽음

### context provider
```<MyContext.Provider value={/* 어떤 값 */}>```
- context를 구ㅈ독하는 컴포넌트들에게 context의 변화를 알리는 역할
- value props를 받아 하위 컴포넌트에게 전달하며, 제한은 없음
- provider 하위에서 context를 구독하는 모든 컴포넌트는 provider의 value props가 바뀔 때마다 다시 렌더링 됨

## useContext
- 기존에 React에 존재하는 Context를 더 편하게 사용하 수 있는 역할을 제공

## useState vs useContext
**userState** 컴포넌트 내부의 상태를 관리하고, 컴포넌트가 리렌더링 될 떄마다 해당 상태가 유지됨 <br>
**useContext** 전역 상태를 관리하고, 여러 컴포넌트 간에 같은 상태를 공유해야 하는 경우 사용

따라서, 컴포넌트 내부에서만 사용되는 상태에서는 **useState**를 사용하고, 여러 컴포넌트에서 공유되어야 하는 상태에서는 **useContext**를 사용한다.

# 6월 5일 수업
## shared state
- 부모 컴포넌트의 state를 공유하여 사용하며, 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우

### Lifting state up (끌어올리기)
- 두 컴포넌트의 state가 함께 변경 되는 것을 구현하려면 state를 따로 관리하면 안 되며, 부모 컴포넌트에서 state를 만든 뒤 props를 통해 state를 각각 전달하는 행위

## composition(합성), Containment
- 하나 이상의 컴포넌트를 결합하여 새로운 컴포넌트를 생성하는 방식
- childern props를 사용하여 자식 element를 출력에 그대로 전달하며, childern props는 리액트에서 기본적으로 제공

# 5월 29일 수업
## form
- 사용자의 입력 받기

## 제어 컴포넌트
- 리액트의 입력 폼 element를 의미

## textarea
- 여러 내용을 받기 위한 텍스트 박스

## select
- 드롭다운 메뉴 태그

## file input
- 읽기 전용이며, 비제어 컴포넌트

# 5월 22일 수업
## 리스트, 키
- 리스트 Array : 변수나 객체를 하나의 변수로 묶어 놓은 것
- 키 Key : 객체나 아이템을 구분할 수 있는 고유의 값
```
function NumberList(props) {
    const {numbers} = props;

    const listItems = numbers.map((number) => 
        <li>{number}</li>
    );

    return (
        <ul>{listItems}</ul>
    )
}

const numbers = [1, 2, 3];
ReactDOM.render(
    <NumberList numbers = {numbers} />,
    document.getElementById('root');
)
```

## 더 알아보기
- 리액트에서의 키의 값은 같은 리스트에 있는 에릴먼트 사이에서만 고유한 값이면 됨
- 키 값으로 인덱스를 사용하는 방법
- 리엑트에서는 키를 명시적으로 넣어 주지 않으면 기본적으로 인덱스 값을 키값으로 사용

# 5월 8일 수업
## 이벤트 전달
- 이벤트 발생 -> 이벤트 리스너
```
function MyButton(props) {
    const delete = (id, event) {
        console.log(id, event.target);
    };

    return(
        <button onClick={(event) => delete(1, event)}> delete </button>
    )
}
```

## 아귀먼트 전달
- 함수를 정의할 때는 파라미터 혹은 매개변수, 함수를 사용하 때는 아귀먼트 또는 인수라고 불림
- 이벤트 핸들러에 매개변수를 전달해야하는 경우도 많음
- 화살표 함수, 바인드, event 매개변수

## 조건부 렌더링
### 정의
>> 조건에 따른 렌더링, 어떠한 조건에 따라서 렌더링이 달라지는 것
```
function Greeting(props) {
    const isIn = props.isIn;

    if(insIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}
```

### 엘리먼트 변수
- 엘리먼트를 변수처럼 저장해서 사용하는 방법

## 인라인
> 조건문을 코드 안에 집어넣는 것이며, if 문을 필요한 곳에 직접 집어 넣어서 사용하는 방법
```
funcion UserState(props) {
    return (
        <div> now {props.isIn ? "login O" : "login X"} </div>
    )
}
```

## 컴포넌트 렌더링 막기
- null return

# 5월 1일 수업
## 훅의 규칙
- 최상위 레벨에서만 호출
- 함수형 컴포넌트에서만 훅을 호출
- JS 함수에서는 호출 X
- 직접 만든 컴포넌트, 커스텀에서만 가능

## 나만의 훅 만들기 (커스텀 훅), 추출하기
1. 커스텀 훅을 만들어야 하는 상황
2. use로 시작하는 훅을 만들고 내부에서 다른 훅 호출
3. userUserStatus() 커스텀 훅으로 추출

### 기타
- 커스텀 훅은 리액트 기능이 아닌 훅의 디자인에서 자연스럽게 따르는 규칙
- use로 시작하지 않는다면 호출하는지 알 수 없음

### UserListItem 컴포넌트
- 로직이 중복되는 경우에 사용

### 이벤트 처리
#### DOM/react 클릭 이벤트 처리
- 이벤트 이름이 onclick -> onClick 변경 (camel)
- 전달하려는 함수는 문자열에서 함수 그대로 전달
- 이벤트 처리 함수 : 이벤트 핸들러 / 이벤트 발생하는 것을 계속 듣고 있음 : 이벤트 리스너

# 4월 17일 수업
## 훅

### 정의
> 원래 존재하는 어떤 기능에 갈고리를 거는 것처럼 끼어 들어가 같이 수행되는 것이며, state와 생명주기 기능에 원하는 시점에 정해진 함수를 실행

### 종류
#### useState
- 기본으로 가장 많이 사용함 <br>
` const[variableName, setFunctionName] = useState(initialValue);`

#### useEffect
- 사이드 이펙트를 수행
- 배열 안에 있는 변수 중에 하나라도 값이 변경 시 실행
- 의존성 배열이 없을 경우 사용시, DOM이 변경 된 이후에 해당 함수를 실행하란 의미로 전달 <br>
`userEffect(effectFunction, dependencyArray)`

#### useMemo
- 렌더링이 일어나는 동안 실행
- 의존성 배열을 넣지 않을 경우 렌더링이 일어날 때마다 매 번 실행
- 배열을 넣지 않으면 의미가 없음

```
const memo = useMemo(
    () => {
        return computeExpensiveValue(dependencyArray1, dependencyArray2);
    },
    [dependencyVariable1, dependencyVariable2]
);
```

#### useRef
- 특정 컴포넌트에 접근할 수 있는 객체
- 변경 가능한 .current 속성을 가진 하나의 상자
- 매번 렌더링 될 때마다 항상 같은 ref 객체 반환 <br>
`const ref = useRef(initialValue);`

# 4월 3일 수업
## props
### 정의
> property 속성, 즉 리액트 컴포넌트의 속성 
- 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체

### 특징
- 읽기 전용 : 입력값을 변경하지 않으며, 같은 입력값에 대해서는 항상 같은 출력값

## 컴포넌트, 컴포넌트 생명 주기
### 종류
- 클래스 : React.Component를 상속 받아서 만듦
- 함수 : 리액트의 컴포넌트를 일종의 함수로 취급

### 생명 주기
- 출생(Mount) : constucture 실행되며 state 정의
- 인생(Update) : `setState()` 변경으로 `forceUpdate()`로 재렌더링 후 `componentWIillUnmount()` 함수 호출
- 사망

### 기타
- 기능 단위로 구분하는 것이 좋음
- 재사용 가능한 형태로 추출

## state
### 정의 
> 리액트 컴포넌트의 상태를 의미하고 리액트 컴포넌트의 변경 가능한 데이터. 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함

### 특징
- js 객체
- 직접적인 변경 불가능
- 변경 시 `setState()` 사용

# 3월 27일 수업
## jsx
### 정의
> A Syntax extension to JavaScript : js 확장 문법
- xml + html

### 역할
- jsx는 내부적으로 xml/html 코드를 js로 변환 -> createElement()
```
class Hello extends React.Componet {
    render() {
        return <div> Hello {this.props.toWhat}</div>
    }
}

ReactDom.render(
    <Hello toWhat = "world" />,
    document.getElementById('root')
); 
```

### 장점
- 코드 간결
- 가독 향상
- 안정성

### 사용법
```
const name = '유빈';
const element = <h1> hi, {name} </hi>;

ReactDOM.render(
    element,
    document.getElementById('root');
)
```

## 엘리먼트
### 정의
> Elements are the smallest building blocks of React apps
- 엘리먼트는 리액트 앱의 가장 작은 빌딩 블록
- 리액트 엘리먼트 -> DOM 엘리먼트의 가상 표현

### 특징
- 불변성
- 변하지 않는 성질
- 기존 엘리먼트를 변경하는 것이 아닌 새로운 엘리멘트를 만들어 기존 엘리먼트와 바꿔치기

# 3월 20일 수업
## 리액트의 정의
> 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리, 자주사용되는 기능을 정리해 모아 놓은 것

> 사용자와 웹사이트의 상호작용을 돕는 인터페이스를 만들기 위한 JS 기능 모음집

### SPA
- Single page application : 하나의 페이지만 존재하는 웹사이트를 의미
- 하나의 html 틀을 만들어 놓고, 특정 페이지를 요청할 때 해당 페이지의 내용을 채워서 보내주는 것

## 리액트의 장단점
### 장점
#### 빠른 업데이트와 렌더링 속도
업데이트 : 웹사이트를 탐색할 때 화면에 나타나는 내용이 바뀌 것

##### DOM
- Document Object Model
- 웹 페이지를 정의하는 하나의 객체
- 웹 사이트에 대한 정보를 모두 담고 있는 큰 그릇

#### 컴포넌트 기반 구조
- 영역에 있는 아이템들
- 컴포넌트들이 모여서 하나의 페이지 -> 페이지는 하나의 컴포넌트 

#### 재사용성, 모바일 앱 개발 가능, 커뮤니티 

### 단점
- 방대한 학습량 
- 복잡도


## 프로젝트 생성 및 실행
`npx create-react-app my-project-name` <br>
`npm start`

# 3월 13일 수업

## Git hub 생성
1. repository 생성
2. vscode git 연동
3. file commint
    - repository로 올리기 전 파일에 대한 메세지를 작성하고 push 전 대기 상태
4. file push 
    - commit 된 상태를 repository로 올리는 행위


## js 기초
### var vs let 
중복 선언 가능, 불가능 차이이며 둘 다 재할당 가능함 

### object 객체 사용
``` 
let obj = {a : "apple", b : "banana", c : "carrot"}
 ```

### 함수
- 화살표 함수 사용
```
function sum(a, b) {
    return a + b;
}

const sum2 = (a, b) => {
    return a + b;
}
```

## node js 설치
### node js
- js로 네트워크 애플리케이션을 개발할 수 있도록 해주는 환경

### npm
- node package manager, node js package manager
- package manager은 외부 패키지들의 버전과 의존상을 관리
- node js 설치시 자동 설치