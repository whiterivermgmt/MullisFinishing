import {
  BookOpen,
  ClipboardList,
  Image,
  PhoneForwardedIcon,
} from "lucide-react";
import { GrArticle } from "react-icons/gr";

export const headerData = [
  { title: "Home", href: "/" },

  {
    title: "About",
    href: "/about",
    submenu: [
      { title: "About Us", href: "/about", icon: BookOpen },
      { title: "Gallery", href: "/gallery", icon: Image },
      { title: "Contact", href: "/contact", icon: PhoneForwardedIcon },
      { title: "Join Our Team", href: "/careers", icon: ClipboardList },
      { title: "FAQ", href: "/faq", icon: GrArticle },
    ],
  },

  { title: "Services", href: "/services" },
  { title: "Xcel Laser Worx", href: "/XcelWorx" },
];