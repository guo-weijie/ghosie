// ==UserScript==
// @name         同城微博窗口变宽
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  https://keep-silence.com
// @author       Ghosie
// @match        https://place.weibo.com/map/*
// @icon         https://tse1-mm.cn.bing.net/th/id/R-C.930ab2e016b39f555e65f6028693e9a2?rik=fJ%2fIR3hNYfKDhg&riu=http%3a%2f%2fwww.freeiconspng.com%2fuploads%2fletter-g-icon-png-24.png&ehk=UuHoiv5zjzVrAKosrbKdOvNtn%2f%2bCE9OJvVTYBNdaGCM%3d&risl=&pid=ImgRaw&r=0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function callback(mutationList, observer) {
      mutationList.some(item => {
        item.addedNodes.forEach(iten=>{
          if(iten.className==='_km103'){
            let myNode = document.querySelector('._sk3n2')
            myNode.style.width='500px'
            observer.disconnect()
            return true
          }
        })
      })
    }
    let target = document.querySelector('body')
    const config = {
      childList: true,
      attributes: false,
      subtree: true
    }
    const observer = new MutationObserver(callback)
    observer.observe(target, config)
})();