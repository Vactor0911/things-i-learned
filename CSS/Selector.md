# Selector 선택자
HTML 요소를 선택하는 방법

<br />

## 기본 선택자

- **전체 선택자 (Universal Selector)**
    - `*` 로 선택
    - 브라우저 기본 스타일을 초기화 하려고 할 때 자주 사용
    ```css
    * {
        margin: 20;
        padding: 0;
        text-align: center;
    }
    ```
- **타입 선택자 (Type selector)**
    - `태그명` 으로 선택 (h1, p 등)
    ```css
    h2 {
        color: skyblue;
    }
    ```
- **클래스 선택자 (Class selector)**
    - `.클래스명` 으로 선택
    ```css
    .highlight {
        color: black;
        font-weight: bold;
        background-color: yellow;
    }
    ```
- **ID 선택자 (ID selector)**
    - `#아이디명` 으로 선택
    - id 선택자는 웹 문서에서 고유한 하나의 태그에만 사용해야 함
    ```css
    #select {
        color: red;
        font-weight: bold;
    }
    ```
- **속성 선택자 (Attribute selector)**  
    **선택자 목록**
    - `[attr]`
    - `[attr=value]`
    - `[attr~=value]`
    - `[attr|=value]`
    - `[attr^=value]`
    - `[attr$=value]`
    - `[attr*=value]`

    ```css
    span[id] { /* id 속성을 가진 모든 <span> 요소 */
        background-color: lightskyblue;
    }

    a[target="_parent"] { /* target 속성값이 "_parent"와 일치하는 <a> 요소 */
        color: crimson;
    }

    a[href*="ko"] { /* href 속성값에 "ko"를 포함하는 <a> 요소 */
        color: blue;
        font-weight: bold;
    }

    h2[class^="l"] { /* class 속성값이 "l"로 시작하는 h2 요소 */
        color: chartreuse;
    }

    h2[class$="n"] { /* class 속성값이 "n"으로 끝나는 h2 요소 */
        color: gold;
    }

    p[class~="paragraph"] { /* class 속성값에 "paragraph"라는 단어가 포함된 <p> 요소 | 각 단어는 띄어쓰기로 구분됨 */
        font-weight: bold;
    }
    ```