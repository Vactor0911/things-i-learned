# Transform
HTML 요소를 회전, 크기 조절, 기울이기, 이동 효과를 나타낼 때 사용  
속성값으로 함수를 지정하여 사용함  
`transform` 속성을 사용하기 위해선 해당 HTML 요소의 `display` 속성값이 `block` 혹은 `inline-block` 이어야 함.

```css
/* x축(가로)으로 20px 이동 */
transform: translateX(20px);

/* y축(세로)으로 40px 이동 */
transform: translateY(40px);

/* x축(가로)으로 20px, y축(세로)으로 40px 이동 */
transform: translate(20px, 40px);
```

### 함수
- `translate`
  - `translate(x, y)` : 지정한 크기만큼 X축, Y축으로 이동
  - `translateX(x)` : 지정한 크기만큼 X축으로 이동
  - `translateY(y)` : 지정한 크기만큼 Y축으로 이동
- `scale`
  - `scale(x, y)` : 지정한 크기만큼 X축, Y축으로 확대/축소
  - `scaleX(x)` : 지정한 크기만큼 X축으로 확대/축소
  - `scaleY(y)` : 지정한 크기만큼 Y축으로 확대/축소
- `rotate`
  - `rotate(deg)` : 지정한 각도만큼 회전 (+: 시계 방향, -: 반시계 방향)
  - `rotateX(deg)` : 지정한 각도만큼 X축으로 회전  
  (입체감을 표현하기 위해선 부모 요소에 `perspective` 속성을 적용해야 함)
  - `rotateY(deg)` : 지정한 각도만큼 Y축으로 회전  
  (입체감을 표현하기 위해선 부모 요소에 `perspective` 속성을 적용해야 함)
  - `rotateZ(deg)` : 지정한 각도만큼 Z축으로 회전  
  (입체감을 표현하기 위해선 부모 요소에 `perspective` 속성을 적용해야 함)
- `skew`
  - `skew(x, y)` : 지정한 각도만큼 X축, Y축으로 왜곡
  - `skewX(x)` : 지정한 각도만큼 X축으로 왜곡
  - `skewY(y)` : 지정한 각도만큼 Y축으로 왜곡