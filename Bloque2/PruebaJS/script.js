let title = "título";
const friends = ["jazmin", "andrea", "tincho"];
window.addEventListener("load", () => {
    console.log(friends.map(element => element + "s"))
    const $div = document.getElementById("app");
    $div.innerHTML = `<h1>${title}</>`;
    const $inputName = document.createElement("INPUT");
    $inputName.setAttribute("type", "text");
    $inputName.addEventListener("keyup", (e) => {
        title = e.target.value
        const $title = document.getElementsByTagName("h1");
        $title[0].innerText = title;
    })
    $div.append($inputName);
    const $button = document.createElement("button")
    const t = document.createTextNode("button")
    $button.appendChild(t);
    $button.addEventListener("click", () => alert("click"))
    $div.append($button);
    const $ul = document.createElement("ul");
    let $li = document.createElement("li");
    let $contentLi = document.createTextNode("uno");
    $li.appendChild($contentLi);
    $ul.appendChild($li);
    $li = document.createElement("li");
    $contentLi = document.createTextNode("dos");
    $li.appendChild($contentLi);
    $ul.appendChild($li);
    $li = document.createElement("li");
    $li.innerHTML = "tres"
    $ul.appendChild($li);
    //$ul.innerHTML = `<li>uno</li>
    //<li>dos</li>`;
    $div.append($ul);
    const $ol = document.createElement("ol");
    $ol.innerHTML = friends.map(element => `<li>${element}</li>`).join('')
    $div.append($ol);
})
