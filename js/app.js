
const inpKey = document.querySelector('#inpKey');
let inpValue = document.querySelector('#inpValue');
let btnInsert = document.querySelector('#btnInsert');
let isOutput = document.querySelector('#isOutput');

btnInsert.addEventListener('click', e => {
    
    let key = inpKey.value;
    let value = inpValue.value;
    // console.log(key);
    // console.log(value);

    // const li = document.createElement('p');
    // li.appendChild(document.createTextNode(`${key}: ${value}`));
    // isOutput.appendChild(li)
    // isOutput.innerHTML += `<p>${key}: ${value}</p>`;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload
    }

})

for (let index = 0; index < localStorage.length; index++) {
    const element = localStorage.key(index);
    const elementTwo = localStorage.getItem(element);

    isOutput.innerHTML += `<p>${element}: ${elementTwo}</p>`;
}
