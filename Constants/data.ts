import {
  BookOpen,
  Users,
  ClipboardList,
  Radio,
  Image,
  PhoneForwardedIcon,
} from "lucide-react";
import { title } from "process";
import { GrArticle } from "react-icons/gr";

export const headerData = [
  /** LEFT SIDE */
  { title: "Home", href: "/", side: "left" },

  {
    title: "About",
    href: "/about",
    side: "left",
    submenu: [
      { title: "About Us", href: "/faq", icon: BookOpen },
      { title: "Gallery", href: "/faq", icon: Image },
      { title: "Contact", href: "/faq", icon: PhoneForwardedIcon },
      { title: "Join Our Team", href: "/faq", icon: ClipboardList },
      {
        title: "FAQ",
        href: "/faq",
        icon: GrArticle,
      },
    ],
  },
  { title: "Residential", href: "/faq" },
  { title: "Commercial", href: "/faq" },
  

];
