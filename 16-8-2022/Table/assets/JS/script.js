const usres = [
    {
        firstname: "bhargav",
        email: "bharagvpatel385@gmail.com",
        mobile: 1234567890,
        city: "Bilimora"
    },
    {
        firstname: "ayush",
        email: "bharagvpatel385@gmail.com",
        mobile: 1234567890,
        city: "Bilimora"
    },
    {
        firstname: "mittal",
        email: "bharagvpatel385@gmail.com",
        mobile: 1234567890,
        city: "Bilimora"
    },
    {
        firstname: "almira",
        email: "bharagvpatel385@gmail.com",
        mobile: 1234567890,
        city: "Bilimora"
    }
]

//model 
const model = document.querySelector('#model');
const modalWrapper = document.querySelector('.model-wrapper');
const closeBtn = document.querySelector('.close');

model.addEventListener('click',function(){
    modalWrapper.classList.add('active');
});


closeBtn.addEventListener('click',function(){
    modalWrapper.classList.remove('active');
});


getData(usres);
//Get Data
function getData(data) {
    const userTableBody = document.querySelector("#user-table");
    //console.log(userTableBody);


    data.forEach((user) => {

        const tableRow = document.createElement('tr');
        // console.log(tableRow);


        for (const item in user) {
            const tablecol = document.createElement('td');
            // console.log(tablecol);
            const value = user[item];
            // console.log(value);
            tablecol.textContent = value;
            tableRow.appendChild(tablecol)
        }
        userTableBody.appendChild(tableRow);
    });

}


//Filter Data
function searchFun(){
    let filter = document.getElementById('search-field-input').value.toUpperCase();
    //table inside
    let myTable = document.getElementById('user-table');
    //tr 
    let tr = myTable.getElementsByTagName('tr');
                       // tr length
    for (var i = 0; i < tr.length; i++){
        //name find karva
        let td = tr[i].getElementsByTagName('td')[0];

        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) > -1){
                  tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }

}

