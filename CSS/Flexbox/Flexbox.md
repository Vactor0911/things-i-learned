# Flexbox
구현이 어려운 레이아웃을 간단하게 구현할 수 있게 추가된 레이아웃 방식  
뷰포트나 요소의 크기가 불명확하거나 동적으로 변할 때에도 효율적으로 HTML 요소를 배치, 정렬, 분산할 수 있는 방법을 제공하는 레이아웃 방식  
복잡한 계산 없이 요소의 크기와 순서를 유연하게 배치할 수 있음  
정렬, 방향, 순서, 크기 등을 유연하게 조절할 수 있음

### 구성
- `flex container` : `flex item` 을 감싸고 있는 부모 요소
- `flex item` : `flex container` 안에 있는 여러 개의 자식 요소

<style>
  table {
    border-collapse: collapse;
    text-align: center;
    margin:10px;
    color: black;
    font-weight: bold;
    border: 1px solid black;
  }
  .container {
    background-color: yellow;
  }
  .item {
    background-color: cyan;
  }
</style>
<table class="container">
  <tr>
    <td>
      Container
      <table class="item">
        <tr>
          <td>Item 1</td>
        </tr>
      </table>
      <table class="item">
        <tr>
          <td>Item 2</td>
        </tr>
      </table>
      <table class="item">
        <tr>
          <td>Item 3</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

### 정의
정렬하려는 요소(`flex item`)의 부모 요소(`flex container`)에 `display: flex` 속성을 지정함
```css
/* 일반적으로 display: flex를 지정한다. */
.flex-container {
	display: flex;
}
```
`display: flex` 속성이 적용된 요소는 `flex container`가 되고, 그 자식 요소는 `flex item`이 됨
> 부모 요소가 `inline` 요소인 경우 `inline-flex`을 지정함

### 정렬 축
`flex item`은 주축(main axis)에 따라 정렬  
방향은 `flex container`의 `flex-direction` 속성으로 결정  
기본값 : `row`

- `row` : 왼쪽에서 오륵쪽 방향
- `column` : 위에서 아래 방향

### 속성

#### Flex Container
전체적인 정렬이나 흐름에 관련된 속성
- **`display`**
- **`flex-direction`** : `flex container`의 주축(main axis) 방향을 설정
  - `row` : 좌에서 우로 수평 배치 (기본값)
  - `row-reverse` : 우에서 좌로 수평 배치
  - `column` : 위에서 아래로 수직 배치
  - `column-reverse` : 아래에서 위로 수직 배치
- **`flex-wrap`** : 여러 개의 `flex item`을 한 줄로 또는 여러줄로 배치  
    > `flex container`의 `width`보다 `flex item`들의 `width`의 합계가 더 큰 경우, 한줄 또는 여러줄로 표현할 것인지 지정
    - `nowrap` : `flex item`을 개행하지 않고 1행으로 배치 (기본값)  
        각 `flex item`의 `width`는 `flex container`에 들어갈 수 있는 크기로 축소
    - `wrap` : `flex item`들의 `width`의 합계가 `flex container`의 `width`보다 큰 경우, `flex item`을 개행하여 배치 (기본적으로 좌에서 우로, 위에서 아래로 배치)
    - `wrap-reverse` : `wrap`과 동일하나 아래에서 위로 배치
- **`flex-flow`** : `flex-direction`과 `flex-wrap` 속성을 설정하기 위한 단축 속성
    > **기본값** : `row` || `nowrap`
    ```css
    .flex-container {
        flex-flow: <flex-direction> || <flex-wrap>;
    }
    ```
- **`justify-content`** : `flex container`의 주축(main axis)을 기준으로 `flex item`을 수평 정렬
  - `flex-start` : `main start(좌측)`를 기준으로 정렬 (기본값)
  - `flex-end` : `main end(우측)`를 기준으로 정렬
  - `center` : `flex container`의 중앙에 정렬
  - `space-between` : 첫번째와 마지막 `flex item`은 좌우 측면에 정렬되고, 나머지 `flex item`은 균등한 간격으로 정렬
  - `space-around` : 모든 `flex item`은 균등한 간격으로 정렬

- <a id="align-items">**`align-items`**</a> : `flex item`을 `flex container`의 수직 방향(cross axis)으로 정렬
  - `stretch` : 모든 `flex item`이 `flex container`의 높이(cross start에서 cross end까지의 높이)에 꽉찬 높이를 가짐
  - `flex-start` : 모든 `flex item`이 `flex container`의 `cross start` 기준으로 정렬
  - `flex-end` : 모든 `flex item`이 `flex container`의 `cross end` 기준으로 정렬
  - `center` : 모든 `flex item`이 `flex container`의 `cross axis`의 중앙에 정렬
  - `baseline` : 모든 `flex item`이 `flex container`의 `baseline`을 기준으로 정렬

- **`align-content`** : `flex container`의 `cross axis`를 기준으로 `flex item`을 수직 정렬
  - `stretch` : 모든 `flex item`은 `flex item`의 행 이후에 균등하게 분배된 공간에 정렬되어 배치 (기본값)
  - `flex-start` : 모든 `flex item`이 `flex container`의 `cross start`을 기준으로 스택 정렬
  - `flex-end` : 모든 `flex item`이 `flex container`의 `cross end` 기준으로 스택 정렬
  - `center` : 모든 `flex item`은 `flex container`의 `cross axis`의 중앙에 스택 정렬
  - `space-between` : 첫번째 `flex item`의 행은 `flex container`의 상단에, 마지막 `flex item`의 행은 `flex container`의 하단에 배치되며 나머지 행은 균등 분할된 공간에 배치 정렬
  - `space-around` : 모든 `flex item`이 균등 분할된 공간 내에 배치 정렬
  > `align-items`는 `flex line`을 기준으로 정렬하는 반면, `align-content`는 `flex line` 자체를 정렬

#### Flex Item
자식 요소의 크기나 순서에 관련된 속성
- **`flex`** : `flex-grow`, `flex-shrink`, `flex-basis` 속성의 단축 속성
    > **기본값** : 0 1 auto  
    > `W3C`에서는 이 속성을 사용하는 것 보다 개별적으로 기술하는 것을 추천함
    ```css
    .flex-item {
	    flex: none | auto | [ <flex-grow> <flex-shrink>? || <flex-basis> ];
    }
    ```
- **`flex-grow`** : flex item의 너비에 대한 확대 인자
    > **기본값** : 0  
    > _음수값은 무효_
    ```css
    .flex-item {
        flex-grow: 양의 정수값;
    }
    ```
- **`flex-shrink`** : `flex item`의 너비에 대한 축소 인자
    > **기본값** : 1  
    > _음수값은 무효_  
    > 0을 지정하면 축소가 해제
    ```css
    .flex-item {
        flex-shrink: 양의 정수값;
    }
    ```
    모든 `flex item`을 축소된 상태로 지정(기본값 1)하고 원하는 `flex item`만 축소를 해제(flex-shrink: 0;)하면 해당 `flex item`만 원래의 너비를 유지함
- **`flex-basis`** : `flex item`의 너비 기본값을 px, % 등의 단위로 지정
    > **기본값** : auto
    ```css
    .flex-item {
        flex-basis: auto | <width>;
    }
    ```
- **`order`** : `flex item`의 배치 순서를 지정
    > **기본값** : `flex container`에 추가된 순서 (0)
    ```css
    .flex-item {
        order: 정수값;
    }
    ```
- **`align-self`** : [`align-items`](#align-items) 속성보다 우선하여 개별 `flex item`을 정렬
    > **기본값** : auto
    ```css
    .flex-item {
        align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }
    ```

### 참고 자료
- [Flexbox Game](https://flexboxfroggy.com/#ko)
- [Flexbox로 만들 수 있는 10가지 레이아웃](https://d2.naver.com/helloworld/8540176#ch2)
- [Flexbox Layout Github](https://github.com/dinanathsj29/css-flexbox-beginners-tutorial)