import Category from "../Category";
import { Color } from "../Color";
import DualLand from "../DualLand";
import UserColorSelection from "../UserColorSelection";
import { DualColorSpecialCase } from "./DualColorSpecialCase";
import Processor from "./Processor";

export default class PathwayLandProcessor implements Processor {
  private lands: DualLand[];
  private categoryName: string = "Pathway Lands";

  constructor() {
    this.lands = [
      new DualLand(
        Color.White,
        Color.Blue,
        "Hengegate Pathway / Mistgate Pathway"
      ),
      new DualLand(
        Color.Red,
        Color.Blue,
        "Riverglide Pathway / Lavaglide Pathway"
      ),
      new DualLand(
        Color.Black,
        Color.Blue,
        "Clearwater Pathway / Murkwater Pathway"
      ),
      new DualLand(
        Color.Black,
        Color.Red,
        "Blightstep Pathway / Searstep Pathway"
      ),
      new DualLand(
        Color.Red,
        Color.Green,
        "Cragcrown Pathway / Timbercrown Pathway"
      ),
      new DualLand(
        Color.Green,
        Color.White,
        "Branchloft Pathway / Boulderloft Pathway"
      ),
      new DualLand(
        Color.White,
        Color.Black,
        "Brightclimb Pathway / Grimclimb Pathway"
      ),
      new DualLand(
        Color.Black,
        Color.Green,
        "Darkbore Pathway / Slitherbore Pathway"
      ),
      new DualLand(
        Color.Red,
        Color.White,
        "Needleverge Pathway / Pillarverge Pathway"
      ),
      new DualLand(
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
