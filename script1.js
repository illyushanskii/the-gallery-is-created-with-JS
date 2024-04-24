function show(){
    let url1 = 'https:/cdn-s-static.arzamas.academy/uploads/ckeditor/pictures/19579/rep-1.jpg';
    let url2 = 'https:/static.tildacdn.com/tild3839-3435-4139-a566-343861656262/_11.png';
    let url3 = 'https:/encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShULskoPugekWrwBjizvip2eC_WyZveh1MNmiB7CQXgI1vKXOREp-AbFJdTPOsZiY0x_Q&usqp=CAU';
    let url4 = 'https://cdn.vogue.ua/i/image_1200x630/uploads/article/744/94b/4aa/329617_5f214aa94b744.jpeg';
    let url5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeswhOUwwRwmnOsscnly9ioPuZBbh2o50SXJ8W2a8PzvjH2ot92l21h8RVoV3CTbziKdk&usqp=CAU';
    let url6 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/%D0%9B%D1%83%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BD%D0%BE%D1%87%D1%8C_%D0%BD%D0%B0_%D0%9A%D0%B0%D0%BF%D1%80%D0%B8_%D0%90%D0%B9%D0%B2%D0%B0%D0%B7%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9.jpg/1200px-%D0%9B%D1%83%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BD%D0%BE%D1%87%D1%8C_%D0%BD%D0%B0_%D0%9A%D0%B0%D0%BF%D1%80%D0%B8_%D0%90%D0%B9%D0%B2%D0%B0%D0%B7%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9.jpg';
    let url7 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_%D0%A2._%D0%93._%D0%9A%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0._1842.jpg/225px-%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_%D0%A2._%D0%93._%D0%9A%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0._1842.jpg';
    let url8 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Taras_Shevchenko_painting_0018.jpg/800px-Taras_Shevchenko_painting_0018.jpg';
    let url9 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/At_apiary_%28Taras_Shevchenko%29.jpg/645px-At_apiary_%28Taras_Shevchenko%29.jpg';
    let func = 'edit()';
    document.write("<html><head><style>body{background:#ddeeff;}table{color:#952c27;font-size:30px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);width:90%;height:90%;background:#ffeedd;}img{width:200px;border:groove 3mm yellow;}</style></head>");
    document.write("<body onclick=" + func + "><table><tr><th></th><th>Картини Репіна І.Ю.</th><th></th></tr><tr><th><img src='" + url1 + "'></th><th><img src='" + url2 + "'></th><th><img src='" + url3 + "'></th></tr>");
    document.write("<tr><th></th><th>Картини Айвазовського І.К.</th><th></th></tr><tr><th><img src='" + url4 + "'></th><th><img src='" + url5 + "'></th><th><img src='" + url6 + "'></th></tr>");
    document.write("<tr><th></th><th>Шевченка Т.Г.</th><th></th></tr><tr><th><img src='" + url7 + "'></th><th><img src='" + url8 + "'></th><th><img src='" + url9 + "'></th></tr></table></body></html>");
    var fz=document.createAttribute("style");
}

function edit(){
    var fz=document.createAttribute("style");
    var fv=document.createAttribute("style");
    var url = 'GRAF/cat.jpg'
    fz.value="background: url("+ url +");background-size:cover";
    fv.value = "background-color: rgba(255, 255, 255, 0)";
    //Створює посилальне ім'я на заголовок
    
    var zag=document.getElementsByTagName("body")[0];
    var zav=document.getElementsByTagName("table")[0];
    
    
    zag.setAttributeNode(fz);
    zav.setAttributeNode(fv);
}