# Transition
HTML 요소의 속성 값이 변할 때 더욱더 부드럽게 전환할 수 있도록 도와주는 속성

```css
transition: all 2s ease-in;

/* all은 대부분 생략해서 사용합니다. */
transition: 2s ease-in;

/* 2s실행시간 1s지연시간 */
transition: 2s 1s ease-in;
```

### 속성
- `transition-property` : 어떤 속성에 트랜지션 효과를 줄 것인지 지정
    > `transitino-property: <속성1>, <속성2>;` 와 같이 사용  
    > `all` : 모든 속성을 지정 (생략 가능)  
    > `none` : 아무 속성도 지정하지 않음
- `transition-duration` : 트랜지션 효과를 몇 초 동안 실행할 것인지 지정
- `transition-delay` : 트랜지션 효과를 지정한 초 만큼 기다린 후 실행
- `trasition-timing-function` : 트랜지션이 시작하면서 끝날때의 속도를 지정
    > `linear` : 트랜지션의 시작과 끝의 속도가 일정  
    > `ease-in` : 천천히 시작했다가 완료될 때 속도가 증가  
    > `ease-out` : 빠르게 시작했다가 완료될 때 속도가 감소  
    > [더 알아보기](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

[참고 사이트](https://tympanus.net/Development/PageTransitions/)