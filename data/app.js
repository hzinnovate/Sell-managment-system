function load() {
    var prodect = JSON.parse(localStorage.getItem("prodect"));
    return prodect;
}
var prodect = load();
function load2() {
    var sales = JSON.parse(localStorage.getItem("sales"));
    return sales;
}
var sales = load2();
function load3() {
    var data = JSON.parse(localStorage.getItem("data"));
    return data;
}
var data = load3();
var sellpage = document.getElementById('sellpage');
for (var i = 0; i < prodect.length; i++) {
    // console.log(prodect[i]);
    var z = document.createElement('div');
    z.setAttribute("class", 'sam');
    var textB = document.createTextNode(prodect[i].name);
    var span = document.createElement('span');
    span.setAttribute("class", 'mainh');
    span.appendChild(textB);
    z.appendChild(span);
    var button = document.createElement('button');
    var btnTxt = document.createTextNode('Open Details');
    button.appendChild(btnTxt);
    button.setAttribute("id", 'openClose');
    button.setAttribute("class", 'btn');
    button.addEventListener("click", function () {
        for (var i = 0; i < prodect.length; i++) {
            if (prodect[i].name === this.previousSibling.innerHTML) {
                var t = document.createElement('table');
                t.innerHTML = "<tr> <th>" + "Screen" + "</th>"
                    + "<th>" + "Camera" + "</th>"
                    + "<th>" + "Ram" + "</th>" + "<th>" + "Rom" + "</th>" + "<th>" + "Battry" + "</th>" + "</tr>"
                    + "<tr>" +
                    "<td>" + prodect[i].screen + "</td>"
                    + "<td>" + prodect[i].camera + "</td>"
                    + "<td>" + prodect[i].ram + "</td>"
                    + "<td>" + prodect[i].rom + "</td>"
                    + "<td>" + prodect[i].battry + "</td>"
                    + "</tr>";
                var k = this.parentNode.nextSibling;
                k.innerHTML = "";
                k.appendChild(t);
            }
        }
    })
    var btnTwo = document.createElement('button');
        btnTwo.setAttribute("class", 'btn');
        btnTwo.innerHTML = "Sell"
        btnTwo.addEventListener("click", function () {
            var q = this.parentNode.firstChild.innerHTML;
            for(var i = 0; i < prodect.length; i++){
                if(q === prodect[i].name){
                    var a = prodect[i]
                    sales.push(a);
                    localStorage.setItem("sales", JSON.stringify(sales));
                    prodect.splice(i,1)
                    localStorage.setItem("prodect", JSON.stringify(prodect));
                    this.innerText = "sold";
                    this.setAttribute("class", "sold");
                    var b = this.parentNode
                    var c = this.parentNode.nextSibling;
                    setTimeout(function(){
                        c.innerHTML = "";
                        b.innerHTML = "";

                    },1000)
                }
            }
        })
        var fTable = document.createElement('div');
        fTable.setAttribute("id", 'table');
        z.appendChild(button)
        z.appendChild(btnTwo)
    sellpage.appendChild(z)
    sellpage.appendChild(fTable)
}