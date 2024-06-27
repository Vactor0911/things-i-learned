# Font 폰트

## 속성
- `font-family` : 종류 지정 (기본값 : 웹브라우저 기본 글꼴)  
    > `,`를 사용하여 여러개의 폰트를 지정해주면 앞의 폰트부터 차례대로 표시하길 시도함  
    ```css
    font-family: 'Roboto', sans-serif;
    ```
- `font-size` : 크기 지정
- `font-style` : 이텔릭 글꼴 지정
- `font-weight` : 굵기 지정 (100 ~ 900)
- `font-variant` : 대소문자 정책 지정

<br />

## 웹 폰트
사용자의 컴퓨터에 설치된 폰트와 상관 없이 온라인의 특정 서버에 위치한 폰트 파일을 다운로드하여 화면에 표시해주는 웹 전용 폰트

[구글 웹 폰트](https://fonts.google.com/)
```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');

h1 {
	font-family: 'Noto Sans KR', 바탕;
}
```

<br />

## 단위
- `px` : 픽셀
- `rem` : 루트 요소(html 요소)의 글꼴 크기
- `em` : 해당 요소의 글꼴 크기 (기본 값은 html 요소와 같은 부모의 폰트 크기)
- `vw` : viewport[^1] 너비의 % (0 ~ 100)
- `vh` : viewport[^1] 높이의 % (0 ~ 100)
- [더 찾아보기](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Values_and_units)

<br />

## 색상
`color` 속성으로 지정하며 색상 값으로는 `16진수`, `rgb`, `hsl`이 사용됨

- `색상 키워드` 표기법  
    대소문자를 구분하지 않는 식별자  
    red, blue, black, lightseagreen처럼 특정 색을 나타냄
    - `transparent` : 완전히 투명한 색 ( rgba(0,0,0,0) )
    - `currentColor` : 해당 요소의 `color` 속성값
- `RGB/RGBA` 표기법  
    빨강(Red), 초록(Green), 파랑(Blue)을 통해 특정 색을 표현  
    경우에 따라 투명도(Alpha) 표현도 가능  
    ```css
    rgb(0,0,0)
    rgba(0,0,0,0)
    ```
- `16진수` 표기법 (HEX)  
    `RGB`를 16진수로 표현  
    6자이며, 2자씩 각각 빨강(Red), 초록(Green), 파랑(Blue)을 나타냄  
    ```css
    #ff0000
    #ff00ff
    ```
- `hsl/hsla` 표기법  
    색상, 채도, 명도를 통해 특정 색상을 표현  
    경우에 따라 투명도(Alpha) 표현도 가능  
    ```css
    hsl(H, S, L)
    hsla(H, S, L, A)
    ```
[Color 속성 MDN 자료](https://developer.mozilla.org/ko/docs/Web/CSS/color_value)

<br />

## 그 외
- `text-align`  
    > 블록 요소(block element), 테이블 셀 박스(table-cell box)안에서 글자를 가로 정렬
- `line-height`  
    > 줄 간격(높이)을 설정  
    > `자간` < `어간` < `행간` 순으로 넓어야 사용자가 읽기 편함  
    > 기본 값은 1.25이며, 1.5 이상이 되어야 읽기 용이해짐
- `letter-spacing`  
    > 글자 자간을 설정
- `word-spacing`  
    > 글자 행간을 설정  
    > `px`나 `em` 단위를 사용해 설정
- `text-indent`  
    > 글자 들여쓰기
- `text-transform`  
    > 대소문자를 뒤바꾸는 설정
- `text-decoration`  
    > 글자를 장식  
    > `<a>` 태그에 밑줄을 없앨 때 많이 사용
- `text-shadow`  
    > 글자에 그림자를 추가  
    > `가로`, `세로`, `번짐`, `색상` 값이 필요
- `list-style` | `list-style-type` 
    > 리스트의 글머리 기호 스타일을 변경
- `white-space`  
    > 요소가 공백 문자를 처리하는 방법 지정
- `word-break`  
    > 텍스트가 콘텐츠 박스 밖으로 오버플로우 되었을 때 줄바꿈을 할지 설정

<br />

---
[^1]: **Viewport** : 브라우저(현재 보이는 화면)의 영역