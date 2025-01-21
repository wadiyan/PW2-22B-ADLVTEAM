type pathDestination = {
    href: string;
    nama: string;
}

export const pathLink: pathDestination[] = [
    {href: "/home", nama:"home"},
    {href: "/keranjang", nama:"keranjang"},
    {href: "/pesanan", nama:"pesanan"},
    {href: "/admin", nama:"admin"},
]

// bantu saya membuat middleware untuk membatasi akses user pengunjung dengan admin pada