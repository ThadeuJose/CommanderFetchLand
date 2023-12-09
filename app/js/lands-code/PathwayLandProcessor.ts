import Category from "../Category";
import { Color } from "../Color";
import TwoColorLand from "../TwoColorLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class PathwayLandProcessor implements Processor {
  private lands: TwoColorLand[];
  private categoryName: string = "Pathway Lands";

  constructor() {
    this.lands = [
      new TwoColorLand(
        Color.White,
        Color.Blue,
        "Hengegate Pathway / Mistgate Pathway"
      ),
      new TwoColorLand(
        Color.Red,
        Color.Blue,
        "Riverglide Pathway / Lavaglide Pathway"
      ),
      new TwoColorLand(
        Color.Black,
        Color.Blue,
        "Clearwater Pathway / Murkwater Pathway"
      ),
      new TwoColorLand(
        Color.Black,
        Color.Red,
        "Blightstep Pathway / Searstep Pathway"
      ),
      new TwoColorLand(
        Color.Red,
        Color.Green,
        "Cragcrown Pathway / Timbercrown Pathway"
      ),
      new TwoColorLand(
        Color.Green,
        Color.White,
        "Branchloft Pathway / Boulderloft Pathway"
      ),
      new TwoColorLand(
        Color.White,
        Color.Black,
        "Brightclimb Pathway / Grimclimb Pathway"
      ),
      new TwoColorLand(
        Color.Black,
        Color.Green,
        "Darkbore Pathway / Slitherbore Pathway"
      ),
      new TwoColorLand(
        Color.Red,
        Color.White,
        "Needleverge Pathway / Pillarverge Pathway"
      ),
      new TwoColorLand(
        Color.Green,
        Color.Blue,
        "Barkchannel Pathway / Tidechannel Pathway"
      ),
    ];
  }

  process(userColorSelection: UserColorSelection): Category {
    return DualColorSpecialCase(
      this.categoryName,
      userColorSelection,
      this.lands
    );
  }
}
