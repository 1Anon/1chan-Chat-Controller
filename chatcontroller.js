// ==UserScript==
// @name 1chan chat controller
// @author 1anon
// @version 0.7 Cheezy Crust
// @description Features all (almost) default commands of chat control, saves chat passwords in localstorage. Still in progress, lacks some stuff I wanna implement. Mail me at maeggot@yandex.ru if you want something.
// @icon http://1chan.ru/ico/favicons/1chan.ru.gif
// @match http://*1chan.ru/*
// @require http://github.com/andris9/jStorage/raw/master/jstorage.js
// @include http://1chan.ru/*
// @include https://1chan.ru/*
// @include http://*.1chan.ru/*
// @include https://*.1chan.ru/*
// @grant none

// ==/UserScript==





function getButtonByValue(checker) {
        var els = document.getElementsByTagName('input');

        for (var i = 0, length = els.length; i < length; i++) {
            var el = els[i];
            if (el.value == checker) {
                
                return el;
                break;
            }
        }
    }

        jQuery((new (function(){
            var self = this;
            this.init = function() 
                {
                var tmp = ".b-chat";
                jQuery(tmp).append("<br>");
                jQuery(tmp).append("Пароль от чата:<textarea style=\"resize:none; width:150px; height:15px;\" id=\"chat_pwd\" name=\"BL4H\">BL4H</textarea><br>");
                self.getPwd();
                self.createButton("Сохранить пароль", self.savePwd);
                jQuery(tmp).append("<br>Управление комнатой<br>");
                self.createButton("Изменить заголовок", self.changeTitle);
                self.createButton("Изменить описание", self.changeDescription);
                self.createButton("Изменить информационное сообщение", self.setInfo);
                self.createButton("Сделать комнату невидимой", self.changeVisibility);
                self.createButton("Удалить комнату", self.removeRoom);
                jQuery(tmp).append("<br>Управление пользователями<br>");
                self.createButton("Забанить постера", self.devoiceUser);
                self.createButton("Разбанить постера", self.envoiceUser);
                self.createButton("Разблокировать всех", self.envoiceAll);
                jQuery(tmp).append("<br>Управление вордфильтром<br>");
                self.createButton("Вывести список заблокированных слов", self.listBlockedWords);
                self.createButton("Заблокировать слово (точное)", self.blockWordSimple);
                self.createButton("Удалить заблокированное слово", self.removeBlockedWord);
                jQuery(tmp).append("<br>Прочее<br>");
                self.createButton("Список команд чата", self.displayChatHelp);
                self.createButton("Помощь по скрипту", self.scriptHelp);
                /*
                self.createButton("Бороться с аниме", self.animeFight);
                self.createButton("Бороться с шизоидом", self.sheezFight);
                self.createButton("Бороться с гниданусом", self.gneedsFight);
                jQuery(tmp).append("<br>");
                self.createButton("Пописать", self.piss);
                self.createButton("Покакать", self.prr);
                self.createButton("Автоответчик", self.autoCoproReply); */
                jQuery(tmp).append("<br>Эта хуйня не работает<br>");   
                self.createButton("Заблокировать слово (со всеми комбинациями)", self.blockWordFull);
                self.createButton("Очистить вордфильтр", self.cleanBlockedWords);
                };
                
                
       this.savePwd = function(){
       var pwdForm = document.getElementById("chat_pwd");
       var pwd = pwdForm.value;
       var chatNum = window["location"]["pathname"]["split"]("/")[2];
       localStorage.setItem("password-" + chatNum, pwd);
       }
       
       this.getPwd = function(){
       var pwdForm = document.getElementById("chat_pwd");
       var chatNum = window["location"]["pathname"]["split"]("/")[2];
       var pwd=localStorage.getItem("password-" + chatNum);
       var BL4H = "BL4H";
       if (pwd=="") {pwdForm.value=BL4H;}
            else {pwdForm.value=pwd;}
       }
       
       this.scriptHelp = function(){
       
        var container = document.createElement("div");
        container.id="helper";
        container.setAttribute("style", "top: 5px; left:5px; position:fixed; z-index: 10000; background: #EAF4FF; border: 1px black");
        var text = "Короче, суть такова - вайпалка составляет сообщение из -----рандомного количества рандомных символов - обычно -----кириллических. Блокировка одного из символов отсекает -----почти весь вайп. ----- -----Пустые сообщения генерируются с помощью <br/> - -----блокировать можно именно этим тегом, таким же -----образом можно и предотвращать вайп смайлами. ----- -----Скрипт пока что не умеет блокировать обход -----вордфильтра. ----- -----Пароли сохраняются в локалсторадже, -----возможно запилю сохранение забаненных хэшей. -----Хэш сообщения протухает примерно через 10 минут -----после постинга - то есть сообщение, запощенное ----- примерно 10 минут назад, нельзя забанить.";
        var textarr = text.split("-----");
        for (var i=0; i<textarr.length; i++)
            {
            var desc = document.createTextNode(textarr[i]);
            container.appendChild(desc);
            container.appendChild(document.createElement('br')); 
            }
        var button = document.createElement("button");
        button.textContent = "Закрыть окно помощи";
        
        button.onclick = self.closeScriptHelp;
            
        button.style.margin = "5px";
        container.appendChild(button);
        document.getElementsByTagName("body")[0].appendChild(container);
       }
       
       this.closeScriptHelp = function()
       {
            var menu = document.getElementById('helper');
            menu.parentNode.removeChild(menu);          
       }
  
       this.blockWordFull = function(){
       alert("in progress, mate");
       /* var pwdForm = document.getElementById("chat_pwd");
       var pwd = pwdForm.value;
       var blockArray = [];
       var i=0;
       var j=0;
       var cmdArg=prompt("Введи фразу для блокировки:", "testing tests...");
       var tmp=cmdArg;
       blockArray[i]=tmp;
       i++;
       var message = "/blockword" + cmd + " " + pwd + "---Начало блокировки комбинаций словосочетания \<" + cmdArg + ">---";
       self.sendMessageToThread(message);
       
       for (var cnt=0; cnt < tmp.length; cnt++)
        { */
        
        
        /*
        Схема короче такова
        rus -> замена
        a   -> a, A
        A   -> a, A
        у   -> y, Y
        У   -> y, Y
        к   -> k, K
        К   -> k, K
        е   -> e, E
        Е   -> e, E
        н   -> h, H, n, N
        Н   -> h, H, n, N
        з   -> 3
        З   -> 3
        х   -> x, X
        Х   -> x, X
        в   -> B
        В   -> B
        р   -> p, P
        Р   -> p, P
        о   -> o, O, 0
        О   -> o, O, 0
        ч   -> 4
        Ч   -> 4
        с   -> c, C
        С   -> c, C
        м   -> m, M
        М   -> m, M
        т   -> t, T
        Т   -> t, T
        ь   -> b
        Ь   -> b
        */
        /* if (tmp[cnt]=='') 
            {
            var newelem=tmp;
            newelem[cnt]='';
            blockArray[i]=newelem;
            i++;
            } */
        
        
        /* }
       
       var message = "/blockword" + cmd + " " + pwd + "---Конец блокировки комбинаций словосочетания \<" + cmdArg + ">---";
       self.sendMessageToThread(message); */
       }
       
       this.cleanBlockedWords = function(){
       alert("In progress, mate.");
       }
       
       this.blockWordSimple = function(){
       var text = "Введи текст для блокировки";
       var cmd = "blockword";
       self.commandWithArgs(text, cmd);
       }
       
       this.removeBlockedWord = function(){
       var cmd = "rm_blockword";
       var text = "Введи номер слова в списке блокировки";
       self.commandWithArgs(text, cmd);
       }
       
       this.changeVisibility = function(){
       var cmd = "set_public";
       var pwdForm = document.getElementById("chat_pwd");
       var pwd = pwdForm.value;
       var isVisible=confirm("Сделать комнату невидимой?");
       var cmdArg=1;
       if (isVisible==true) cmdArg=0;
       if (isVisible==false) cmdArg=1;
       var message = "/" + cmd + " " + pwd + " " + cmdArg;
       self.sendMessageToThread(message);
       }
       
       
       this.changeTitle = function(){
       var cmd = "change_title";
       var text = "Введи новый заголовок";
       self.commandWithArgs(text, cmd);
       }
       
       this.changeDescription = function(){
       var cmd = "change_description";
       var text = "Введи новое описание";
       self.commandWithArgs(text, cmd);
       }
       
       this.setInfo = function(){
       var cmd = "set_info";
       var text = "Введи новое сообщение";
       self.commandWithArgs(text, cmd);
       }
       
       this.devoiceUser = function(){
       var cmd = "devoice";
       var text = "Введи номер поста";
       self.commandWithArgs(text, cmd);
       }
       
       this.envoiceUser = function(){
       var cmd = "envoice";
       var text = "Введи хэш блокировки";
       self.commandWithArgs(text, cmd);
       }
       
       
       this.displayChatHelp = function(){
       var cmd = "help";
       self.commandWOArgs(cmd);
       }
       
       this.envoiceAll = function(){
       var cmd = "envoice";
       self.commandWOArgs(cmd);
       }
       
       this.removeRoom = function(){
       var cmd = "remove_room";
       self.commandWOArgs(cmd);
       }
       
       this.listBlockedWords = function(){
       var cmd = "ls_blockwords";
       self.commandWOArgs(cmd);
       }
       
       
       
       this.commandWithArgs = function(promptText, cmd){
       var pwdForm = document.getElementById("chat_pwd");
       var pwd = pwdForm.value;
       var cmdArg=prompt(promptText + ":", "testing tests...");
       var message = "/" + cmd + " " + pwd + " " + cmdArg;
       self.sendMessageToThread(message);
       }
       
       this.commandWOArgs = function(cmd){
       var pwdForm = document.getElementById("chat_pwd");
       var pwd = pwdForm.value;
       var message = "/" + cmd + " " + pwd;
       self.sendMessageToThread(message);
       }
       
        
            this.sendMessageToThread = function(message){
            var threadNumber = window.location.pathname.split("/")[3];
            var textForm = document.getElementById("comment_form_text");
            textForm.value += message;
            getButtonByValue("Отправить (Ctrl+Enter)").click();
            textForm.value = "";
            
             /* var captcha = self.getCaptcha();
                    jQuery.post("http://1chan.ru/chat/"+threadNumber+"/add_comment/", {"post_id": threadNumber, "captcha_key": "comment", "captcha": captcha, "homeboard": "2ch.hk", "text": message });
            */
            
            };
        
        
            this.createButton = function(text, handler){
                var randomId = Math.random().toString().replace("0.", "button-");
                var button = jQuery("<button>");
                button.addClass(randomId);
                button.text(text);
                jQuery(".b-chat").append(button);
                
                if (typeof (handler) == "function")
                        jQuery(document).on("click", "."+randomId, handler);
            };
        
        
                
        
        
        })()).init())
        
        
