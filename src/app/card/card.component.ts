import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "pp-card",
  imports: [ButtonComponent],
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
