import {
  HeartPulse,
  Stethoscope,
  Bone,
  Eye,
  Baby,
  Brain,
  Flower2,
  Target,
  Milestone,
  Microscope,
  Timer,
  Thermometer,
  Activity,
  CircleDot,
} from "lucide-react";

export const SPECIALTIES = [
  {
    name: "General Medicine",
    icon: <Stethoscope className="h-5 w-5" />,
  },
  {
    name: "Cardiology",
    icon: <HeartPulse className="h-5 w-5" />,
  },
  {
    name: "Dermatology",
    icon: <CircleDot className="h-5 w-5" />,
  },
  {
    name: "Endocrinology",
    icon: <Timer className="h-5 w-5" />,
  },
  {
    name: "Gastroenterology",
    icon: <Thermometer className="h-5 w-5" />,
  },
  {
    name: "Neurology",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    name: "Obstetrics & Gynecology",
    icon: <Flower2 className="h-5 w-5" />,
  },
  {
    name: "Oncology",
    icon: <Target className="h-5 w-5" />,
  },
  {
    name: "Ophthalmology",
    icon: <Eye className="h-5 w-5" />,
  },
  {
    name: "Orthopedics",
    icon: <Bone className="h-5 w-5" />,
  },
  {
    name: "Pediatrics",
    icon: <Baby className="h-5 w-5" />,
  },
  {
    name: "Psychiatry",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    name: "Pulmonology",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    name: "Radiology",
    icon: <CircleDot className="h-5 w-5" />,
  },
  {
    name: "Urology",
    icon: <Milestone className="h-5 w-5" />,
  },
  {
    name: "Other",
    icon: <Microscope className="h-5 w-5" />,
  },
];