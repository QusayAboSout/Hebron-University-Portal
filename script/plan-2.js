function fun2() {
    var table = `
    <table style="position: absolute;border-collapse: collapse;margin-left: 4rem ;width: 70%;height: 20%;border: 1px solid #bdc3c7;box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2),-1px -1px 8px rgba(0, 0, 0, 0.2);">
                        <tbody><tr style="transition: all .2s ease-in;cursor: pointer;background-color: rgb(15, 61, 15);">
                            <th style="text-align: center;" colspan="4"><span style="color: #bdc3c7;">Compulsory university requirement</span></th>
                        </tr>
                        
                        <tr class="trplan">
                            <td style="text-align: center;border-bottom: 1px solid #ddd;" colspan="2"><span>Number of
                                    Hourse : 5</span> </td>
                            <td style="text-align: center;border-bottom: 1px solid #ddd;" colspan="2"><span>Cut-Off
                                    hourse : 8</span></td>
                        </tr>

                        <tr class="trplan">
                            <td class="tdplan"><span style="color:rgb(15, 61, 15);"> <strong> Course
                                        Number</strong></span></td>
                            <td class="tdplan"><span style="color:rgb(15, 61, 15);"> <strong>Course name</strong>
                                </span></td>
                            <td class="tdplan"><span style="color:rgb(15, 61, 15);"> <strong>Cridit Hourse</strong>
                                </span></td>
                            <td class="tdplan"><span style="color:rgb(15, 61, 15);"> <strong>Condition</strong> </span>
                            </td>
                        </tr>`;
    var courses = getCourses2();
    courses.forEach(element => {
        if(element.condiction == 'fail'){
            var row = `                       

        <tr class="trplan">
            <td class="tdplan"><span>${element.coures_number}</span></td>
            <td class="tdplan"><span>${element.coures_name}</span></td>
            <td class="tdplan"><span>${element.cridet_hours}</span></td>
            <td class="tdplan btn btn-danger"><span>${element.condiction}</span></td>
        </tr>
    `;
        }
        else if(element.condiction == 'successful'){
            var row = `                       

        <tr class="trplan">
            <td class="tdplan"><span>${element.coures_number}</span></td>
            <td class="tdplan"><span>${element.coures_name}</span></td>
            <td class="tdplan"><span>${element.cridet_hours}</span></td>
            <td class="tdplan btn btn-success"><span>${element.condiction}</span></td>
        </tr>
    `;
        }
        else{
            var row = `                       

        <tr class="trplan">
            <td class="tdplan"><span>${element.coures_number}</span></td>
            <td class="tdplan"><span>${element.coures_name}</span></td>
            <td class="tdplan"><span>${element.cridet_hours}</span></td>
            <td class="tdplan btn btn-secondary"><span>${element.condiction}</span></td>
        </tr>
    `;
        }
        
        table += row;
    });


    table += `</tbody></table>`;



    var cont = document.getElementById('make_table');
    if (cont) {
        cont.innerHTML = table;
    }
}

function getCourses2() {
    var arr = [];
    var course = {};
    course.coures_number = '1298/5';
    course.coures_name = 'الثقافة الإسلامية',
        course.cridet_hours = 3,
        course.condiction = 'successful';

    var course2 = {
        coures_number: '1379/5',
        coures_name: 'اللغة العريبة',
        cridet_hours: 3,
        condiction: 'successful',
    };
    var course3 = {
        coures_number: '1314/5',
        coures_name: 'اللغة الإنجليزية',
        cridet_hours: 3,
        condiction: 'fail',
    };
    var course4 = {
        coures_number: '1379/5',
        coures_name: 'فلسطين الأرض والإنسان',
        cridet_hours: 3,
        condiction: 'secondary',
    };
    var course5 = {
        coures_number: '1379/5',
        coures_name: 'تطبيقات في الحاسوب',
        cridet_hours: 3,
        condiction: 'successful',
    };

    arr.push(course);
    arr.push(course2);
    arr.push(course3);
    arr.push(course4);
    arr.push(course5);

    return arr;
}