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
    getAmount(key) {
        return this._lines.get(key);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("./Category"));
class EmptyCategory extends Category_1.default {
    constructor(title, size) {
        super(title);
        this._size = size;
    }
    isEmpty() {
        return this._size === 0;
    }
    size() {
        return this._size;
    }
    get lines() {
        return "\n";
    }
}
exports.default = EmptyCategory;

},{"./Category":1}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SingleLand {
    constructor(color1, landname) {
        this.color1 = color1;
        this.landname = landname;
    }
    hasSomeColor(userColorSelection) {
        return userColorSelection.has(this.color1);
    }
    getName() {
        return this.landname;
    }
}
exports.default = SingleLand;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ThreeColorLand {
    constructor(color1, color2, color3, landname) {
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.landname = landname;
    }
    isSameColor(userColorSelection) {
        return (userColorSelection.has(this.color1) &&
            userColorSelection.has(this.color2) &&
            userColorSelection.has(this.color3));
    }
    getName() {
        return this.landname;
    }
}
exports.default = ThreeColorLand;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TwoColorLand {
    constructor(color1, color2, landname) {
        this.color1 = color1;
        this.color2 = color2;
        this.landname = landname;
    }
    isSameColor(userColorSelection) {
        return (userColorSelection.has(this.color1) && userColorSelection.has(this.color2));
    }
    hasSomeColor(userColorSelection) {
        return (userColorSelection.has(this.color1) || userColorSelection.has(this.color2));
    }
    getName() {
        return this.landname;
    }
}
exports.default = TwoColorLand;

},{}],7:[function(require,module,exports){
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
        return this.colors.get(color) || false;
    }
    getAllColor() {
        let resp = [];
        if (this.has(Color_1.Color.Green)) {
            resp.push(Color_1.Color.Green);
        }
        if (this.has(Color_1.Color.White)) {
            resp.push(Color_1.Color.White);
        }
        if (this.has(Color_1.Color.Black)) {
            resp.push(Color_1.Color.Black);
        }
        if (this.has(Color_1.Color.Red)) {
            resp.push(Color_1.Color.Red);
        }
        if (this.has(Color_1.Color.Blue)) {
            resp.push(Color_1.Color.Blue);
        }
        return resp;
    }
    isEmpty() {
        return this.size() === 0;
    }
    isSingleColor() {
        return this.size() === 1;
    }
    isDualColor() {
        return this.size() === 2;
    }
    isTriColor() {
        return this.size() === 3;
    }
    isFourColor() {
        return this.size() === 4;
    }
    isFiveColor() {
        return this.size() === 5;
    }
}
exports.default = UserColorSelection;

},{"./Color":2}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyToClipboard = void 0;
const showSnackbar_1 = require("./showSnackbar");
function copyToClipboard(value) {
    navigator.clipboard
        .writeText(value)
        .then(() => {
        (0, showSnackbar_1.showSnackbar)();
    })
        .catch((error) => {
        console.error("Clipboard writeText error:", error);
    });
}
exports.copyToClipboard = copyToClipboard;

},{"./showSnackbar":28}],9:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const SingleLand_1 = __importDefault(require("../SingleLand"));
class BasicLandProcessor {
    constructor() {
        this.lands = [
            new SingleLand_1.default(Color_1.Color.White, "Plains"),
            new SingleLand_1.default(Color_1.Color.Blue, "Island"),
            new SingleLand_1.default(Color_1.Color.Black, "Swamp"),
            new SingleLand_1.default(Color_1.Color.Red, "Mountain"),
            new SingleLand_1.default(Color_1.Color.Green, "Forest"),
        ];
    }
    process(userColorSelection) {
        const category = new Category_1.default("Basic Lands");
        this.lands
            .filter((element) => element.hasSomeColor(userColorSelection))
            .forEach((element) => category.add(this.getAmountOfLand(userColorSelection), element.getName()));
        return category;
    }
    getAmountOfLand(userColorSelection) {
        let amountOfLand = 0;
        if (userColorSelection.isSingleColor()) {
            amountOfLand = 30;
        }
        if (userColorSelection.isDualColor()) {
            amountOfLand = 5;
        }
        if (userColorSelection.isTriColor()) {
            amountOfLand = 4;
        }
        if (userColorSelection.isFourColor() || userColorSelection.isFiveColor()) {
            amountOfLand = 2;
        }
        return amountOfLand;
    }
}
exports.default = BasicLandProcessor;

},{"../Category":1,"../Color":2,"../SingleLand":4}],10:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("../Color");
const TwoColorLand_1 = __importDefault(require("../TwoColorLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class BounceLandProcessor {
    constructor() {
        this.categoryName = "Bounce Lands";
        this.lands = [
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Azorius Chancery"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Izzet Boilerworks"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Dimir Aqueduct"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Rakdos Carnarium"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Gruul Turf"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Selesnya Sanctuary"),
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Orzhov Basilica"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Golgari Rot Farm"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Boros Garrison"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Simic Growth Chamber"),
        ];
    }
    process(userColorSelection) {
        return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
    }
}
exports.default = BounceLandProcessor;

},{"../Color":2,"../TwoColorLand":6,"./DualColorSpecialCase":13}],11:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const TwoColorLand_1 = __importDefault(require("../TwoColorLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class CheckLandProcessor {
    constructor() {
        this.categoryName = "Check Lands";
        this.lands = [
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Glacial Fortress"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Sulfur Falls"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Drowned Catacomb"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Dragonskull Summit"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Rootbound Crag"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Sunpetal Grove"),
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Isolated Chapel"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Woodland Cemetery"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Clifftop Retreat"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Hinterland Harbor"),
        ];
    }
    process(userColorSelection) {
        if (userColorSelection.isDualColor()) {
            return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
        }
        return new Category_1.default(this.categoryName);
    }
}
exports.default = CheckLandProcessor;

},{"../Category":1,"../Color":2,"../TwoColorLand":6,"./DualColorSpecialCase":13}],12:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const TwoColorLand_1 = __importDefault(require("../TwoColorLand"));
class CrowdLandProcessor {
    constructor() {
        this.categoryName = "Crowd Lands";
        this.lands = [
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Sea of Clouds"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Training Center"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Morphic Pool"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Luxury Suite"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Spire Garden"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Bountiful Promenade"),
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Vault of Champions"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Undergrowth Stadium"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Spectator Seating"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Rejuvenating Springs"),
        ];
    }
    process(userColorSelection) {
        const category = new Category_1.default(this.categoryName);
        if (userColorSelection.isDualColor() || userColorSelection.isTriColor()) {
            this.lands
                .filter((element) => element.isSameColor(userColorSelection))
                .forEach((element) => category.add(1, element.getName()));
        }
        return category;
    }
}
exports.default = CrowdLandProcessor;

},{"../Category":1,"../Color":2,"../TwoColorLand":6}],13:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DualColorSpecialCase = void 0;
const Category_1 = __importDefault(require("../Category"));
function DualColorSpecialCase(categoryName, userColorSelection, lands) {
    const category = new Category_1.default(categoryName);
    if (userColorSelection.isDualColor()) {
        lands
            .filter((element) => element.isSameColor(userColorSelection))
            .forEach((element) => category.add(1, element.getName()));
    }
    return category;
}
exports.DualColorSpecialCase = DualColorSpecialCase;

},{"../Category":1}],14:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const TwoColorLand_1 = __importDefault(require("../TwoColorLand"));
class DualLandProcessor {
    constructor() {
        this.categoryName = "Dual Lands";
        this.lands = [
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Tundra"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Volcanic Island"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Underground Sea"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Badlands"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Taiga"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Savannah"),
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Scrubland"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Bayou"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Plateau"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Tropical Island"),
        ];
    }
    process(userColorSelection) {
        const category = new Category_1.default(this.categoryName);
        if (userColorSelection.isDualColor() ||
            userColorSelection.isTriColor() ||
            userColorSelection.isFourColor() ||
            userColorSelection.isFiveColor()) {
            this.lands
                .filter((element) => element.isSameColor(userColorSelection))
                .forEach((element) => category.add(1, element.getName()));
        }
        return category;
    }
}
exports.default = DualLandProcessor;

},{"../Category":1,"../Color":2,"../TwoColorLand":6}],15:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const TwoColorLand_1 = __importDefault(require("../TwoColorLand"));
class FetchLandProcessor {
    constructor() {
        this.lands = [
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Flooded Strand"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Scalding Tarn"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Polluted Delta"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Bloodstained Mire"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Wooded Foothills"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Windswept Heath"),
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Marsh Flats"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Verdant Catacombs"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Arid Mesa"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Misty Rainforest"),
        ];
    }
    process(userColorSelection) {
        const category = new Category_1.default("Fetch Lands");
        if (userColorSelection.isDualColor() ||
            userColorSelection.isTriColor() ||
            userColorSelection.isFourColor() ||
            userColorSelection.isFiveColor()) {
            category.add(1, "Prismatic Vista");
            this.lands.forEach((element) => {
                if (element.hasSomeColor(userColorSelection)) {
                    category.add(1, element.getName());
                }
            });
        }
        return category;
    }
}
exports.default = FetchLandProcessor;

},{"../Category":1,"../Color":2,"../TwoColorLand":6}],16:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("../Color");
const TwoColorLand_1 = __importDefault(require("../TwoColorLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class FilterLandProcessor {
    constructor() {
        this.categoryName = "Filter Lands";
        this.lands = [
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Mystic Gate"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Cascade Bluffs"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Sunken Ruins"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Graven Cairns"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Fire-lit Thicket"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Wooded Bastion"),
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Fetid Heath"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Twilight Mire"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Rugged Prairie"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Flooded Grove"),
        ];
    }
    process(userColorSelection) {
        return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
    }
}
exports.default = FilterLandProcessor;

},{"../Color":2,"../TwoColorLand":6,"./DualColorSpecialCase":13}],17:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const TwoColorLand_1 = __importDefault(require("../TwoColorLand"));
class HorizonLandProcessor {
    constructor() {
        this.categoryName = "Horizon Lands";
        this.defaultForMissingLand = "City of Brass";
        this.strictlyBetterRedBlack = "Mount Doom";
        this.lands = [
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, this.defaultForMissingLand),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Fiery Islet"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, this.defaultForMissingLand),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Red, this.strictlyBetterRedBlack),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Green, this.defaultForMissingLand),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Horizon Canopy"),
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Silent Clearing"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Nurturing Peatland"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Sunbaked Canyon"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Waterlogged Grove"),
        ];
    }
    process(userColorSelection) {
        const category = new Category_1.default(this.categoryName);
        if (userColorSelection.isDualColor()) {
            this.lands
                .filter((element) => element.isSameColor(userColorSelection))
                .forEach((element) => category.add(1, element.getName()));
        }
        if (userColorSelection.isTriColor()) {
            category.add(1, this.defaultForMissingLand);
        }
        return category;
    }
}
exports.default = HorizonLandProcessor;

},{"../Category":1,"../Color":2,"../TwoColorLand":6}],18:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("../Color");
const TwoColorLand_1 = __importDefault(require("../TwoColorLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class PainLandProcessor {
    constructor() {
        this.categoryName = "Pain Lands";
        this.lands = [
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Adarkar Wastes"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Shivan Reef"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Underground River"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Sulfurous Springs"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Karplusan Forest"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Brushland"),
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Caves of Koilos"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Llanowar Wastes"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Battlefield Forge"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Yavimaya Coast"),
        ];
    }
    process(userColorSelection) {
        return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
    }
}
exports.default = PainLandProcessor;

},{"../Color":2,"../TwoColorLand":6,"./DualColorSpecialCase":13}],19:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("../Color");
const TwoColorLand_1 = __importDefault(require("../TwoColorLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class PathwayLandProcessor {
    constructor() {
        this.categoryName = "Pathway Lands";
        this.lands = [
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Hengegate Pathway / Mistgate Pathway"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Riverglide Pathway / Lavaglide Pathway"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Clearwater Pathway / Murkwater Pathway"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Blightstep Pathway / Searstep Pathway"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Cragcrown Pathway / Timbercrown Pathway"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Branchloft Pathway / Boulderloft Pathway"),
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Brightclimb Pathway / Grimclimb Pathway"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Darkbore Pathway / Slitherbore Pathway"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Needleverge Pathway / Pillarverge Pathway"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Barkchannel Pathway / Tidechannel Pathway"),
        ];
    }
    process(userColorSelection) {
        return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
    }
}
exports.default = PathwayLandProcessor;

},{"../Color":2,"../TwoColorLand":6,"./DualColorSpecialCase":13}],20:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
class RainbowLandProcessor {
    constructor() {
        this.categoryName = "Rainbow Lands";
    }
    process(userColorSelection) {
        const category = new Category_1.default(this.categoryName);
        if (userColorSelection.isDualColor()) {
            category.add(1, "Command Tower");
            category.add(1, "Mana Confluence");
        }
        if (userColorSelection.isTriColor() || userColorSelection.isFourColor()) {
            category.add(1, "Command Tower");
            category.add(1, "Mana Confluence");
            category.add(1, "Exotic Orchard");
            category.add(1, "Reflecting Pool");
            category.add(1, "Plaza of Heroes");
        }
        if (userColorSelection.isFiveColor()) {
            category.add(1, "Command Tower");
            category.add(1, "Mana Confluence");
            category.add(1, "Exotic Orchard");
            category.add(1, "Reflecting Pool");
            category.add(1, "Plaza of Heroes");
            category.add(1, "City of Brass");
            category.add(1, "The World Tree");
        }
        return category;
    }
}
exports.default = RainbowLandProcessor;

},{"../Category":1}],21:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const TwoColorLand_1 = __importDefault(require("../TwoColorLand"));
const UserColorSelection_1 = __importDefault(require("../UserColorSelection"));
class ShockLandProcessor {
    constructor() {
        this.categoryName = "Shock Lands";
        this.lands = [
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Hallowed Fountain"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Steam Vents"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Watery Grave"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Blood Crypt"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Stomping Ground"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Temple Garden"),
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Godless Shrine"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Overgrown Tomb"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Sacred Foundry"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Breeding Pool"),
        ];
    }
    process(userColorSelection) {
        const category = new Category_1.default(this.categoryName);
        if (userColorSelection.isDualColor() || userColorSelection.isTriColor()) {
            this.lands
                .filter((element) => element.isSameColor(userColorSelection))
                .forEach((element) => category.add(1, element.getName()));
        }
        if (userColorSelection.isFourColor()) {
            const colors = this.combinate(userColorSelection);
            this.lands.forEach((element) => {
                if (element.isSameColor(colors[0]) ||
                    element.isSameColor(colors[1]) ||
                    element.isSameColor(colors[2])) {
                    category.add(1, element.getName());
                }
            });
        }
        return category;
    }
    combinate(colors) {
        const arr = colors.getAllColor();
        const color1 = new UserColorSelection_1.default();
        color1.add(arr[0]);
        color1.add(arr[1]);
        const color2 = new UserColorSelection_1.default();
        color2.add(arr[0]);
        color2.add(arr[2]);
        const color3 = new UserColorSelection_1.default();
        color3.add(arr[0]);
        color3.add(arr[3]);
        return [color1, color2, color3];
    }
}
exports.default = ShockLandProcessor;

},{"../Category":1,"../Color":2,"../TwoColorLand":6,"../UserColorSelection":7}],22:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("../Color");
const TwoColorLand_1 = __importDefault(require("../TwoColorLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class SlowLandProcessor {
    constructor() {
        this.categoryName = "Slow Lands";
        this.lands = [
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Deserted Beach"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Stormcarved Coast"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Shipwreck Marsh"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Haunted Ridge"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Rockfall Vale"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Overgrown Farmland "),
            new TwoColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Shattered Sanctum"),
            new TwoColorLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Deathcap Glade"),
            new TwoColorLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Sundown Pass"),
            new TwoColorLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Dreamroot Cascade"),
        ];
    }
    process(userColorSelection) {
        return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
    }
}
exports.default = SlowLandProcessor;

},{"../Color":2,"../TwoColorLand":6,"./DualColorSpecialCase":13}],23:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmptyCategory_1 = __importDefault(require("../EmptyCategory"));
class TemplateProcessor {
    constructor(categoryName, amount) {
        this.categoryName = categoryName;
        this.amount = amount;
    }
    process(userColorSelection) {
        return new EmptyCategory_1.default(this.categoryName, this.amount);
    }
}
exports.default = TemplateProcessor;

},{"../EmptyCategory":3}],24:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const ThreeColorLand_1 = __importDefault(require("../ThreeColorLand"));
const UserColorSelection_1 = __importDefault(require("../UserColorSelection"));
class TriomeProcessor {
    constructor() {
        this.categoryName = "Triome Lands";
        this.lands = [
            new ThreeColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, Color_1.Color.Green, "Spara's Headquarters"),
            new ThreeColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, Color_1.Color.Black, "Raffine's Tower"),
            new ThreeColorLand_1.default(Color_1.Color.Blue, Color_1.Color.Black, Color_1.Color.Red, "Xander's Lounge "),
            new ThreeColorLand_1.default(Color_1.Color.Black, Color_1.Color.Red, Color_1.Color.Green, "Ziatora's Proving Ground"),
            new ThreeColorLand_1.default(Color_1.Color.White, Color_1.Color.Red, Color_1.Color.Green, "Jetmir's Garden"),
            new ThreeColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, Color_1.Color.Green, "Indatha Triome"),
            new ThreeColorLand_1.default(Color_1.Color.White, Color_1.Color.Blue, Color_1.Color.Red, "Raugrin Triome"),
            new ThreeColorLand_1.default(Color_1.Color.Blue, Color_1.Color.Black, Color_1.Color.Green, "Zagoth Triome"),
            new ThreeColorLand_1.default(Color_1.Color.White, Color_1.Color.Black, Color_1.Color.Red, "Savai Triome"),
            new ThreeColorLand_1.default(Color_1.Color.Blue, Color_1.Color.Red, Color_1.Color.Green, "Ketria Triome"),
        ];
    }
    process(userColorSelection) {
        const category = new Category_1.default(this.categoryName);
        if (userColorSelection.isTriColor()) {
            this.lands.forEach((element) => {
                if (element.isSameColor(userColorSelection)) {
                    category.add(1, element.getName());
                }
            });
        }
        if (userColorSelection.isFourColor()) {
            const colors = this.combinate(userColorSelection);
            this.lands.forEach((element) => {
                if (element.isSameColor(colors[0]) || element.isSameColor(colors[1])) {
                    category.add(1, element.getName());
                }
            });
        }
        return category;
    }
    combinate(colors) {
        const arr = colors.getAllColor();
        const color1 = new UserColorSelection_1.default();
        color1.add(arr[0]);
        color1.add(arr[1]);
        color1.add(arr[2]);
        const color2 = new UserColorSelection_1.default();
        color2.add(arr[0]);
        color2.add(arr[2]);
        color2.add(arr[3]);
        return [color1, color2];
    }
}
exports.default = TriomeProcessor;

},{"../Category":1,"../Color":2,"../ThreeColorLand":5,"../UserColorSelection":7}],25:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmptyCategory_1 = __importDefault(require("../EmptyCategory"));
class UtilityLandProcessor {
    constructor() {
        this.categoryName = "Utility Lands";
    }
    process(userColorSelection) {
        if (userColorSelection.isTriColor() || userColorSelection.isFiveColor()) {
            return new EmptyCategory_1.default(this.categoryName, 0);
        }
        if (userColorSelection.isFourColor()) {
            return new EmptyCategory_1.default(this.categoryName, 3);
        }
        return new EmptyCategory_1.default(this.categoryName, 8);
    }
}
exports.default = UtilityLandProcessor;

},{"../EmptyCategory":3}],26:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("./Color");
const UserColorSelection_1 = __importDefault(require("./UserColorSelection"));
const BasicLandProcessor_1 = __importDefault(require("./lands-code/BasicLandProcessor"));
const BounceLandProcessor_1 = __importDefault(require("./lands-code/BounceLandProcessor"));
const CheckLandProcessor_1 = __importDefault(require("./lands-code/CheckLandProcessor"));
const CrowdLandProcessor_1 = __importDefault(require("./lands-code/CrowdLandProcessor"));
const DualLandProcessor_1 = __importDefault(require("./lands-code/DualLandProcessor"));
const FetchLandProcessor_1 = __importDefault(require("./lands-code/FetchLandProcessor"));
const FilterLandProcessor_1 = __importDefault(require("./lands-code/FilterLandProcessor"));
const HorizonLandProcessor_1 = __importDefault(require("./lands-code/HorizonLandProcessor"));
const PainLandProcessor_1 = __importDefault(require("./lands-code/PainLandProcessor"));
const RainbowLandProcessor_1 = __importDefault(require("./lands-code/RainbowLandProcessor"));
const ShockLandProcessor_1 = __importDefault(require("./lands-code/ShockLandProcessor"));
const SlowLandProcessor_1 = __importDefault(require("./lands-code/SlowLandProcessor"));
const UtilityLandProcessor_1 = __importDefault(require("./lands-code/UtilityLandProcessor"));
const TemplateProcessor_1 = __importDefault(require("./lands-code/TemplateProcessor"));
const TriomeProcessor_1 = __importDefault(require("./lands-code/TriomeProcessor"));
const PathwayLandProcessor_1 = __importDefault(require("./lands-code/PathwayLandProcessor"));
const print_1 = require("./print");
const copyToClipboard_1 = require("./copyToClipboard");
const userColorSelection = new UserColorSelection_1.default();
let detail_checked = false;
const LandsProcessors = [
    new BasicLandProcessor_1.default(),
    new DualLandProcessor_1.default(),
    new CrowdLandProcessor_1.default(),
    new CheckLandProcessor_1.default(),
    new FetchLandProcessor_1.default(),
    new FilterLandProcessor_1.default(),
    new ShockLandProcessor_1.default(),
    new PainLandProcessor_1.default(),
    new SlowLandProcessor_1.default(),
    new RainbowLandProcessor_1.default(),
    new HorizonLandProcessor_1.default(),
    new BounceLandProcessor_1.default(),
    new PathwayLandProcessor_1.default(),
    new TriomeProcessor_1.default(),
];
const TemplateProcessors = [
    new UtilityLandProcessor_1.default(),
    new TemplateProcessor_1.default("Mana Ramp", 10),
    new TemplateProcessor_1.default("Commander", 1),
    new TemplateProcessor_1.default("Burst Card Draw", 5),
    new TemplateProcessor_1.default("Repeatable Card Draw", 5),
    new TemplateProcessor_1.default("Board Wipe", 4),
    new TemplateProcessor_1.default("Target Removal", 6),
    new TemplateProcessor_1.default("Theme 1", 10),
    new TemplateProcessor_1.default("Theme 2", 10),
    new TemplateProcessor_1.default("Theme 3", 10),
];
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    const inputList = document.getElementsByTagName("input");
    const outputElement = document.getElementById("output");
    for (let i = 0; i < inputList.length; i += 1) {
        inputList[i].checked = false;
    }
    if (outputElement) {
        outputElement.value = "Click to copy the lands";
    }
    outputElement.addEventListener("click", (event) => {
        event.preventDefault();
        if (!userColorSelection.isEmpty()) {
            const value = (0, print_1.printLandsMoxfield)(processorToCategory(LandsProcessors, userColorSelection));
            console.log(value);
            (0, copyToClipboard_1.copyToClipboard)(value);
        }
    });
    (_a = document
        .getElementById("details")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", (event) => {
        const target = event.target;
        detail_checked = target.checked;
        const landsCategories = processorToCategory(LandsProcessors, userColorSelection);
        const templateCategories = processorToCategory(TemplateProcessors, userColorSelection);
        outputElement.value = print(landsCategories, templateCategories);
    });
    // Add event listeners for the checkboxes
    const checkboxes = document.querySelectorAll(".color");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
            const target = event.target;
            const checkboxName = target.getAttribute("data-name");
            if (checkboxName) {
                const color = (0, Color_1.stringToColor)(checkboxName);
                if (!color) {
                    return;
                }
                toggle(color, target.checked);
            }
            const landsCategories = processorToCategory(LandsProcessors, userColorSelection);
            const templateCategories = processorToCategory(TemplateProcessors, userColorSelection);
            outputElement.value = print(landsCategories, templateCategories);
        });
    });
});
function toggle(color, checked) {
    if (checked) {
        userColorSelection.add(color);
    }
    else {
        userColorSelection.remove(color);
    }
}
function print(landsCategories, templateCategories) {
    if (userColorSelection.isEmpty()) {
        return "Click to copy the lands";
    }
    if (detail_checked) {
        return (0, print_1.printWithDetails)([...landsCategories, ...templateCategories]);
    }
    return (0, print_1.printWithoutDetails)(landsCategories, templateCategories);
}
function processorToCategory(processors, color) {
    return processors.map((elem) => elem.process(color));
}

},{"./Color":2,"./UserColorSelection":7,"./copyToClipboard":8,"./lands-code/BasicLandProcessor":9,"./lands-code/BounceLandProcessor":10,"./lands-code/CheckLandProcessor":11,"./lands-code/CrowdLandProcessor":12,"./lands-code/DualLandProcessor":14,"./lands-code/FetchLandProcessor":15,"./lands-code/FilterLandProcessor":16,"./lands-code/HorizonLandProcessor":17,"./lands-code/PainLandProcessor":18,"./lands-code/PathwayLandProcessor":19,"./lands-code/RainbowLandProcessor":20,"./lands-code/ShockLandProcessor":21,"./lands-code/SlowLandProcessor":22,"./lands-code/TemplateProcessor":23,"./lands-code/TriomeProcessor":24,"./lands-code/UtilityLandProcessor":25,"./print":27}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printWithDetails = exports.printWithoutDetails = exports.printLandsMoxfield = void 0;
function printLandsMoxfield(categories) {
    return printWithoutTitle(categories);
}
exports.printLandsMoxfield = printLandsMoxfield;
function printWithoutDetails(landsCategories, templateCategories) {
    return `Lands: ${calculateSize(landsCategories)}\n${printWithoutTitle(landsCategories)}\n${printWithTitle(templateCategories)}`;
}
exports.printWithoutDetails = printWithoutDetails;
function calculateSize(categories) {
    return categories.reduce((sum, current) => {
        return sum + current.size();
    }, 0);
}
function printWithoutTitle(categories) {
    return categories
        .filter((elem) => elem.lines.trim())
        .map((elem) => `${elem.lines}`)
        .join("");
}
function printWithDetails(categories) {
    //Print
    // Category Title: 1
    // 1 Element
    return categories
        .filter((elem) => !elem.isEmpty())
        .map((elem) => `${elem.title}: ${elem.size()}\n${elem.lines}\n`)
        .join("");
}
exports.printWithDetails = printWithDetails;
function printWithTitle(categories) {
    return categories
        .filter((elem) => !elem.isEmpty())
        .map((elem) => `${elem.title}: ${elem.size()}\n${elem.lines}\n`)
        .join("");
}

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showSnackbar = void 0;
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
exports.showSnackbar = showSnackbar;

},{}]},{},[26]);
