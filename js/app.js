const altcontainer = document.querySelector(".alt")
const inpCommit = document.querySelector("header input")
const contentPost = document.querySelector(".commit-post")
const clearAllCommit = document.querySelector("header button")

inpCommit.onchange = function () {

    if(inpCommit.value != ""){
        const post = document.createElement("div")
        post.classList = "post"
        contentPost.appendChild(post)

        post.innerHTML = `
            <p>
                ${inpCommit.value}
            </p>
            <button>
                Clear  <ion-icon name="trash-bin-sharp"></ion-icon>
            </button>
        `

        inpCommit.value = ""
    }
    
    const btnClearPost = document.querySelectorAll(".post button")

    btnClearPost.forEach(
        function(i) {
            i.onclick = function(e) {
                e.target.offsetParent.remove()
            }
        }
    )

    clearAllCommit.onclick = function () {
        const postAll = document.querySelectorAll(".post")

        postAll.forEach(
            function(i){
                i.remove()
            }
        )
    }

    const altCommit = document.querySelectorAll(".post p")

    altCommit.forEach(
        function (i) {
            i.onclick = function(e) {

                const contentAltCommit = document.createElement("div")
                const form = document.createElement("div")
                const inpAlt = document.createElement("input")
                const btnCancelAlt = document.createElement("button")

                btnCancelAlt.innerText = "Cancelar"
                inpAlt.setAttribute("placeholder","Alterar")
                contentAltCommit.classList = "alt-commit"
                form.classList = "form"
                
                altcontainer.appendChild(contentAltCommit)
                contentAltCommit.appendChild(form)
                form.appendChild(inpAlt)
                form.appendChild(btnCancelAlt)

                inpAlt.onchange = function() {
                    e.target.innerHTML = inpAlt.value
                    contentAltCommit.remove()
                }

                btnCancelAlt.onclick = function() {
                    contentAltCommit.remove()
                }

            }
        }
    )

}

const btnTheme = document.querySelector(".theme button")
const body = document.querySelector("body")

btnTheme.onclick = theme;
btnTheme.style.position = "fixed"
btnTheme.style.bottom = "30px"
btnTheme.style.right = "30px"

btnTheme.style.cursor = "pointer"
btnTheme.style.padding = "10px 20px"
btnTheme.style.fontSize = "20px"
btnTheme.style.border = "solid 2px #fff"
btnTheme.style.color = "#fff"
btnTheme.style.background = "transparent"
btnTheme.style.borderRadius = "5px"

function theme() {
    body.classList.toggle("darck")
}

console.log("Hello dev!")
