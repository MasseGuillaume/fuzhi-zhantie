document.addEventListener("keyup", (event) => {
  if (event.key == "Meta" && event.keyCode == 91 /* b */) {
    const pingyingSel = document.querySelector("[jsname=jTaUub]");
    const sourceSel = document.querySelector("[jsname=BJE2fc]");
    const targetSel = document.querySelector("[jsname=jqKxS]");

    if (pingyingSel && sourceSel && targetSel) {

      console.log(pingyingSel.innerText);
      console.log(sourceSel.value);
      console.log(targetSel.innerText);

    } else {
      console.log("miss");
    }
  } else {
    console.log(event);
  }
});    
