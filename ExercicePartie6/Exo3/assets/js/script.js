let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];

const mikeTbody = document.getElementById("mikeTbody");

languages.forEach(Element => {

    let mikeTr = document.createElement("tr");
    mikeTr.innerHTML = `<td>${Element}</td>`;
    mikeTbody.appendChild(mikeTr)

});