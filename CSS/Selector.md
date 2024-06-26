# Selector 선택자
HTML 요소를 선택하는 방법

<br />

## 선택자

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
- **그룹 선택자 (Grouping Selector)**
    - `,` 를 사용하여 복수 선택
    - 같은 스타일을 여러 요소에 적용 가능
    ```css
    h2, p {
        margin: 20;
        padding: 0;
    }
    ```

<br />

## 결합자

- **자손 결합자 (Descendant Selector)**
    - `ㅤ` 로 결합
    - 첫 번째 요소의 자손인 태그를 선택
    ```css
    section h2 { /* <section> 요소의 자손인 모든 <h2> 요소 */
        color: blue;
    }
    ```
- **자식 결합자 (Child Selector)**
    - `>` 로 결합
    - 첫 번째 요소의 바로 아래 자식인 태그를 선택
    ```css
    ul > li { /* <ul> 요소의 바로 아래 자식인 모든 <li> 요소 */
        color: deepskyblue;
    }
    ```
- **일반 형제 결합자 (General Sibling Selector)**
    - `~` 로 결합
    - 첫 번째 요소를 뒤따르면서 같은 부모를 공유하는 두 번째 요소를 선택
    ```css
    p ~ span { /* 같은 부모를 공유하면서 <p> 요소 아래에 나오는 모든 <span> 요소 */
        color: red;
    }
    ```
- **인접 형제 결합자 (Adjacent Sibling Selector)**
    - `+` 로 결합
    - 첫 번째 요소의 바로 뒤에 위치하면서 같은 부모를 공유하는 두 번째 요소를 선택
    ```css
    p + code { /* 같은 부모를 공유하면서 <p> 요소 바로 아래에 나오는 하나의 <code> 요소 */
        font-weight: bold;
    }

    .first-item + li { /* 같은 부모를 공유하면서 first-item 클래스를 가진 요소 바로 아래에 나오는 하나의 <li> 요소 */
        color: red;
    }

<br />

## 의사 클래스
선택하고자 하는 HTML 요소의 특별한 '상태'를 명시할 때 사용  
`선택자:의사클래스이름 {속성: 속성값;}` 의 형태로 작성
```css
a:hover {
  color: orange;
}
input:focus {
	color: red;
}	
```

**대표적인 클래스**
- `:link` : href 속성을 가진 `<a>` `<area>` `<link>` 중 방문하지 않은 모든 요소를 선택
- `:visited` : 사용자가 방문한 적이 있는 링크
- `:hover` : 사용자의 마우스 포인터가 요소 위에 올라가 있으면 선택
- `:active` : 사용자가 활성화한 요소(버튼 등)를 선택
- `:focus` : 양식의 입력 칸 등 포커스를 받은 요소. (사용자가 요소를 클릭 또는 탭하거나, 키보드 Tab 키로 선택한 경우)

<br />

## 의사 요소
해당 HTML 요소의 특정 부분만을 선택할 때 사용  
`선택자::의사요소이름 {속성: 속성값;}` 의 형태로 작성
```css
/* 모든 p 요소의 첫 번째 줄. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

**대표적인 요소**
- `::first-letter` : 텍스트의 첫 글자만 선택. (단, 블록 레벨 요소에만 사용 가능)
- `::first-line` : 텍스트의 첫 라인만 선택. (단, 블록 레벨 요소에만 사용 가능)
- `::before` : 특정 요소의 내용 부분 바로 앞에 다른 요소를 삽입할 때 사용
- `::after` : 특정 요소의 내용 부분 바로 뒤에 다른 요소를 삽입할 때 사용
- `::selection` : 해당 요소에서 사용자가 선택한 부분만 선택할 때 사용

<br />

## 참고 자료
[MDN website](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_selectors)