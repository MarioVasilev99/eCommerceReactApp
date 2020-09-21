export interface ILinkItemsProps {
    id: number;
    pageName: string;
    pageUrl: string;
}

export interface ICartProps {
    totalPrice: number,
    cartItemsCount: number,
}

export interface IHeaderStateProps {
    linkItems: Array<ILinkItemsProps>;
    cart: ICartProps;
}
