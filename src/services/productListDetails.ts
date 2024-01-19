export const productDetailBasics: Record<string, any> = {
  whey: [
    {
      title: "amount",
      dimension: "KG",
    },
    {
      title: "flavor",
      dimension: "",
    },
  ],
};

export interface ProductDetailListItem {
  title: string;
  dimension: string;
}

export interface ProductDetailCategory {
  title: string;
  list: ProductDetailListItem[];
}

export const productDetailAdvances: Record<string, ProductDetailCategory> = {
  whey: {
    title: "Aminos / 100g",
    list: [
      {
        title: "leucin",
        dimension: "g",
      },
      {
        title: "isoleucin",
        dimension: "g",
      },
      {
        title: "valin",
        dimension: "g",
      },
      {
        title: "lysine",
        dimension: "g",
      },
      {
        title: "methionin",
        dimension: "g",
      },
      {
        title: "phenylalanin",
        dimension: "g",
      },
      {
        title: "threonin",
        dimension: "g",
      },
      {
        title: "tryptophan",
        dimension: "g",
      },
      {
        title: "histidin",
        dimension: "g",
      },
    ],
  },
};
