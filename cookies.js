(function(){
    var ppcookie = {
      el:null,
      text:'Strona korzysta z plików cookies w celu realizacji usług. Możesz określić warunki przechowywania lub dostępu do plików cookies w Twojej przeglądarce.',
      img:'data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ2LjA5NSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIuNyAxMi4xOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCguMjY0NTggMCAwIC4yNjQ1OCAtMS42MTAzZS01IDApIiBkPSJtMTQuODY5IDFjLTQuNDgwMSAyLjM0NzctOS4xNzU0IDUuMTYyMS0xMi4wNyAxMi4xNjYtNC40MTQzIDEwLjc3LTAuNTY5NjMgMjMuMDMyIDkuNzE4NyAyOC45NjUgMTIuNTA1IDYuMzk5NiAyMy45ODYgMS43MzY4IDMwLjIyNS02LjYyMTEgNC40ODIyLTYuNjIzNyA0LjkwNzMtMTMuNjU3IDMuNjQ2NS0xOS4wNzgtNi4xMTQ2IDEuMTg3OS05LjY2OC0zLjE4NzUtOS42NjgtMy4xODc1LTYuOTIzMyAyLjAyOTctMTMuMTgzLTEuMDY2Mi0xNC4zODktNi43NTc4IDAgMC01LjU5MTcgMC4xNzkyMy03LjQ2MjktNS40ODYzeiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjOTU5NTk1IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuOTk5MSIgc3R5bGU9InBhaW50LW9yZGVyOm1hcmtlcnMgZmlsbCBzdHJva2UiLz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KC45ODgzNSAwIDAgLjk4ODM1IC4xMzQwNyAtMjgxLjUxKSIgc3Ryb2tlLXdpZHRoPSIuNTM1MTgiPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KC4xNTU1OCAwIDAgLjE1NTU4IC4xODE4MyAyNTAuNjEpIiBzdHJva2U9IiM5NTk1OTUiPgogICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCguOTY2NjcgLjIxMzIzIC0uMjEzMjMgLjk2NjY3IDU2LjQ2NSAtLjUwOTI1KSIgZGlzcGxheT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjQ3NSI+CiAgICA8cGF0aCBkPSJtNzUuMTM5IDI0MC43YTM5LjU1NiAzOS41NTYgMCAwIDEtMTYuMDg1IDUxLjY5NCAzOS41NTYgMzkuNTU2IDAgMCAxLTUyLjYxLTEyLjc3NiAzOS41NTYgMzkuNTU2IDAgMCAxIDkuNDE2Ni01My4zMTQiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3R5bGU9InBhaW50LW9yZGVyOm5vcm1hbCIvPgogICAgPHBhdGggZD0ibTE1Ljg2MSAyMjYuM2MzLjM4MzYgNS40ODI1IDcuNTc2NSA3LjM4MjYgMTQuODA4IDYuNTUwMyA0LjI3MzcgOS4zMTU0IDE1LjEzMSAxMS44NTMgMjYuODYxIDYuMDgwNCA0LjgwNjUgMy41NjE3IDEyLjYyOCAzLjk2MiAxNy42MDkgMS43NjQ4IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogICA8ZyBmaWxsPSIjOTU5NTk1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzLjQzOTkiPgogICAgPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMi40MzkpIiBjeD0iNzEuODE1IiBjeT0iMjMwLjczIiByPSIxLjkxNzQiIHN0eWxlPSJwYWludC1vcmRlcjpub3JtYWwiLz4KICAgIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTIuNDM5KSIgY3g9Ijc0LjU5NSIgY3k9IjI1NC42MyIgcj0iMi45NzM1IiBzdHlsZT0icGFpbnQtb3JkZXI6bm9ybWFsIi8+CiAgICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDEyLjQzOSkiIGN4PSIxMjAuMTIiIGN5PSIyNDYuNjMiIHI9IjMuOTQ4NSIgc3R5bGU9InBhaW50LW9yZGVyOm5vcm1hbCIvPgogICAgPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMi40MzkpIiBjeD0iMTAyLjEzIiBjeT0iMjY1LjY1IiByPSIzLjU0MjMiIHN0eWxlPSJwYWludC1vcmRlcjpub3JtYWwiLz4KICAgIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTIuNDM5KSIgY3g9IjkyLjgyIiBjeT0iMjQzLjU1IiByPSIyLjgxMTEiIHN0eWxlPSJwYWludC1vcmRlcjpub3JtYWwiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+',
      color:'#4baf4c',
      bg:'#fff',
      show:function(settings){
        if(!ppcookie.getCookie('cookieAccept')){
            if(settings){
              ppcookie.color = settings.color?settings.color: ppcookie.color
              ppcookie.bg = settings.bg?settings.bg: ppcookie.bg
              ppcookie.text = settings.text?settings.text: ppcookie.text
            }
            ppcookie.init()
        }
      },
      init:function(){
        var div = document.createElement('DIV')
        ppcookie.el = div
        div.classList = 'cookie-box';
        
        div.style['position']= 'fixed',
        div.style['z-index']= '1000000',
        div.style['max-width']= '1200px',
        div.style['bottom']= '10px',
        div.style['right']= '10px',
        div.style['left']= '10px',
        div.style['background']= ppcookie.bg,
        div.style['padding']= '30px',
        div.style['margin'] ='auto',
        div.style['box-shadow']= 'rgb(0 0 0 / 50%) 1px 1px 3px'
        
  
        var p = document.createElement('p')
        p.style['text-align']='justify'
        p.innerText = ppcookie.text
  
        var img = document.createElement('img')
        img.src = ppcookie.img
        img.alt = 'cookie image',
        img.style['position']='absolute',
        img.style['top']='-30px'
  
        var button = document.createElement('button')
        button.innerHTML = '&times;'
        button.onclick = ppcookie.close;
        button.style['color']=ppcookie.color,
        button.style['position']='absolute',
        button.style['border']='none',
        button.style['background']='transparent',
        button.style['top']='0px'
        button.style['right']='0px'
        button.style['font-size']='20px'
  
        var accept = document.createElement('button')
        accept.innerHTML = 'Jasne akceptuje!'
        accept.onclick = ppcookie.accept;
        accept.style['float']='right',
        accept.style['color']='#fff',
        accept.style['background'] = ppcookie.color,
        accept.style['border']='1px solid '+ppcookie.color,
        accept.style['font-weight']='bold'
        accept.style['font-size']='14px'
  
        div.appendChild(p)
        div.appendChild(img)
        div.appendChild(button)
        div.appendChild(accept)
        document.body.appendChild(div)
      },
      close:function(){
        if(ppcookie.el){
          ppcookie.el.outerHTML = '';
        }
      },
      accept:function(){
        ppcookie.setCookie('cookieAccept',1,365);
        ppcookie.close();
      },
      setCookie:function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      },
      getCookie:function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    }
    setTimeout(function(){
      ppcookie.show()
    },1000)
    
  })();