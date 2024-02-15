//const copyButtonLabel = "Copy Code";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");
    let outerSpan = document.createElement("span");
    let innerSpan = document.createElement("span");

    outerSpan.classList.add("icon-bg");
    innerSpan.classList.add("mdi");
    innerSpan.classList.add("mdi-content-copy");

    button.appendChild(outerSpan);
    outerSpan.appendChild(innerSpan);

    //button.innerText = '<span class="mdi mdi-content-copy"></span>'; //copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed

  let span = block.querySelector(".mdi");
  //console.log(block, span);

  span.classList.remove("mdi-content-copy");
  span.classList.add("mdi-checkbox-multiple-marked");

  setTimeout(() => {
    
    span.classList.remove("mdi-checkbox-multiple-marked");
    span.classList.add("mdi-content-copy");
  }, 700);
}
