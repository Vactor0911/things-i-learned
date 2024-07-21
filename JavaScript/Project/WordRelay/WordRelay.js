const spanWord = document.querySelector("#word");
const input = document.querySelector("input");
const button = document.querySelector("button");
let oldWord = "";

const onButtonPressed = () => {
  const word = input.value;
  if (!word) { // 단어를 입력하지 않음
    alert("단어를 입력하세요!");
    return;
  } else if (word.length === 1) { // 한 글자의 단어를 입력함
    alert("두 글자 이상의 단어를 입력하세요!");
    return;
  }

  if (!oldWord) { // 제시어가 없음
    oldWord = word;
    spanWord.textContent = oldWord;
    input.value = "";
  } else if (oldWord[oldWord.length - 1] !== word[0]) { // 제시어의 끝 글자와 입력한 단어의 첫 글자가 다름
    alert("단어가 올바르지 않습니다!");
  }
  else { // 올바른 단어를 입력함
    oldWord = word;
    spanWord.textContent = oldWord;
    input.value = "";
  }
};

button.addEventListener("click", onButtonPressed);
