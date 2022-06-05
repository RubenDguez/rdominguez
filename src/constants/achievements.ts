import { TAchievement } from "../components/UI/Achievements";
import { recommendations } from "./recommendations";

export const achievements: TAchievement[] = [
  { achievement: 6, plus: true, name: "Years of Experience" },
  { achievement: 25, name: "Completed Projects" },
  { achievement: 2, name: "Happy Customers" },
  { achievement: Number(`${recommendations.length}`), name: "Recommendations" },
];
