# Background 배경
### `background-color`
HTML 요소의 배경 색을 지정
```css
/* 키워드 값 */
background-color: red;
/* 16진수 (HEX) 값 */
background-color: #bbff00;
/* RGB 값 */
background-color: rgb(255, 255, 128);
/* 특별 키워드 값 */
background-color: currentcolor;
/* 전역 값 */
background-color: inherit;
```

### `background-image`
배경 이미지를 한 개 또는 여러 개를 지정
```css
background-image: url("../../media/examples/lizard.png");
background-image: url("../../media/examples/star.png"),
                url("../../media/examples/lizard.png");
```

### `background-repeat`
배경 이미지의 반복 방법을 지정  
가로축 및 세로축을 따라 반복할 수 있고, 아예 반복하지 않을 수도 있음
- `repeat` : 가로, 세로 반복
- `no-repeat` : 반복하지 않음
- `repeat-x` : 가로 반복
- `repeat-y` : 세로 반복

### `background-posiiton`
배경 이미지의 초기 위치를 설정
```css
/* Keyword values */
background-position: top;
background-position: left;
background-position: center;

/* <percentage> values */
background-position: 25% 75%;

/* Edge offsets values */
background-position: bottom 10px right 20px;
```

### `background-attachment`
배경 이미지를 뷰포트 내에서 고정할지 말지를 지정하는 속성
- `scroll` : 선택한 요소와 같이 움직임. 내용을 스크롤하면 배경 이미지는 스크롤되지 않음
- `fixed` : 움직이지 않음
- `local` : 선택한 요소와 같이 움직임. 내용을 스크롤하면 배경 이미지도 스크롤됨
- `initial` : 기본값으로 설정
- `inherit` : 부모 요소의 속성값을 상속받음

```css
/* 키워드 값 */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* 전역 값 */
background-attachment: inherit;
background-attachment: initial;
background-attachment: unset;
```

### `background`
`background-image` `background-repeat` `background-position` `background-attachment` 속성을 한꺼번에 선언할 수 있음
```css
background: url('images/bg.png') no-repeat top right fixed;
```

### `background-size`
요소 배경 이미지의 크기를 설정

- `contain` : 이미지가 잘리거나 찌그러지지 않는 한도 내에서 제일 크게 설정
- `cover` : 이미지가 찌그러지지 않는 한도 내에서 제일 크게 설정; 이미지의 가로세로비가 요소와 다르다면 이미지를 세로 또는 가로방향으로 잘라내어 빈 공간이 생기지 않도록 설정
- `auto` : 배경 이미지의 원본 크기를 유지
- `<length>` : 원본 크기의 너비/높이를 주어진 값으로 늘리거나 줄임. 단, 음수는 불가능
- `<percentage>` : 배경 위치 지정 영역의 지정된 백분율에 해당하는 크기로 이미지를 늘림

<br />

# Gradation 그라데이션
### `linear-gradient`
두 개 이상의 색상이 직선을 따라 점진적으로 변화
- `to` : 방향을 결정
- `deg` : 각도값을 지정

```css
background: linear-gradient(#e66465, #9198e5);
background: linear-gradient(to bottom, white, blue);
background: linear-gradient(45deg, white, blue);
background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);
```

### `radial-gradient`
- 원형
    ```css
    background: radial-gradient(white, yellow, red);
    ```
- 타원형
    ```css
    background: radial-gradient(circle at 20% 20%, white, yellow, red);
    ```