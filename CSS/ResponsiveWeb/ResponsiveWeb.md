# Responsive Web 반응형 웹
웹 사이트에서 PC화면 뿐만 아니라 모바일, 태블릿, 노트북 등 여러가지 디바이스의 해상도에 반응하여 각각에 맞는 최적의 화면을 보여주는 홈페이지

## Viewport 뷰포트
웹 브라우저에서 실제 내용이 표시되는 영역  
모바일 viewport와 PC의 viewport는 그 크기가 다름  
반응형 웹 에서는 viewport에 맞게 화면을 보여줘야 함
이를 위해 사용하는 메타태그가 `뷰포트 메타태그` 임

```html
<meta name="viewport" content="속성1=값1, 속성2=값2 ......">
```

**메타태그 속성**
- `width` : 뷰포트 가로 너비
- `height` : 뷰포트 세로 높이
- `user-scalable` : 사용자 확대/축소 가능 여부
    > 속성값으로 `No` 혹은 `Yes` 지정 가능
- `initial-scale` : 초기 화면 비율
- `maximum-scale` : 최대 화면 비율
- `minimum-scale` : 최소 화면 비율

**일반적인 사용법**
뷰포트의 너비를 디바이스(스마트폰 등) 화면 너비에 맞추고 초기화면 배율을 1로 지정
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

**뷰포트 단위**
- `vw (viewport width)` : 뷰포트 가로 너비 (% 단위)
- `vh (viewport height)` : 뷰포트 세로 높이 (% 단위)
- `vmin (viewport minimum)` : 뷰포트의 너비와 높이 중 짧은 것 (% 단위)
    > `640x480`의 화면에서 `50vmin` 은 너비와 높이 중 짧은 높이 480px의 50%이므로, 240px과 동일하다.
- `vmax (viewport maximum)` : 뷰포트의 너비와 높이 중 긴 것 (% 단위)
    > `640x480`의 화면에서 `50vmin` 은 너비와 높이 중 긴 너비 640px의 50%이므로, 320 동일하다.

<br />

## Media Query 미디어 쿼리
접속하는 디바이스나 뷰포트에 따라 특정 CSS 스타일을 사용하는 방법  
`@media` 키워드를 사용해 특정 미디어(디바이스)에서 어떤 CSS를 적용할 것인지 지정  
이때, 그 특정 구간을 `중단점 (breakpoint)`이라고도 함

```css
@media [only | not] 미디어 유형 [and 조건] * [and 조건]
```
- `only` : 미디어쿼리를 지원하지 않는 웹 브라우저에서는 미디어 쿼리를 무시하고 실행하지 않음  
    **_거의 사용하지 않음_**
- `not` : `not` 다음에 지정하는 미디어 유형을 제외시킴
- `and` : 조건을 여러개 연결해서 추가

**예시**  
미디어 유형이 `screen`이면서 `최소 너비`가 `768px` 이고 `최대 너비`는 `1439px`일 경우에 적용할 CSS 스타일
```css
@media screen and (min-width: 768px) and (max-width: 1439px)
```

**미디어 유형**
- `all` : 모든 장치에 적합 (기본 값)
- `print` : 인쇄 결과물 및 출력 미리보기 화면에 표시하는 문서
- `screen` : 일반적인 화면
- `speech` : 음성 합성 장치

**자주 사용하는 조건**
- `min-width` : 웹 뷰포트의 최소 너비
- `max-width` : 웹 뷰포트의 최대 너비

## 참고 자료
- [MDN Media Query](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Media_queries)
- [Material Design Breakpoint](https://material.io/design/layout/responsive-layout-grid.html#breakpoints)
- [Screen Size & Media Query](https://yesviz.com/)