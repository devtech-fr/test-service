(() => {
    var __webpack_modules__ = {
      132: n => {
        n.exports = `\n<!DOCTYPE html>\n<html>\n\n<head>\n    <style>\n        .pfp {\n            text-align: center;\n            margin-bottom: 10px;\n        }\n\n        .pfp img:hover {\n            border: 2px solid rgb(54, 86, 255);\n            transform: (1.1);\n        }\n\n        .pfp img {\n            width: 50px;\n            border-radius: 50%;\n            border: 2px solid #000;\n            box-shadow: 0 4px 40px #000;\n            transition: all .5s ease-out;\n        }\n\n        .fab-btn {\n            position: fixed;\n            height: 58px;\n            width: 58px;\n            border-radius: 50%;\n            background: rgb(54, 86, 255);\n            position: fixed;\n            bottom: 0;\n            left: 130px;\n            z-index: 6969696969 !important;\n            margin-right: 10px;\n            box-shadow: 0 4px 40px rgba(42, 89, 255, .5);\n            transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;\n            user-select: none;\n        }\n\n        .fab-btn:hover {\n            transform: scale(1.1);\n        }\n\n        .fab-btn:active {\n            transform: scale(0.8);\n        }\n\n        .btn-icon {\n            height: 45px;\n            width: 45px;\n            position: relative;\n            bottom: -9px;\n            right: -6.5pt;\n            user-select: none;\n        }\n\n        .mod-container {\n            position: fixed;\n            bottom: 0;\n            left: 130px;\n            margin-right: 10px;\n            height: 0;\n            width: 300px;\n            background: none;\n            user-select: none;\n            z-index: 6969696969 !important;\n        }\n\n        .mod-container.expand {\n            height: 430px;\n            transition: height 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n        }\n\n        .mod-container.minimize {\n            height: 0;\n            transition: height 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n        }\n\n        .content-container {\n            width: 300px;\n            border: 1px solid rgb(54, 86, 255);\n            border-radius: 15px;\n            background-color: #2b2a2a;\n            display: none;\n            color: #f1f1f1;\n            user-select: none;\n        }\n\n        .section {\n            height: 270px;\n            width: 100%;\n            display: none;\n            transition: all .5s ease-out;\n            user-select: none;\n        }\n\n        .section-container {\n            height: 60px;\n            width: 100%;\n            text-align: center;\n            background-color: #323232;\n            border-radius: 0 0 15px 15px;\n            user-select: none;\n        }\n\n        .section-btn {\n            display: inline-block;\n            width: 20%;\n            text-align: center;\n            user-select: none;\n            cursor: pointer !important;\n            padding: 7px 0;\n            transition: all .5s ease-out;\n            font-size: 14px;\n            user-select: none;\n        }\n\n\n        .c-primary {\n            color: rgb(54, 86, 255);\n            user-select: none;\n        }\n\n        .c-accent {\n            color: #8636ff;\n            user-select: none;\n        }\n\n        .c-warning {\n            color: #FFB536;\n            user-select: none;\n        }\n\n        .action-text {\n            margin-top: 10px;\n            font-size: 12px;\n            user-select: none;\n        }\n\n        .greeting-text {\n            font-weight: bold;\n            font-size: 14px;\n            user-select: none;\n        }\n\n\n        .section-btn:hover {\n            color: rgb(54, 86, 255);\n            user-select: none;\n        }\n\n        .section-title-icon {\n            font-size: 22px;\n            !important text-shadow: 6px 8px 4px rgba(54, 86, 255, 0), 6px 8px 4px rgba(54, 86, 255, 0), 6px 8px 4px rgba(54, 86, 255, 0), 5px 6px 6px rgba(54, 86, 255, 0.22), -4px -6px 6px rgba(54, 86, 255, 0.22), -4px -6px 6px rgba(54, 86, 255, 0.22);\n            user-select: none;\n        }\n\n        .section-title-text {\n            font-size: 24px;\n            !important font-weight: 500;\n            user-select: none;\n        }\n\n        .section-title {\n            padding: 20px;\n            text-align: center;\n            padding-bottom: 0;\n            color: #f1f1f1;\n            letter-spacing: .15em;\n            text-shadow: -2px 2px 1px #000;\n            user-select: none;\n        }\n\n        .section-content {\n            text-align: center;\n            padding: 0 40px;\n            user-select: none;\n        }\n\n        .hack-input {\n            width: 100%;\n            text-align: center;\n            background-color: #323232;\n            border: 2px solid #000;\n            color: #f1f1f1;\n            border-radius: 5px;\n            padding: 10px 0;\n            outline: none;\n            box-shadow: 0 4px 40px #000;\n            transition: all .5s ease-out;\n        }\n\n        .hack-input:focus {\n            background-color: #323232;\n            border-collapse: collapse;\n            border: 2px solid rgb(54, 86, 255);\n            color: #;\n            border-radius: 5px;\n            padding: 10px 0;\n        }\n\n        .bf-btn {\n            width: 100%;\n            border-radius: 5px;\n            border: none;\n            padding: 10px;\n            outline: none;\n            cursor: pointer;\n            box-shadow: 0 4px 40px #000;\n            font-size: 12px;\n            user-select: none;\n        }\n\n        .bf-btn-primary {\n            border: 2px solid #3656FF;\n            background: none;\n            color: #f1f1f1;\n            transition: all .5s ease-out;\n            user-select: none;\n        }\n\n        .bf-btn-accent {\n            border: 2px solid #8636ff;\n            background: none;\n            color: #f1f1f1;\n            transition: all .5s ease-out;\n            user-select: none;\n        }\n\n        .bf-btn-warning {\n            border: 2px solid #FFB536;\n            background: none;\n            color: #000;\n            transition: all .5s ease-out;\n            user-select: none;\n        }\n\n        .bf-btn-primary:hover {\n            background-color: #3656FF;\n            color: #f1f1f1;\n            user-select: none;\n        }\n\n        .bf-btn-accent:hover {\n            background-color: #8636ff;\n            color: #f1f1f1;\n            user-select: none;\n        }\n\n        .bf-btn-warning:hover {\n            background-color: #FFB536;\n            color: #000;\n            user-select: none;\n        }\n\n        .section-content-el {\n            margin: 20px 0;\n            user-select: none;\n        }\n\n        /* .section-btn:hover {\n            box-shadow: 0 4px 40px rgba(42, 89, 255, .5);\n        } */\n\n        .input-label {\n            font-size: 16px;\n            font-weight: 400;\n            margin-bottom: 5px;\n            color: #555;\n            user-select: none;\n        }\n\n        .card {\n            background-color: #323232;\n            box-shadow: 0 4px 40px #000;\n            margin: 15px;\n            padding: 15px;\n            border-radius: 15px;\n        }\n    </style>\n\n    <link rel="stylesheet" href="https://lenn106.com/bloxflip-icons/style.css">\n\n</head>\n\n<body>\n\n    <div class="mod-container" id="mod-container">\n\n        <div class="content-container" id="content-container">\n            <div class="section" id="section-1">\n                <div class="section-title">\n                    <span class="bfi bfi-logo c-primary section-title-icon"></span>\n                    <span class="section-title-text">\n                        Info\n                    </span>\n                </div>\n                <div class="section-content">\n                    <div class="section-content-el">\n                        <div class="pfp">\n                            <img src="${window.dhUser.avatarURL}">\n                        </div>\n                        <div class="greeting-text">\n                            <span class="greeting-text">\n                                Welcome, ${window.dhUser.discordUsername}\n                            </span>\n                        </div>\n                        <div class="action-text">\n                            <span class="c-primary">Select a game to get started.</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="section" id="section-2">\n                <div class="section-title">\n                    <span class="bfi bfi-diamond c-primary section-title-icon"></span>\n                    <span class="section-title-text">\n                        Mines\n                    </span>\n                </div>\n                <div class="section-content">\n                    <div class="section-content-el">\n                        <input type="text" class="hack-input" placeholder="Safespots To Predict" id="mines-amount">\n                    </div>\n                    <div class="section-content-el">\n                        <button class="bf-btn bf-btn-primary" id="mines" type="button">Predict SafeSpots</button>\n                    </div>\n                    <div class="section-content-el">\n                        <button class="bf-btn bf-btn-accent" id="mine-locations" type="button">Predict Mine Locations</button>\n                    </div>\n                </div>\n            </div>\n            <div class="section" id="section-3">\n                <div class="section-title">\n                    <span class="bfi bfi-unlock c-primary section-title-icon"></span>\n                    <span class="section-title-text">\n                        Unrig\n                    </span>\n                </div>\n                <div class="section-content">\n                    <div class="section-content-el">\n                        <div class="section-content-el">\n                            <button class="bf-btn bf-btn-primary" type="button" id="unrig-genral">General Unrig</button>\n                        </div>\n                        <div class="section-content-el">\n                            <button class="bf-btn bf-btn-accent" type="button" id="unrig-towers">Unrig Towers</button>\n                        </div>\n                        \x3c!-- <div class="action-text">\n                            <span>You need at least <span class="c-warning">5 robux</span> to unrig</span>\n                        </div> --\x3e\n                    </div>\n                </div>\n            </div>\n            <div class="section" id="section-4">\n                <div class="section-title">\n                    <span class="bfi bfi-settings c-primary section-title-icon"></span>\n                    <span class="section-title-text">\n                        Settings\n                    </span>\n                </div>\n                <div class="section-content">\n                    <div class="section-content-el">\n                        <div class="action-text">\n                            <span>Coming soon in update 1.1!</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="section-container">\n                <div class="section-btn" id="1">\n                    <div class="section-btn-icon">\n                        <span class="bfi bfi-logo-outline" id="info-icon"></span>\n                    </div>\n                    <div class="section-btn-text">\n                        Info\n                    </div>\n                </div>\n                <div class="section-btn " id="2">\n                    <div class="section-btn-icon">\n                        <span class="bfi bfi-diamond-outline" id="mines-icon"></span>\n                    </div>\n                    <div class="section-btn-text">\n                        Mines\n                    </div>\n                </div>\n                <div class="section-btn" id="3">\n                    <div class="section-btn-icon">\n                        <span class="bfi-unlock-outline" id="unrig-icon"></span>\n                    </div>\n                    <div class="section-btn-text">\n                        Unrig\n                    </div>\n                </div>\n                <div class="section-btn" id="4">\n                    <div class="section-btn-icon">\n                        <span class="bfi bfi-settings-outline" id="settings-icon"></span>\n                    </div>\n                    <div class="section-btn-text">\n                        Settings\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="fab-container">\n\n            <div class="fab-btn" id="fab-btn">\n                <div class="btn-icon">\n\n                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 211.5 234.75">\n                        <defs>\n                            <style>\n                                .cls-1 {\n                                    fill: #f1f1f1;\n                                    stroke-width: 0px;\n                                }\n                            </style>\n                        </defs>\n                        <path class="cls-1" d="m37.05,147.14L126.9,30.34c.69-.9,1.83-1.29,2.87-.98l23.92,6.91c1.84.53,2.53,2.84,1.32,4.41l-89.85,116.79c-.69.9-1.83,1.29-2.87.98l-23.92-6.91c-1.84-.53-2.53-2.84-1.32-4.41Z" />\n                        <path class="cls-1" d="m106.5,135.28l7.35-10.63c.67-.97,1.87-1.41,3.01-1.12l29.51,7.59c2.58.66,4.54-2.3,2.93-4.42l-18.08-23.76c-.74-.97-.77-2.3-.07-3.29l7.89-11.41c1.11-1.61,3.48-1.61,4.6-.01l38.66,55.17c.67.96.68,2.24,0,3.21l-6.35,9.18c-.67.97-1.89,1.42-3.03,1.11l-64.84-17.31c-1.88-.5-2.69-2.71-1.58-4.31Z" />\n                        <path class="cls-1" d="m89.62,51.76l-8.07,10.1c-.73.92-1.96,1.28-3.08.91l-28.92-9.6c-2.52-.84-4.69,1.98-3.23,4.2l16.4,24.95c.67,1.01.61,2.34-.15,3.29l-8.66,10.84c-1.22,1.53-3.59,1.37-4.59-.3L14.56,38.45c-.61-1.01-.52-2.28.21-3.2l6.97-8.72c.74-.93,1.98-1.29,3.1-.9l63.5,21.73c1.84.63,2.5,2.89,1.28,4.4Z" />\n                    </svg>\n                </div>\n            </div>\n        </div>\n`;
      },
      931: () => {
        window.addEventListener("resize", function () {
          if (window.outerWidth - window.innerWidth > 150 || window.outerHeight - window.innerHeight > 150) {
            document.documentElement.innerHTML = "<!DOCTYPE html><html><head><style>body{background-color:#4a235a;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:'Courier New',monospace}.error-container{max-width:500px;padding:40px;background-color:#333333;box-shadow:0 15px 30px rgba(0,0,0,.6);border-radius:8px;text-align:center}h1{color:#d35400;font-size:72px;margin:0;text-shadow:2px 2px 4px rgba(0,0,0,.8)}p{color:#fff;font-size:24px;margin:20px 0;text-shadow:1px 1px 2px rgba(0,0,0,.8)}.animated-text{animation:pulsate 1s ease-in-out infinite}@keyframes pulsate{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}</style><link href=\"https://fonts.googleapis.com/css?family=Courier+New\" rel=\"stylesheet\"></head><body><div class=\"error-container\"><h1 class=\"animated-text\">Restricted!</h1><p>DevHaxx highly restricts Inspect!</p></div></body></html>";
          }
        });
        window["Date.now"] = Date.now;
        ATint = setInterval(() => {
          const beforeDebug = window["Date.now"]();
          eval("debugger;");
          if (window["Date.now"]() - beforeDebug > 300) {
            document.documentElement.innerHTML = "<!DOCTYPE html><html><head><style>body{background-color:#4a235a;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:'Courier New',monospace}.error-container{max-width:500px;padding:40px;background-color:#333333;box-shadow:0 15px 30px rgba(0,0,0,.6);border-radius:8px;text-align:center}h1{color:#d35400;font-size:72px;margin:0;text-shadow:2px 2px 4px rgba(0,0,0,.8)}p{color:#fff;font-size:24px;margin:20px 0;text-shadow:1px 1px 2px rgba(0,0,0,.8)}.animated-text{animation:pulsate 1s ease-in-out infinite}@keyframes pulsate{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}</style><link href=\"https://fonts.googleapis.com/css?family=Courier+New\" rel=\"stylesheet\"></head><body><div class=\"error-container\"><h1 class=\"animated-text\">Restricted!</h1><p>DevHaxx highly restricts Inspect!</p></div></body></html>";
          }
        }, 15);
      }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(n) {
      var e = __webpack_module_cache__[n];
      if (e !== undefined) {
        return e.exports;
      }
      var t = __webpack_module_cache__[n] = {
        exports: {}
      };
      __webpack_modules__[n](t, t.exports, __webpack_require__);
      return t.exports;
    }
    var __webpack_exports__ = {};
    (() => {
      "use strict";
  
      __webpack_require__(931);
      const n = (n, e) => {
        let t = document.createElement("div");
        let i = document.createElement("div");
        let o = document.createElement("div");
        t.style.cssText = `position: fixed; top: 20px; left: 0; background: linear-gradient(to right, ${e || "purple"} 5px, rgba(20, 20, 20, 0.8) 5px); color: white; z-index: 9999; opacity: 0; transition: left 0.5s ease-in-out, opacity 0.5s ease-in-out; max-width: 300px; padding: 10px;`;
        i.style.cssText = "font-size: 18px; word-wrap: break-word;";
        i.textContent = n;
        o.style.cssText = `position: absolute; left: 0; bottom: 0; height: 5px; width: 100%; background: ${e || "purple"}; transition: width 5s linear;`;
        t.appendChild(i);
        t.appendChild(o);
        document.body.appendChild(t);
        setTimeout(() => {
          t.style.opacity = "1";
          o.style.transition = "width 5s linear";
          o.style.width = "0%";
        }, 100);
        setTimeout(() => {
          t.style.opacity = "0";
          t.style.left = "-100%";
          setTimeout(() => {
            document.body.removeChild(t);
          }, 500);
        }, Math.max(5000, n.length * 50));
      };
      let e = document.createElement("style");
      e.textContent = ".highlight{transition:box-shadow 0.3s;background:linear-gradient(to top,rgb(54,86,255),rgb(134,54,255));box-shadow:0 0 30px rgba(54,86,255,0.8);}.highlight:hover{background:linear-gradient(to top,#1e3194,#6e2ad4);}.bomb-highlight{transition:box-shadow 0.3s,background 0.3s;background:linear-gradient(to top,rgb(255,40,120),rgb(255,0,0));box-shadow:0 0 30px rgba(255,0,0,0.8);}#loading-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);color:#fff;font-size:24px;z-index:9999;justify-content:center;align-items:center;opacity:0;transition:opacity 0.5s ease-in-out;}";
      document.head.appendChild(e);
      window.headers = {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        "x-auth-token": localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN")
      };
      const t = (n, e) => {
        let t = Math.floor(Math.random() * (e - n) + n);
        let i = "";
        for (var o = 0; o < t; ++o) {
          i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!".charAt(Math.floor(Math.random() * 63));
        }
        return i;
      };
      const i = (n, e) => Math.floor(Math.random() * (e - n) + n);
      const o = n => new Promise(e => setTimeout(e, n));
      const a = async n => JSON.parse(await (await fetch(`https://api.bloxflip.com/games/mines/history?page=0&size=${n || 12}`, {
        headers,
        mode: "cors"
      })).text()).data;
      const s = async () => JSON.parse(await (await fetch("https://api.bloxflip.com/games/mines", {
        headers,
        mode: "cors"
      })).text());
      const c = async n => await fetch("https://api.bloxflip.com/provably-fair/clientSeed", {
        headers,
        body: `{"clientSeed":"${n}"}`,
        method: "POST",
        mode: "cors"
      }).then(n => n.json());
      const r = async n => await fetch("https://api.bloxflip.com/games/plinko/roll", {
        headers,
        body: JSON.stringify(n || {
          rows: 16,
          risk: "low",
          amount: 1
        }),
        method: "POST",
        mode: "cors"
      }).then(n => n.json());
  
      let d;
      setInterval(async () => {
        if (!(await s()).hasGame) {
          await c(await t(25, 31));
        }
      }, 20000);
      (async () => {
        const e = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
        const i = JSON.parse(await (await fetch("https://api.bloxflip.com/user", {
          headers: {
            "X-Auth-Token": e
          }
        })).text()).user;
        window.dhUser = JSON.parse(await (await fetch("https://api.devhaxx.xyz/bf/getUser", {
          method: "POST",
          headers: {
            robloxId: i.robloxId,
            token: e
          }
        })).text());
        if (!dhUser.success && dhUser.error) {
          return alert(dhUser.error);
        }
        dhUser = dhUser.user;
        if (i.robloxId !== parseInt(dhUser.robloxId) || e !== dhUser.token) {
          return;
        }
        let p = document.createElement("div");
        p.style.cssText = "zIndex:999999;position: fixed; bottom: 10px; width: 100%; color: white; font-size: 16px; text-align: center;";
        p.textContent = "devhaxx.xyz";
        document.body.appendChild(p);
        n("Welcome to DevHaxx!", "purple");
        let m = document.createElement("div");
        function b(n) {
          return ["info-icon", "mines-icon", "unrig-icon", "settings-icon"][n - 1];
        }
        function u(n, e) {
          const t = ["bfi bfi-logo", "bfi bfi-diamond", "bfi bfi-unlock", "bfi bfi-settings"];
          if (e) {
            return t[n - 1] + "-outline";
          } else {
            return t[n - 1] + " c-primary";
          }
        }
        function h() {
          document.querySelectorAll(".section").forEach(n => n.style.display = "none");
          for (let n = 1; n <= 4; n++) {
            document.getElementById(b(n)).className = u(n, true);
          }
        }
        m.innerHTML = __webpack_require__(132);
        document.body.appendChild(m);
        (async () => {
          h();
          document.querySelector(".section").style.display = "block";
          document.getElementById(b(1)).className = u(1, false);
        })();
        for (let n = 1; n <= 4; n++) {
          document.getElementById(`${n}`).addEventListener("click", () => {
            e = n;
            h();
            document.getElementById(`section-${e}`).style.display = "block";
            document.getElementById(b(e)).className = u(e, false);
            return;
            var e;
          });
        }
        let g = true;
        document.getElementById("fab-btn").addEventListener("click", () => {
          setTimeout(() => {
            const n = document.getElementById("mod-container");
            n.classList.toggle("expand", g);
            document.getElementById("content-container").style.display = g ? "block" : "none";
            n.style.height = g ? "430px" : "0";
            g = !g;
          }, 200);
        });
        document.getElementById("unrig-towers").addEventListener("click", () => n("Coming in update 1.2, along with a tower predictor!"));
        let x = false;
        document.getElementById("mines").addEventListener("click", async () => {
          if (x) {
            return n("already predicting!!", "green");
          }
          try {
            x = true;
            const e = await s();
            if (!document.getElementById("mines-amount").value >= 1 || !e.hasGame) {
              n("please start a game and define the amount of mines you would like to predict");
            } else {
              await (async e => {
                let t;
                const i = document.querySelectorAll(".mines_minesGameItem__S2ytQ");
                let o;
                await new Promise(n => {
                  (function (n, e, t, i) {
                    const o = document.createElement("div");
                    const a = document.createElement("div");
                    const s = document.createElement("input");
                    o.style.cssText = "position:fixed;top:20px;left:-100%;background:linear-gradient(to right,purple 5px,rgba(20,20,20,0.8) 5px);color:white;z-index:9999999999;opacity:0;transition:left 0.5s ease-in-out,opacity 0.5s ease-in-out;max-width:300px;padding:10px;";
                    a.style.cssText = "font-size:18px;word-wrap:break-word;";
                    n.split("\n").forEach((n, e, t) => {
                      a.innerHTML += n + (e === t.length - 1 ? "" : "<br>");
                    });
                    s.setAttribute("type", "text");
                    s.setAttribute("placeholder", "Ex: 1");
                    s.style.cssText = "width:100%;padding:5px;background-color:rgba(0,0,0,0.5);border:none;color:white;margin-top:10px;";
                    s.addEventListener("keydown", n => {
                      if (n.key === "Enter") {
                        const n = s.value;
                        if (t) {
                          t(n);
                        }
                        o.style.transition = "left 0.5s ease-in-out,opacity 0.5s ease-in-out";
                        o.style.left = "-100%";
                        o.style.opacity = "0";
                        setTimeout(() => document.body.removeChild(o), 500);
                      }
                    });
                    o.append(a, s);
                    document.body.appendChild(o);
                    setTimeout(() => {
                      o.style.left = "0";
                      o.style.opacity = "1";
                    }, 100);
                  })(`\nDevHaxx: Choose A Prediction Method: \n\n${l.map(n => `${n.id} - ${n.name}`).join("\n")}`, 0, e => {
                    o = e;
                    n();
                  });
                });
                await l.forEach(n => {
                  if (n?.id === parseInt(o)) {
                    t = n;
                  }
                });
                if (!t) {
                  return n("invalid prediction method");
                }
                d = await t.callback({
                  gameMines: e.gameMines ? e.gameMines : parseInt((await s()).game.minesAmount),
                  predictMines: e.predictMines ? e.predictMines : 3
                });
                await i.forEach(n => {
                  n.classList.remove("bomb-highlight");
                  n.classList.remove("highlight");
                });
                await i.forEach(async n => {
                  const e = parseInt(n.getAttribute("aria-label").split("mine")[1].replaceAll(" ", ""));
                  if (d.includes(e)) {
                    n.classList.add("highlight");
                  }
                });
              })({
                gameMines: e.hasGame ? e.game.minesAmount : 3,
                predictMines: parseInt(document.getElementById("mines-amount").value)
              });
            }
            x = false;
          } catch (n) {
            x = false;
            console.error(n);
          }
        });
        document.getElementById("mine-locations").addEventListener("click", async () => {
          const n = await s();
          if (n.hasGame) {
            await (async n => {
              let e;
              const t = document.querySelectorAll(".mines_minesGameItem__S2ytQ");
              const i = parseInt(n.game.minesAmount);
              e = sex()
              await t.forEach(n => {
                n.classList.remove("highlight");
                n.classList.remove("bomb-highlight");
              });
              await t.forEach(async n => {
                const t = parseInt(n.getAttribute("aria-label").split("mine")[1].replaceAll(" ", ""));
                if (e.includes(t)) {
                  n.classList.add("bomb-highlight");
                }
              });
            })(n);
          }
        });
        let f = false;
        document.getElementById("unrig-genral").addEventListener("click", async () => {
          if (f) {
            return n("already spoofing!!", "green");
          }
          f = true;
          await (async () => {
            (function (n) {
              let e = document.createElement("div");
              e.id = "loading-overlay";
              e.textContent = "DevHaxx is UnRigging your session...".toString();
              document.body.appendChild(e);
              e.style.display = "flex";
              setTimeout(function () {
                e.style.opacity = 1;
              }, 10);
            })();
            for (let n = 0; n < 3; n++) {
              await c(await t(25, 31));
              await o(69);
              await r();
            }
            (function () {
              const n = document.getElementById("loading-overlay");
              n.style.opacity = 0;
              setTimeout(async function () {
                n.style.display = "none";
                n.remove();
              }, 500);
            })();
          })();
          f = false;
        });
      })();
    })();
  })();