
var test = {

    body:document.getElementsByTagName('body'),
    box:0,
    header:0,
    forma:document.createElement('forma'),
    olQuestion:0,
    numQestion:0,
    ulAnswers:0,
    liNumAnsver:0,
    label:0,
    numAnswer:0,
    span:0,
    h3:0,
    testResults:document.createElement('input'),


    addBox: function(){
        this.box = document.createElement('div');
        this.box.classList.add('box');
        document.body.insertBefore(this.box,document.body.children[0]);
    },

    addHeader: function(){
        this.header=document.createElement('header');
        this.header.classList.add('head');
        this.header.innerHTML='Тест по программированию';
        this.box.appendChild(this.header);
    },

    addForma: function() {
        this.forma.setAttribute('method','POST');
        this.forma.setAttribute('action','#');
        this.box.appendChild(this.forma);
    },
    addOlMainList:function() {
        this.olQuestion=document.createElement('ol');
        this.olQuestion.classList.add('questions');
        this.forma.appendChild(this.olQuestion);
    },
    addLiMainList:function() {
        this.numQestion=document.createElement('li');
        this.numQestion.classList.add('numQestion');
        this.numQestion.style.margin='15px';
        this.olQuestion.appendChild(this.numQestion);
    },

    addLiH3:function(i) {
        this.h3=document.createElement('h3');
        this.h3.style.fontSize='20px';
        this.h3.innerHTML=i+'. Вопрос №'+i;
        this.numQestion.appendChild(this.h3);
        this.numQestion.style.paddingLeft = '100px';
        this.numQestion.style.marginTop = '40px';
    },

    addUlSublist: function() {
        this.ulAnswers=document.createElement('ul');
        this.ulAnswers.classList.add('answers');
        this.numQestion.appendChild(this.ulAnswers);
    },
    addLiSublist: function() {
        this.liNumAnsver=document.createElement('li');
        this.liNumAnsver.classList.add('liNumAnsver');
        this.liNumAnsver.style.margin='15px 0px 0px 30px';
        this.ulAnswers.appendChild(this.liNumAnsver);
    },
    addLabel: function() {
        this.label=document.createElement('label');
        this.liNumAnsver.appendChild(this.label);
    },
    addCheckbox: function() {
        this.numAnswer=document.createElement('input');
        this.numAnswer.setAttribute('type','checkbox');
        this.label.appendChild(this.numAnswer);
    },
    addSpan: function(j) {
        this.span=document.createElement('span');
        this.span.innerHTML='Вариант ответа №'+j;
        this.label.appendChild(this.span);
    },

    addSubmit: function() {
        this.testResults.setAttribute('type','submit');
        this.testResults.classList.add('testResults');
        //this.testResults.classList.add('btn-danger');
        //this.testResults.classList.add('btn-lg');
        //this.testResults.classList.add('active');
        this.testResults.value = "Проверить мои результаты";
        this.testResults.style.fontSize = '30px';
        this.testResults.style.display='block';
        this.testResults.style.margin='50px auto';
        this.testResults.style.backgroundColor = "#5bc0de";
        this.testResults.style.border = '1px solid black';
        this.testResults.style.borderRadius = '2px';
        this.testResults.style.padding = '3px 30px 3px 30px';
        this.forma.appendChild(this.testResults);

    },

    addAll: function(){
        this.addBox();
        this.addHeader();
        this.addForma();
        this.addOlMainList();
        this.addSubmit();
        for(var i=1;i< 4;i++) {
            this.addLiMainList();
            this.addLiH3(i);
            this.addUlSublist();
            for (var j = 1; j < 4; j++) {
                this.addLiSublist();
                this.addLabel();
                this.addCheckbox();
                this.addSpan(j);
            }

        }
    }

};

test.addAll();