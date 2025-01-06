import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Activity } from '@app/activity/activity';

@Component({
  selector: 'app-recent-activity',
  imports: [CommonModule],
  templateUrl: './recent-activity.component.html',
  styleUrl: './recent-activity.component.scss'
})
export class RecentActivityComponent {
  events: Activity[] = [
    {description: "Let's all love lain", "date": new Date("05/07/2024")},
    {description: "Let's all love lain", "date": new Date("17/05/2024")},
    {description: "Let's all love lain", "date": new Date("03/12/2023")},
    {description: "Let's all love lain", "date": new Date("01/01/2024")},
    {description: "Let's all love lain", "date": new Date("19/08/2024")},
    {description: "Let's all love lain", "date": new Date("15/06/2024")},
    {description: "Let's all love lain", "date": new Date("29/11/2024")},
    {description: "Let's all love lain", "date": new Date("24/06/2024")},
    {description: "Let's all love lain", "date": new Date("10/03/2024")},
    {description: "Let's all love lain", "date": new Date("22/08/2024")},
    {description: "Let's all love lain", "date": new Date("14/12/2023")},
    {description: "Let's all love lain", "date": new Date("13/01/2024")}
  ]
}
