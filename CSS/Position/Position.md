# Position
HTML 요소를 배치하는 방법을 지정

**속성값**
- `static (기본값)` : 일반적인 흐름을 따라 배치
- `relative` : 문서의 일반적인 흐름에 따라 배치. 단, `static` 위치에서 `top`, `right`, `bottom`, `left`와 같은 속성에 의한 상대적인 위치에 배치
- `absolute` : `position: static` 속성을 가지고 있지 않은 부모를 기준으로 배치. 만약 그러한 부모 요소가 없다면 `body`가 기준이 됨
- `fixed` : 스크린의 `뷰포트(viewport)`를 기준으로 한 위치에 배치. 스크롤되어도 움직이지 않는 고정된 자리를 가짐
- `sticky` : `static`과 같이 일반적인 흐름에 따라가다가 스크롤 위치가 임계점에 이르면 `fixed`와 같이 박스를 화면에 고정할 수 있는 속성
  - `top` 속성을 적용해야 스크롤 임계점에서 고정됨
  - `left`, `right`, `bottom` 속성을 사용할 수 없음

<br />

# 위치 속성
요소를 원하는 곳으로 최종적으로 위치 시키는 속성  
`position: static;` 에서는 적용되지 않음

**종류**
- `top`
- `left`
- `bottom`
- `right`

## 관련 속성
`z-index` : 어느 HTML 요소가 앞으로 나오고, 뒤에 나올지 배치 순서를 결정하는 속성  
`position (relative, absolute, fixed)`속성이 적용된 요소에서만 작동  
속성값의 숫자가 높을수록 앞에 배치됨