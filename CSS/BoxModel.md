# BoxModel 박스 모델

웹 페이지에서 일정 공간을 차지하는 모든 HTML 요소를 CSS에서 정의하는 단어  
`Content`, `Padding`, `Border`, `Margin`으로 구성

<style>
  table {
    border-collapse: collapse;
    text-align: center;
    margin:10px;
    color: black;
    border: 1px solid black;
  }
  .margin {
    background-color: rgb(249, 204, 157);
    border: 1px dashed black;
  }
  .border {
    background-color: rgb(253, 221, 155);
  }
  .padding {
    background-color: rgb(195, 208, 139);
    border: 1px dashed black;
  }
  .contents {
    background-color: rgb(140, 182, 192);
  }
</style>
<table class="margin">
  <tr>
    <td>
      Margin
      <table class="border">
        <tr>
          <td>
            Border
            <table class="padding">
              <tr>
                <td>
                  Padding
                  <table class="contents">
                    <tr>
                      <td>Contents</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

- `Margin` : 테두리와 이웃하는 요소 사이의 간격 (바깥쪽 여백)
- `Border` : Content를 감싸는 테두리
- `Padding` : Content와 Border사이의 영역 (안쪽 여백)
- `Content` : HTML 요소의 실직적인 내용

<br />

## Margin
- `margin` : 바깥쪽 여백
- `margin-{direction}` : 각 `direction(방향)`의 바깥쪽 여백
- HTML 요소를 세로로 배치할 경우 두 개의 margin이 만나면 큰 값으로 합쳐짐
```css
/* 위아래 여백: 10px, 좌우 여백: 20px */
margin: 10px 20px;

/* 위:10px, 우:20px, 아래:30px, 좌:40px */
margin: 10px 20px 30px 40px;

/* 위쪽에만 20px의 여백 적용 */
margin-top: 20px;
```

<br />

## Border
- `border` : 테두리 (단축 속성)  
    `border-width`, `border-style`, `border-color` 속성을 포함함  
    위 속성들을 한꺼번에 정의할 수 있음  
    `border-top`, `border-right` 등을 이용하여 방향별 스타일, 두께, 색상을 각각 정의할 수 있음
- `border-style` : 테두리 스타일  
    4개의 방향을 한꺼번에 지정하는 경우, top-right-bottom-left순으로 지정해야함  
    [테두리 스타일 종류](https://developer.mozilla.org/ko/docs/Web/CSS/border-style)
- `border-width` : 테두리 두께  
    값으로 `thin`, `medium`, `thick` 키워드를 사용할 수 있음
- `border-color` : 테두리 색상
- `border-radius` : 테두리 꼭짓점의 둥근 정도
```css
/* 두께가 1px인 빨강색 실선 */
border: 1px solid red;

/* 테두리 스타일 */
border-style: solid;
border-style: dotted solid dashed solid;
border-left-style: solid;

/* 테두리 두께 */
border-width: 1px;
border-width: thin thin;
border-width: 8px 4px 4px 8px;
border-left-width: 2px;

/* 테두리 색상 */
border-color: blue;
border-color: yellow red;

/* 둥근 테두리 */
border-radius: 30px;
border-radius: 10% 20%;

/* 한꺼번에 정의 */
border: 1px solid red;
border-right: 4px dashed green;
```

<br />

## Padding
- `padding` : 안쪽 여백을 지정
- `padding-{direction}` : 각 `direction(방향)`의 안쪽 여백
```css
/* 위아래 여백: 10px, 좌우 여백: 20px */
padding: 10px 20px;

/* 위:10px, 우:20px, 아래:30px, 좌:40px */
padding: 10px 20px 30px 40px;

/* 위쪽에만 20px의 여백 적용 */
padding-top: 20px;
```

<br />

## Content
- `width` : 가로 너비
- `height` : 세로 높이
```css
width: 200px;
height: 300px;
```
> 인라인 레벨 요소는 콘텐츠 만큼의 영역을 갖기 때문에 `width`와 `height` 속성이 적용되지 않음.  
> 만약 적용해야 한다면 `display` 속성을 `inline-block` 으로 변경해야함

<br />

## Box Sizing
HTML 요소의 너비와 높이를 계산하는 방법을 지정  
CSS 박스 모델에서 지정한 `width`와 `height`는 HTML 요소의 `Content` 크기에 적용  
요소에 `border`나 `padding`이 있으면 `width`와 `height`에 더해서 화면에 그림  
이때, `box-sizing` 속성을 사용해 이 방식을 변경할 수 있음

- `box-sizing`
  - `content-box` : 기본 CSS 박스 크기 결정법  
        `width`를 100px로 설정하면 콘텐츠 영역이 100px의 너비를 가지고, `border`와 `padding`은 이 수치에 더해서 계산됨
  - `border-box` : `border`와 `padding`도 `width`, `height`를 고려하는 크기 결정법  
        `width`를 100px로 설정하고 `border`나 `padding`을 추가하면, 콘텐츠 영역의 크기가 줄어들어 총 너비가 100px가 되도록 만듬
```css
box-sizing: content-box;
box-sizing: border-box;
```