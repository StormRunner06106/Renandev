import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@renanmdreis45",
    icon: Icons.gitHub,
    link: "https://github.com/renanmdreis45",
  },
  {
    name: "LinkedIn",
    username: "Renan Martins",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/renanmdreis/",
  },
  {
    name: "WhatsApp",
    username: "+55 85 98906-0639",
    icon: Icons.contact,
    link: "https://wa.me/5585989060639",
  },
  {
    name: "Gmail",
    username: "Renan Martins",
    icon: Icons.gmail,
    link: "mailto:renanmdreis@gmail.com",
  },
];
