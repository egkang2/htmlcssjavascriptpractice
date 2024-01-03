// limitInput.js
function limitation(elementId) {
  document
    .getElementById(elementId)
    .addEventListener("input", function (event) {
      var inputValue = this.value;
      // Check if the input is a number or the backspace key
      if (
        !/^\d+$/.test(inputValue) &&
        event.inputType !== "deleteContentBackward"
      ) {
        alert("Please enter a valid number.");
        this.value = ""; // Clear the input field
      }
    });
}
function boundary() {
  document.getElementById("guessInput").addEventListener("input", function () {
    var inputValue = this.value || 0;
    var limitValue = document.getElementById("numberInput").value || 0; // Use 0 if the value is empty

    // If limitValue is an empty string, treat it as 0

    if (parseInt(inputValue) > parseInt(limitValue)) {
      alert("Number should be less than " + limitValue);
      this.value = limitValue; // Clear the input field
    }
  });
}
function updateValue() {
  numberInput.addEventListener("input", function () {
    var limitValue = this.value || 0;
    var inputValue = document.getElementById("guessInput").value || 0; // Use 0 if the value is empty

    // If limitValue is an empty string, treat it as 0

    if (parseInt(inputValue) > parseInt(limitValue)) {
      alert("Number should be at least " + inputValue);
      this.value = inputValue; // Clear the input field
    }
  });
}
function result() {
  // DOMContentLoaded 이벤트가 이미 발생했는지 확인
  if (document.readyState === "loading") {
    // 아직 로드되지 않았다면, 이벤트 리스너를 등록하여 DOM 로드 후 실행
    document.addEventListener("DOMContentLoaded", function () {
      executeResult();
    });
  } else {
    // 이미 로드되었다면 직접 함수 실행
    executeResult();
  }

  // 결과를 처리하는 함수
  function executeResult() {
    // 필요한 요소들을 가져옵니다.
    const playButton = document.querySelector("button");
    const resultSpace = document.querySelector(".result_space");
    const numberInput = document.getElementById("numberInput");
    const guessInput = document.getElementById("guessInput");

    // 'play!' 버튼에 클릭 이벤트 리스너를 추가합니다.
    playButton.addEventListener("click", handlePlayButtonClick);

    // 주기적으로 실행될 함수를 정의합니다.
    function updateResult() {
      // 입력 값과 한계값 사이의 랜덤 숫자를 생성합니다.
      const randomResult = Math.floor(
        Math.random() * (parseInt(numberInput.value) + 1)
      );

      // Get the current input value
      const currentInputValue = parseInt(guessInput.value);

      if (randomResult > currentInputValue) {
        resultSpace.innerHTML = `You chose: ${currentInputValue}, the machine chose: ${randomResult}<br>You lost!`;
      } else if (randomResult < currentInputValue) {
        resultSpace.innerHTML = `You chose: ${currentInputValue}, the machine chose: ${randomResult}<br>You lost!`;
      } else {
        resultSpace.innerHTML = `You chose: ${currentInputValue}, the machine chose: ${randomResult}<br>You won!`;
      }
    }

    // 'play!' 버튼 클릭 처리를 담당하는 함수
    function handlePlayButtonClick() {
      // 최초 클릭 시에도 결과를 바로 업데이트합니다.
      updateResult();
    }
  }
}

// result 함수를 실행합니다.

// result 함수를 실행합니다.

limitation("numberInput");
limitation("guessInput");
boundary();
updateValue();
result();
