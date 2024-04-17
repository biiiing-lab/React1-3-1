# react1-1

3월 20일 강의

# 202230327 장유빈

## 3월 13일 강의 내용
### github 사용법

## 3월 20일 강의 내용
- 컴포넌트, 리액트 개념, npm install 및 start

## 3월 27일 강의 내용 : JSX
**xml**
 - 사용자 정의를 위하여 많이 사용함. 리액트에서는 컴포넌트 단위로 개발하는데, 컴포넌트를 태그화함
 - JS에 XML을 추가한 확장 문법

 **JSX의 역할 )** 내부적으로 XML, HTML 코드를 자바스크립트로 변환. 리액트가 createElement함수를 자동으로 자바스크립트로 변환함. 가독성을 높여 주는 역할
 - 코드 간결
 - 자바스크립트 문법 지원, xml, html 섞어서 사용함 -> {} 사용
 - 태그 안에 속성값을 넣고 싶을 때 const element = div 사용

        Book, Library jsx 파일 생성 후 실습

**엘리먼트 )** 리액트 앱을 구성하는 요소, 가장 작은 빌딩 블록들. 웹 -> HTML 요소 의미
- 변화한 부분만 있어 가벼움
- virtual dom 형태를 취하고 있음
- js 객체의 형태이며, 내보의 모든 children을 포함, 마음대로 변경할 수 없는 불변성을 가지고 있음. 새로운 엘리먼트를 생성하고, 이전 엘리먼트와 교체를 하는 방법으로 변경할 수 있음(virtual dom)
- 메모리 관리가 효율적이며 업데이트 속도가 빠름

**엘리먼트 렌더링** div 태그 안에 리액트 엘리먼트가 렌더링, root dom node <br>

       < div id = "root></ div> <br>
        const element = < h1 > blah < h 1 > <br>
        ReactDom.render(element, document.getElementById('root')) <br>

- 렌더링된 엘리먼트 업데이트 <br>
    
        function tick() {
            const element = (
                <div id = "time">
                    현재 시간 : {new Date().toLocaleTimeStirng()}
                </div>
            );

            ReactDom.render(element, document.getElementById('time'));
        }

## 4월 3일 강의 내용 
- 컴포넌트
- props





  