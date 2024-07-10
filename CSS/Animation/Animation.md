# Animation
요소에 적용되는 CSS 스타일을 다른 CSS 스타일로 부드럽게 전환시켜 줌  
`keyframe` : CSS 스타일이 변화되는 중간지점  
`transition` 보다 규모가 크고 복잡하며 다양한 능력을 가지고 있어 더 정밀한 효과를 구현할 수 있음

```css
animation: rotate 1.5s infinite, background 1.5s infinite alternate;
```

### @keyframes
- `from` ~ `to` 를 이용하여 정의
    ```css
    @keyframes shape {
        from {
            border: 1px solid transparent;
        }
        to {
            border: 1px solid #000;
            border-radius: 50%;
        }
    }
    ```
- `from` ~ `{percent}` ~ `to` 를 이용하여 정의
    ```css
    @keyframes background {
        from { background-color: red; }
        50% { background-color: green; } /* percentage로 중간 스타일을 적용 */
        to { background-color: blue; }
    }
    ```

### 속성
- `animation-name` : 애니메이션의 중간 상태를 지정하기 위한 이름
    ```css
    animation-name: shape;

    @keyframes shape {
        /* 애니메이션 */
    }
    ```
- `animation-duration` : 애니메이션이 한 사이클을 도는데 걸리는 시간
- `animation-delay` : 애니메이션이 실행되기까지 기다리는 시간
- `animation-iteration-count` : 애니메이션의 반복 횟수\
  - `infinite` : 무한
- `animation-play-state` : 애니메이션 재생 상태
- `animation-timing-function` : 애니메이션 중간 상태의 시간 간격
- `animation-fill-mode` : 애니메이션 시작 이전 혹은 종료 후 적용할 값
- [더 알아보기](https://developer.mozilla.org/ko/docs/Web/CSS/animation)

[Cool CSS Animation](https://coolcssanimation.com/)