let form = document.querySelector("#userInfoForm");
let nameInput = document.querySelector("#userName");
let numberInput = document.querySelector("#userNumber");
let userMm = document.querySelector("#userMm");
let userYy = document.querySelector("#userYy");
let userCvc = document.querySelector("#userCvc");

let numberCard = document.querySelector("#numCard");
let nameCard = document.querySelector("#nameCard");
let mmCard = document.querySelector("#mmCard");
let yyCard = document.querySelector("#yyCard");
let cvcCard = document.querySelector("#cvcCard");

let labelnumber = document.querySelector("#labelNumber");
let labelMm = document.querySelector("#labelMm");
let labelYY = document.querySelector("#labelYY");
let labelCvc = document.querySelector("#labelCvc");

let originNum = "0000 0000 0000 0000";
let originName = "Jane Appleseed";
let originMM = "00";
let originCVC = "000";

numberInput.addEventListener("input", updateNumber);
nameInput.addEventListener("input", updateName);
userMm.addEventListener("input", updateMm);
userYy.addEventListener("input", updateYy);
userCvc.addEventListener("input", updateCvc);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  form.innerHTML = `
    <div class="complete text-center">
                <div class="imgComplete m-4">
                    <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="40" fill="url(#a)" />
                        <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
                        <defs>
                            <linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#6348FE" />
                                <stop offset="1" stop-color="#610595" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <h1>THANK YOU!</h1>
                <p id="parConfirm">We've added your card details</p>
                <button type="button" value="Continue" class="button w-75 m-4">Continue</button>
            </div>
    `;
}

function updateNumber(e) {
  let numerValue = e.target.value;
  if (isNaN(numerValue)) {
    labelnumber.innerHTML = "Wrong format, numbers only";
    document.getElementById("userNumber").className = "inputWar";
  } else {
    labelnumber.innerHTML = "";
    document.getElementById("userNumber").className = "";
    let displayNumber = numerValue.replace(/\d{4}(?=.)/g, "$& ");
    numberCard.innerHTML = displayNumber;
    if (numerValue === "") {
      numberCard.innerHTML = originNum;
      document.getElementById("userNumber").className = "inputWar";
      labelnumber.innerHTML = "Can't be blank";
    }
  }
}

function updateName(e) {
  let nameValue = e.target.value;
  nameCard.innerHTML = nameValue;

  if (nameValue === "") {
    nameCard.innerHTML = originName;
  }
}

function updateMm(e) {
  let mmValue = e.target.value;
  if (isNaN(mmValue)) {
    labelMm.innerHTML = "Wrong format, numbers only";
    document.getElementById("userMm").className = "myBlock inputWar";
  } else {
    labelMm.innerHTML = "";
    mmCard.innerHTML = mmValue;
    document.getElementById("userMm").className = "myBlock";
    if (mmValue === "") {
      mmCard.innerHTML = originMM;
      labelMm.innerHTML = "Can't be blank";
      document.getElementById("userMm").className = "myBlock inputWar";
    }
  }
}

function updateYy(e) {
  let mmYy = e.target.value;
  if (isNaN(mmYy)) {
    labelMm.innerHTML = "Wrong format, numbers only";
    document.getElementById("userYy").className = "myBlock inputWar";
  } else {
    labelMm.innerHTML = "";
    yyCard.innerHTML = mmYy;
    document.getElementById("userYy").className = "myBlock";
    if (mmYy === "") {
      yyCard.innerHTML = originMM;
      labelMm.innerHTML = "Can't be blank";
      document.getElementById("userYy").className = "myBlock inputWar";
    }
  }
}

function updateCvc(e) {
  let mmCvc = e.target.value;
  if (isNaN(mmCvc)) {
    labelCvc.innerHTML = "Wrong format, numbers only";
    document.getElementById("userCvc").className = "elseBlock inputWar";
  } else {
    labelCvc.innerHTML = "";
    cvcCard.innerHTML = mmCvc;
    document.getElementById("userCvc").className = "elseBlock";
    if (mmCvc === "") {
      cvcCard.innerHTML = originCVC;
      labelCvc.innerHTML = "Can't be blank";
      document.getElementById("userCvc").className = "elseBlock inputWar";
    }
  }
}
