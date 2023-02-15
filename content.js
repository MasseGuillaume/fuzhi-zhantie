document.addEventListener("keyup", (event) => {
  if (event.key == "Meta" && event.keyCode == 91 /* b */) {
    const pingyingSel = document.querySelector("[jsname=jTaUub]");
    const sourceSel = document.querySelector("[jsname=BJE2fc]");
    const targetSel = document.querySelector("[jsname=jqKxS]");

    if (pingyingSel && sourceSel && targetSel) {
      const out =  [
        pingyingSel.innerText.toLowerCase(),
        sourceSel.value,
        targetSel.innerText
      ].join("\t");

      console.log(out);
      navigator.clipboard.writeText(out);
    } else {
      console.log("miss");
    }
  }
});    
