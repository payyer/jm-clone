import { clothes, dress, jacket, pants, skirts } from "../assets/ListCategory";
const CATEGORY_LIST = [
  {
    link: `/search?category=dress`,
    text: "Đầm",
    imgLink: dress,
  },
  {
    link: "/search?category=clothes",
    text: "Áo",
    imgLink: clothes,
  },
  {
    link: "/search?category=pants",
    text: "Quần",
    imgLink: pants,
  },
  {
    link: "/search?category=skirts",
    text: "Chân váy",
    imgLink: skirts,
  },
  {
    link: "/search?category=jacket",
    text: "Áo khoác",
    imgLink: jacket,
  },
  {
    link: "/search?sale=true",
    text: "Sale",
    imgLink: dress,
  },
  {
    link: "/search?category=accessories",
    text: "Phụ kiện",
    imgLink: dress,
  },
];

export { CATEGORY_LIST };
