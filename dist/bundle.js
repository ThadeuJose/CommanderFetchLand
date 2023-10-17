(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Category {
    constructor(title) {
        this._title = title;
        this._lines = new Map();
    }
    get title() {
        return this._title;
    }
    add(amount, name) {
        this._lines.set(name, amount);
    }
    has(key) {
        return this._lines.has(key);
    }
    size() {
        if (this.isEmpty()) {
            return 0;
        }
        let sum = 0;
        this._lines.forEach((value) => {
            sum += value;
        });
        return sum;
    }
    isEmpty() {
        return this._lines.size === 0;
    }
    get lines() {
        let resp = "";
        if (!this.isEmpty()) {
            for (const [key, value] of this._lines) {
                resp += `${value} ${key}\n`;
            }
        }
        return resp;
    }
    getLines() {
        let resp = "";
        if (!this.isEmpty()) {
            resp = `${this.title}: ${this.size()}\n`;
            for (const [key, value] of this._lines) {
                resp += `${value} ${key}\n`;
            }
        }
        return resp;
    }
}
exports.default = Category;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToColor = exports.Color = void 0;
var Color;
(function (Color) {
    Color["White"] = "white";
    Color["Blue"] = "blue";
    Color["Black"] = "black";
    Color["Red"] = "red";
    Color["Green"] = "green";
})(Color || (exports.Color = Color = {}));
function stringToColor(str) {
    switch (str.toLowerCase()) {
        case "white":
            return Color.White;
        case "blue":
            return Color.Blue;
        case "black":
            return Color.Black;
        case "red":
            return Color.Red;
        case "green":
            return Color.Green;
        default:
            return undefined; // Return undefined for unknown colors
    }
}
exports.stringToColor = stringToColor;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DualLand {
    constructor(color1, color2, landname) {
        this.color1 = color1;
        this.color2 = color2;
        this.landname = landname;
    }
    isValid(userColorSelection) {
        return (userColorSelection.has(this.color1) && userColorSelection.has(this.color2));
    }
    getName() {
        return this.landname;
    }
}
exports.default = DualLand;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("./Color");
class UserColorSelection {
    constructor() {
        this.colors = new Map();
        this.colors.set(Color_1.Color.Black, false);
        this.colors.set(Color_1.Color.White, false);
        this.colors.set(Color_1.Color.Red, false);
        this.colors.set(Color_1.Color.Green, false);
        this.colors.set(Color_1.Color.Blue, false);
    }
    add(color) {
        this.colors.set(color, true);
    }
    remove(color) {
        this.colors.set(color, false);
    }
    size() {
        let count = 0;
        this.colors.forEach((value) => {
            if (value) {
                count++;
            }
        });
        return count;
    }
    has(color) {
        return this.colors.get(color) === true;
    }
}
exports.default = UserColorSelection;

},{"./Color":2}],5:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const DualLand_1 = __importDefault(require("../DualLand"));
class CheckLandProcessor {
    constructor() {
        this.lands = [
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Glacial Fortress"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Sulfur Falls"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Drowned Catacomb"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Dragonskull Summit"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Rootbound Crag"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Sunpetal Grove"),
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Isolated Chapel"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Woodland Cemetery"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Clifftop Retreat"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Hinterland Harbor"),
        ];
    }
    process(userColorSelection) {
        if (userColorSelection.size() === 2) {
            const category = new Category_1.default("Check Lands");
            this.lands.forEach((element) => {
                if (element.isValid(userColorSelection)) {
                    category.add(1, element.getName());
                }
            });
            return category;
        }
        return new Category_1.default("Check Lands");
    }
}
exports.default = CheckLandProcessor;

},{"../Category":1,"../Color":2,"../DualLand":3}],6:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const DualLand_1 = __importDefault(require("../DualLand"));
class CrowdLandProcessor {
    constructor() {
        this.lands = [
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Sea of Clouds"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Training Center"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Morphic Pool"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Luxury Suite"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Spire Garden"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Bountiful Promenade"),
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Vault of Champions"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Undergrowth Stadium"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Spectator Seating"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Rejuvenating Springs"),
        ];
    }
    process(userColorSelection) {
        if (userColorSelection.size() === 2) {
            const category = new Category_1.default("Crowd Lands");
            this.lands.forEach((element) => {
                if (element.isValid(userColorSelection)) {
                    category.add(1, element.getName());
                }
            });
            return category;
        }
        return new Category_1.default("Crowd Lands");
    }
}
exports.default = CrowdLandProcessor;

},{"../Category":1,"../Color":2,"../DualLand":3}],7:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("./Color");
const UserColorSelection_1 = __importDefault(require("./UserColorSelection"));
const CheckLandProcessor_1 = __importDefault(require("./lands-code/CheckLandProcessor"));
const CrowdLandProcessor_1 = __importDefault(require("./lands-code/CrowdLandProcessor"));
const userColorSelection = new UserColorSelection_1.default();
let detail_checked = false;
document.addEventListener("DOMContentLoaded", () => {
    const inputList = document.getElementsByTagName("input");
    for (let i = 0; i < inputList.length; i += 1) {
        inputList[i].checked = false;
    }
    const outputElement = document.getElementById("output");
    if (outputElement) {
        outputElement.value = "Click to copy the lands";
    }
    outputElement.addEventListener("click", (event) => {
        const array = [
            new CrowdLandProcessor_1.default(),
            new CheckLandProcessor_1.default(),
        ];
        const categories = array.map((elem) => {
            return elem.process(userColorSelection);
        });
        event.preventDefault();
        if (outputElement.value !== "Click to copy the lands") {
            const value = printLandsMoxfield(categories);
            console.log(value);
            navigator.clipboard
                .writeText(value)
                .then(() => {
                showSnackbar();
            })
                .catch((error) => {
                console.error("Clipboard writeText error:", error);
            });
        }
    });
    // Add event listeners for the checkboxes
    const checkboxes = document.querySelectorAll(".checkbox_box input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
            const target = event.target;
            const checkboxName = target.getAttribute("data-name");
            if (checkboxName === "details") {
                detail_checked = target.checked;
            }
            else {
                if (target.checked) {
                    console.log(`Checked ${checkboxName}`);
                    if (checkboxName) {
                        const color = (0, Color_1.stringToColor)(checkboxName);
                        if (color) {
                            userColorSelection.add(color);
                        }
                    }
                }
                else {
                    console.log(`Unchecked ${checkboxName}`);
                    if (checkboxName) {
                        const color = (0, Color_1.stringToColor)(checkboxName);
                        if (color) {
                            userColorSelection.remove(color);
                        }
                    }
                }
            }
            const array = [
                new CrowdLandProcessor_1.default(),
                new CheckLandProcessor_1.default(),
            ];
            const categories = array.map((elem) => {
                return elem.process(userColorSelection);
            });
            const outputElement = document.getElementById("output");
            let resp;
            if (userColorSelection.size() >= 1) {
                if (detail_checked) {
                    resp = printLandsWithTitle(categories);
                }
                else {
                    resp = printLandsNoTitle(categories);
                }
            }
            else {
                resp = "Click to copy the lands";
            }
            outputElement.value = resp;
        });
    });
});
function printLandsMoxfield(categories) {
    return categories
        .map((elem) => {
        let resp = "";
        if (!elem.isEmpty()) {
            resp = `${elem.lines}`;
        }
        return resp;
    })
        .join("");
}
function printLandsNoTitle(categories) {
    let resp = "";
    // const landsRepository = new LandsRepository("Lands");
    // if (colorManager.qtdColor() > 0) {
    //   if (colorManager.qtdColor() > 1) {
    //     landsRepository.addDictLands(getDualLands(colorManager).getDictLands());
    //     landsRepository.addDictLands(getFetchLands(colorManager).getDictLands());
    //     landsRepository.addDictLands(getShockLands(colorManager).getDictLands());
    //     landsRepository.addDictLands(getPainLands(colorManager).getDictLands());
    //     landsRepository.addDictLands(getManLands(colorManager).getDictLands());
    //     landsRepository.addDictLands(getFilterLands(colorManager).getDictLands());
    //     landsRepository.addDictLands(getOtherLands(colorManager).getDictLands());
    //     landsRepository.addDictLands(getTriLands(colorManager).getDictLands());
    //     landsRepository.addDictLands(getBattleLands(colorManager).getDictLands());
    //     landsRepository.addDictLands(getCheckLands(colorManager).getDictLands());
    //     landsRepository.addDictLands(getCrowdLands(colorManager).getDictLands());
    //     landsRepository.addDictLands(
    //       getAnyColorLand(colorManager).getDictLands()
    //     );
    //   }
    //   resp += landsRepositoryToString(landsRepository);
    //   resp += landsRepositoryToString(getBasicLands(colorManager));
    //   resp += landsRepositoryToString(getUtilityLand(colorManager));
    //   resp += landsRepositoryToString(getManaRamp(colorManager));
    // }
    return resp;
}
function printLandsWithTitle(categories) {
    //Print
    // Category Title: 1
    // 1 Element
    return categories
        .map((elem) => {
        let resp = "";
        if (!elem.isEmpty()) {
            resp = `${elem.title}: ${elem.size()}\n${elem.lines}\n`;
        }
        return resp;
    })
        .join("");
}
function showSnackbar() {
    // Get the snackbar DIV
    const snackbar = document.getElementById("snackbar");
    if (snackbar) {
        // Add the "show" class to DIV
        snackbar.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(() => {
            snackbar.className = snackbar.className.replace("show", "");
        }, 3000);
    }
}

},{"./Color":2,"./UserColorSelection":4,"./lands-code/CheckLandProcessor":5,"./lands-code/CrowdLandProcessor":6}]},{},[7]);
