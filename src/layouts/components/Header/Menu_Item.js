import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";

export const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    to: "/",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "china",
          title: "中文",
        },
        {
          type: "language",
          code: "jpn",
          title: "日本語",
        },
        {
          type: "language",
          code: "fr",
          title: "Français",
        },
        {
          type: "language",
          code: "es",
          title: "Español",
        },

        {
          type: "language",
          code: "kr",
          title: "한국인",
        },
        {
          type: "language",
          code: "rusia",
          title: "Русский",
        },

        {
          type: "language",
          code: "ger",
          title: "Germany",
        },
        {
          type: "language",
          code: "Italy",
          title: "Italy",
        },
        {
          type: "language",
          code: "malay",
          title: "Malaysia",
        },
        {
          type: "language",
          code: "indo",
          title: "Indonesia",
        },

        {
          type: "language",
          code: "Lao",
          title: "Lao",
        },
        {
          type: "language",
          code: "Latin",
          title: "Latin",
        },
        {
          type: "language",
          code: "arabic",
          title: "Arabic",
        },
        {
          type: "language",
          code: "romani",
          title: "Romanian",
        },

        {
          type: "language",
          code: "thai",
          title: "Thai lan",
        },
        {
          type: "language",
          code: "can",
          title: "Canada",
        },
        {
          type: "language",
          code: "turkmen",
          title: "Turkmen",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },

  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
    to: "/",
  },
];
