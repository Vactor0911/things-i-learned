# Form 태그
정보를 제출하기 위하여 어디서부터 어디까지가 `양식`인지 지정한다.

**속성**
- `action` : 양식 데이터를 처리할 서버 프로그램의 URI
- `method` : 양식을 제출할 때 사용할 HTTP 메서드
    - `post` : 양식 데이터를 요청 본문으로 전송
    - `get` : 양식 데이터를 URL의 쿼리스트링으로 붙여서 전송

**데이터 태그 속성**
- `required` : 입력 값이 필수
- `readonly` : 읽기 전용
- `disabled` : 비활성화 (서버로 데이터를 전송하지 않음)
- `autofocus` : 초기에 필드로 커서를 위치시킴
- `placeholder` : 입력 필드가 비어있을 때 설명이나 가이드 문구를 표시할 수 있음

<br/>

# Fieldset 태그
`form`의 여러 컨트롤과 `label`을 묶을 때 사용한다.

<br/>

# Legend 태그
부모 `fieldset`의 설명을 나타낸다.

<br/>

# Input 태그
데이터를 입력 받을 수 있는 요소이다.  
`type` 속성을 통하여 다양한 방법으로 데이터를 받을 수 있다.
```html
<input type="text" id="name">
```

**type 속성**
- `text` : 일반적인 텍스트
- `number` : 숫자 (문자 입력시 경고 출력)
- `password` : 비밀번호 (입력시 ●등으로 문자가 치환됨)
- `email` : 이메일 (자동으로 이메일에 대한 유효성 검증 실시)
- `tel` : 전화번호 (자동으로 전화번호에 대한 유효성 검증 실시)
- `url` : URL 링크
- `range` : 스크롤 바로 조정이 가능한 숫자 값
- `date` : 날짜
- `month` 연, 월만 포함된 날짜
- `week` : 주 단위의 날짜
- `time` : 시간
- `file` : 파일
- `checkbox` : 체크박스
- `radio` : 라디오 버튼
- `hidden` : 숨겨진 속성 (사용자에게 표시하지 않고 서버에 데이터를 보낼 때 사용)

**number | range**
- `min` : 최소값
- `max` : 최대값
- `value` : 초기에 설정할 값

**date | month | week**
- `min` : 선택 가능한 날짜의 하한선
- `max` : 선택 가능한 날짜의 상한선

**time | datetime | datetime-local**
- `min` : 선택 가능한 시간의 하한선
- `max` : 선택 가능한 시간의 상한선

**file**
- `accept` : 선택 가능한 파일의 유형 (확장자)

<br/>

# Label 태그
Input 태그의 요소를 설명할 때 사용한다.  
`input` 태그를 `label` 태그 아래에 위치시킬 수 있다.  
`input` 태그의 `id` 속성 값과 `label` 태그의 `for` 속성 값을 일치시켜 서로 연결지을 수 있다.  

<br/>

# TextArea 태그
텍스트 입력란 요소를 생성한다.  
`value` 속성 대신 콘텐츠 부분에 기본 값을 입력한다.
```html
<textarea name="" id="" rows="10" cols="40">Default Text</textarea>
```

**속성**
- `rows` : 입력란의 세로 행 개수
- `cols` : 입력란의 가로 열 개수

<br/>

# Select 태그
콤보 박스 요소를 생성한다.  
`multiple` 속성을 추가하여 리스트 박스로 변환할 수 있다.

**option 태그**  
- `option` 태그를 통해 각 아이템을 나타낸다.  
- `option` 태그의 콘텐츠 부분 텍스트는 사용자에게 보여지는 텍스트이고, 실제로 서버에 보내지는 데이터는 `value` 속성값이다.  
- `selected` 태그를 추가하여 기본으로 선택된 아이템을 지정할 수 있다.
```html
<select name="" id="" multiple>
  <option value="1">Option1</option>
  <option value="2" selected>Option2</option>
  <option value="3">Option3</option>
  <option value="4">Option4</option>
  <option value="5">Option5</option>
</select>
```

<br/>

# DataList 태그
사용자가 직접 입력할 수 있는 콤보 박스 요소를 생성한다.  
`input` 태그와 함께 사용되며, `input` 태그 안에 `list` 속성값을 `datalist`의 `id` 속성값과 일치시켜 연결한다.

**option 태그**  
`value` 속성값에 따라 `input`에 표시되는 추천 값의 목록이 변한다.

<br/>

# Button 태그
클릭 가능한 버튼 요소를 생성한다.  
`form` 내부 뿐만 아니라 버튼이 필요한 아무 위치에서 사용이 가능하다.

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button" onclick="alert('HelloWorld!')">Button</button>
```

**속성**  
- `submit` : 버튼이 서버로 양식 데이터를 전송한다. (기본값)
- `reset` : 모든 입력 필드를 최초의 상태로 되돌린다.
- `button` : 기본 행동 없이 클릭했을 때 JS 코드를 실행할 때 사용한다. `onclick` 속성이 이를 위해 사용된다.