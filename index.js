let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        "" + leads[i] + ""
        listItems += `
        <li> 
                <a href = ' ${leads[i]}' target='_blank'>
                ${leads[i]} 
                </a>
          </li>
        
        `
        
        
    }

    ulEl.innerHTML = listItems
}
const tabs = [
    {url: "https://www.linkedin.com/in/christian-joshua/"},
]

tabBtn.addEventListener("click", function(){
    //console.log(JSON.stringify(tabs))  this actually works too //
    //console.log(tabs[0].url)
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
   

    inputEl.value = " "
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
})

