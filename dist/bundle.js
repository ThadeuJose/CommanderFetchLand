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
Object.defineProperty(exports, "__esModule", { value: true });
class DualLand {
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
exports.default = DualLand;

},{}],4:[function(require,module,exports){
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

},{"./Category":1}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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
    isDualColor() {
        return this.size() === 2;
    }
}
exports.default = UserColorSelection;

},{"./Color":2}],7:[function(require,module,exports){
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
        if (userColorSelection.isDualColor()) {
            const category = new Category_1.default("Basic Lands");
            this.lands.forEach((element) => {
                if (element.hasSomeColor(userColorSelection)) {
                    category.add(5, element.getName());
                }
            });
            return category;
        }
        return new Category_1.default("Basic Lands");
    }
}
exports.default = BasicLandProcessor;

},{"../Category":1,"../Color":2,"../SingleLand":5}],8:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const DualLand_1 = __importDefault(require("../DualLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class BounceLandProcessor {
    constructor() {
        this.categoryName = "Bounce Lands";
        this.lands = [
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Azorius Chancery"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Izzet Boilerworks"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Dimir Aqueduct"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Rakdos Carnarium"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Gruul Turf"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Selesnya Sanctuary"),
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Orzhov Basilica"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Golgari Rot Farm"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Boros Garrison"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Simic Growth Chamber"),
        ];
    }
    process(userColorSelection) {
        if (userColorSelection.isDualColor()) {
            return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
        }
        return new Category_1.default(this.categoryName);
    }
}
exports.default = BounceLandProcessor;

},{"../Category":1,"../Color":2,"../DualLand":3,"./DualColorSpecialCase":11}],9:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const DualLand_1 = __importDefault(require("../DualLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class CheckLandProcessor {
    constructor() {
        this.categoryName = "Check Lands";
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
        if (userColorSelection.isDualColor()) {
            return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
        }
        return new Category_1.default(this.categoryName);
    }
}
exports.default = CheckLandProcessor;

},{"../Category":1,"../Color":2,"../DualLand":3,"./DualColorSpecialCase":11}],10:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const DualLand_1 = __importDefault(require("../DualLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class CrowdLandProcessor {
    constructor() {
        this.categoryName = "Crowd Lands";
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
        if (userColorSelection.isDualColor()) {
            return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
        }
        return new Category_1.default(this.categoryName);
    }
}
exports.default = CrowdLandProcessor;

},{"../Category":1,"../Color":2,"../DualLand":3,"./DualColorSpecialCase":11}],11:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DualColorSpecialCase = void 0;
const Category_1 = __importDefault(require("../Category"));
function DualColorSpecialCase(categoryName, userColorSelection, lands) {
    const category = new Category_1.default(categoryName);
    lands.forEach((element) => {
        if (element.isSameColor(userColorSelection)) {
            category.add(1, element.getName());
        }
    });
    return category;
}
exports.DualColorSpecialCase = DualColorSpecialCase;

},{"../Category":1}],12:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const DualLand_1 = __importDefault(require("../DualLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class DualLandProcessor {
    constructor() {
        this.categoryName = "Dual Lands";
        this.lands = [
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Tundra"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Volcanic Island"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Underground Sea"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Badlands"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Taiga"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Savannah"),
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Scrubland"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Bayou"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Plateau"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Tropical Island"),
        ];
    }
    process(userColorSelection) {
        if (userColorSelection.isDualColor()) {
            return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
        }
        return new Category_1.default(this.categoryName);
    }
}
exports.default = DualLandProcessor;

},{"../Category":1,"../Color":2,"../DualLand":3,"./DualColorSpecialCase":11}],13:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const DualLand_1 = __importDefault(require("../DualLand"));
class FetchLandProcessor {
    constructor() {
        this.lands = [
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Flooded Strand"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Scalding Tarn"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Polluted Delta"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Bloodstained Mire"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Wooded Foothills"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Windswept Heath"),
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Marsh Flats"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Verdant Catacombs"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Arid Mesa"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Misty Rainforest"),
        ];
    }
    process(userColorSelection) {
        const category = new Category_1.default("Fetch Lands");
        if (userColorSelection.isDualColor()) {
            category.add(1, "Prismatic Vista");
            this.lands.forEach((element) => {
                if (element.hasSomeColor(userColorSelection)) {
                    category.add(1, element.getName());
                }
            });
            return category;
        }
        return category;
    }
}
exports.default = FetchLandProcessor;

},{"../Category":1,"../Color":2,"../DualLand":3}],14:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const DualLand_1 = __importDefault(require("../DualLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class FilterLandProcessor {
    constructor() {
        this.categoryName = "Filter Lands";
        this.lands = [
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Mystic Gate"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Cascade Bluffs"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Sunken Ruins"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Graven Cairns"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Fire-lit Thicket"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Wooded Bastion"),
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Fetid Heath"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Twilight Mire"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Rugged Prairie"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Flooded Grove"),
        ];
    }
    process(userColorSelection) {
        if (userColorSelection.isDualColor()) {
            return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
        }
        return new Category_1.default(this.categoryName);
    }
}
exports.default = FilterLandProcessor;

},{"../Category":1,"../Color":2,"../DualLand":3,"./DualColorSpecialCase":11}],15:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const DualLand_1 = __importDefault(require("../DualLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class HorizonLandProcessor {
    constructor() {
        this.categoryName = "Horizon Lands";
        this.defaultForMissingLand = "City of Brass";
        this.strictlyBetterRedBlack = "Mount Doom";
        this.lands = [
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Blue, this.defaultForMissingLand),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Fiery Islet"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, this.defaultForMissingLand),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Red, this.strictlyBetterRedBlack),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Green, this.defaultForMissingLand),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Horizon Canopy"),
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Silent Clearing"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Nurturing Peatland"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Sunbaked Canyon"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Waterlogged Grove"),
        ];
    }
    process(userColorSelection) {
        if (userColorSelection.isDualColor()) {
            return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
        }
        return new Category_1.default(this.categoryName);
    }
}
exports.default = HorizonLandProcessor;

},{"../Category":1,"../Color":2,"../DualLand":3,"./DualColorSpecialCase":11}],16:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const DualLand_1 = __importDefault(require("../DualLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class PainLandProcessor {
    constructor() {
        this.categoryName = "Pain Lands";
        this.lands = [
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Adarkar Wastes"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Shivan Reef"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Underground River"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Sulfurous Springs"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Karplusan Forest"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Brushland"),
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Caves of Koilos"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Llanowar Wastes"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Battlefield Forge"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Yavimaya Coast"),
        ];
    }
    process(userColorSelection) {
        if (userColorSelection.isDualColor()) {
            return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
        }
        return new Category_1.default(this.categoryName);
    }
}
exports.default = PainLandProcessor;

},{"../Category":1,"../Color":2,"../DualLand":3,"./DualColorSpecialCase":11}],17:[function(require,module,exports){
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
        return category;
    }
}
exports.default = RainbowLandProcessor;

},{"../Category":1}],18:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const DualLand_1 = __importDefault(require("../DualLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class ShockLandProcessor {
    constructor() {
        this.categoryName = "Shock Lands";
        this.lands = [
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Hallowed Fountain"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Steam Vents"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Watery Grave"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Blood Crypt"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Stomping Ground"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Temple Garden"),
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Godless Shrine"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Overgrown Tomb"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Sacred Foundry"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Breeding Pool"),
        ];
    }
    process(userColorSelection) {
        if (userColorSelection.isDualColor()) {
            return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
        }
        return new Category_1.default(this.categoryName);
    }
}
exports.default = ShockLandProcessor;

},{"../Category":1,"../Color":2,"../DualLand":3,"./DualColorSpecialCase":11}],19:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Category"));
const Color_1 = require("../Color");
const DualLand_1 = __importDefault(require("../DualLand"));
const DualColorSpecialCase_1 = require("./DualColorSpecialCase");
class SlowLandProcessor {
    constructor() {
        this.categoryName = "Slow Lands";
        this.lands = [
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Blue, "Deserted Beach"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Blue, "Stormcarved Coast"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Blue, "Shipwreck Marsh"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Red, "Haunted Ridge"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.Green, "Rockfall Vale"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.White, "Overgrown Farmland "),
            new DualLand_1.default(Color_1.Color.White, Color_1.Color.Black, "Shattered Sanctum"),
            new DualLand_1.default(Color_1.Color.Black, Color_1.Color.Green, "Deathcap Glade"),
            new DualLand_1.default(Color_1.Color.Red, Color_1.Color.White, "Sundown Pass"),
            new DualLand_1.default(Color_1.Color.Green, Color_1.Color.Blue, "Dreamroot Cascade"),
        ];
    }
    process(userColorSelection) {
        if (userColorSelection.isDualColor()) {
            return (0, DualColorSpecialCase_1.DualColorSpecialCase)(this.categoryName, userColorSelection, this.lands);
        }
        return new Category_1.default(this.categoryName);
    }
}
exports.default = SlowLandProcessor;

},{"../Category":1,"../Color":2,"../DualLand":3,"./DualColorSpecialCase":11}],20:[function(require,module,exports){
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
        if (userColorSelection.isDualColor()) {
            return new EmptyCategory_1.default(this.categoryName, 8);
        }
        return new EmptyCategory_1.default(this.categoryName, 8);
    }
}
exports.default = UtilityLandProcessor;

},{"../EmptyCategory":4}],21:[function(require,module,exports){
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

},{"../EmptyCategory":4}],22:[function(require,module,exports){
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
const mana_ramp_1 = __importDefault(require("./lands-code/mana-ramp"));
const userColorSelection = new UserColorSelection_1.default();
let detail_checked = false;
const ProcessorArray = [
    new BasicLandProcessor_1.default(),
    new CrowdLandProcessor_1.default(),
    new CheckLandProcessor_1.default(),
    new FetchLandProcessor_1.default(),
    new FilterLandProcessor_1.default(),
    new ShockLandProcessor_1.default(),
    new PainLandProcessor_1.default(),
    new SlowLandProcessor_1.default(),
    new RainbowLandProcessor_1.default(),
    new HorizonLandProcessor_1.default(),
    new DualLandProcessor_1.default(),
    new BounceLandProcessor_1.default(),
    new UtilityLandProcessor_1.default(),
    new mana_ramp_1.default("Mana Ramp", 10),
    new mana_ramp_1.default("Commander", 1),
    new mana_ramp_1.default("Burst Card Draw", 5),
    new mana_ramp_1.default("Repeatable Card Draw", 5),
    new mana_ramp_1.default("Board Wipe", 4),
    new mana_ramp_1.default("Target Removal", 6),
    new mana_ramp_1.default("Theme 1", 10),
    new mana_ramp_1.default("Theme 2", 10),
    new mana_ramp_1.default("Theme 3", 10),
];
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
        const categories = ProcessorArray.map((elem) => {
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
            const categories = ProcessorArray.map((elem) => {
                return elem.process(userColorSelection);
            });
            const outputElement = document.getElementById("output");
            let resp;
            if (userColorSelection.size() >= 1) {
                if (detail_checked) {
                    resp = printLandsWithTitle(categories);
                }
                else {
                    resp = printLandsNoTitle(categories); //printLandsNoTitle(landsCategories, ManaRampCategories);
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
        if (elem.lines.trim()) {
            resp = `${elem.lines}`;
        }
        return resp;
    })
        .join("");
}
function printLandsNoTitle(categories) {
    let resp = "";
    //Print all lands together
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

},{"./Color":2,"./UserColorSelection":6,"./lands-code/BasicLandProcessor":7,"./lands-code/BounceLandProcessor":8,"./lands-code/CheckLandProcessor":9,"./lands-code/CrowdLandProcessor":10,"./lands-code/DualLandProcessor":12,"./lands-code/FetchLandProcessor":13,"./lands-code/FilterLandProcessor":14,"./lands-code/HorizonLandProcessor":15,"./lands-code/PainLandProcessor":16,"./lands-code/RainbowLandProcessor":17,"./lands-code/ShockLandProcessor":18,"./lands-code/SlowLandProcessor":19,"./lands-code/UtilityLandProcessor":20,"./lands-code/mana-ramp":21}]},{},[22]);
