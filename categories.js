import { Wrench, Zap, Sparkles, Snowflake, Hammer, PaintRoller, Plug, Laptop, Car, Scissors } from "lucide-react";

// TEMPORARY (Phase 1): categories are shown from this list so the page can be styled.
// In Phase 6 they are replaced by GET /api/categories from the database.
export const categories = [
  { id: 1, name: "Plumbing", icon: Wrench },
  { id: 2, name: "Electrical Services", icon: Zap },
  { id: 3, name: "Home Cleaning", icon: Sparkles },
  { id: 4, name: "AC Repair", icon: Snowflake },
  { id: 5, name: "Carpentry", icon: Hammer },
  { id: 6, name: "Painting", icon: PaintRoller },
  { id: 7, name: "Appliance Repair", icon: Plug },
  { id: 8, name: "Computer/Laptop Repair", icon: Laptop },
  { id: 9, name: "Vehicle Repair", icon: Car },
  { id: 10, name: "Beauty Services", icon: Scissors },
];
