# Pseudo Class 가상 클래스
선택하고자 하는 HTML 요소의 특별한 `상태(state)`를 명시할 때 사용
```css
a:hover {
  color: orange;
}

input:focus {
	color: red;
}	
```

- `:link` : 아직 방문하지 않은 요소. href 속성을 가진 `<a>` `<area>` `<link>` 중 방문하지 않은 모든 요소를 선택
- `:visited` : 사용자가 방문한 적이 있는 링크
- `:active` : 사용자가 활성화한 요소(버튼 등)
- `:hover` : 사용자의 마우스 포인터가 올라가 있는 요소
- `:focus` : 양식의 입력 칸 등 포커스를 받은 요소. 보통 사용자가 요소를 클릭 또는 탭하거나, 키보드 Tab 키로 선택했을 때 작동함
- `:nth-child` : 형제 사이에서의 순서에 따라 요소를 선택 [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/:nth-child)
- `:not(selector)` : `not(selector)` 안에 포함된 요소를 제외시킴

> 순서가 달라지면 적용이 안될 수도 있기 때문에 `link` → `visited` → `hover` → `active` 순으로 선언하여 사용하는 것을 권장함.  

[더 알아보기](https://lalacode.tistory.com/6)

<br />

# Pseudo Element 가상 요소
HTML 요소의 특정 부분만을 선택할 때 사용
```css
/* 모든 p 요소의 첫 번째 줄. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

- `::first-letter` : 텍스트의 첫 글자. 단, 블록 레벨 요소에만 사용 가능
- `::first-line` : 텍스트의 첫 라인. 단, 블록 레벨 요소에만 사용 가능
- `::before` : 특정 요소의 내용(content) 부분 바로 앞에 다른 요소를 삽입할 때 사용
- `::after` : 특정 요소의 내용(content) 부분 바로 뒤에 다른 요소를 삽입할 때 사용
- `::selection` : 해당 요소에서 사용자가 선택한 부분만 선택