type pathDestination = {
    href: string;
    nama: string;
}

export const pathLink: pathDestination[] = [
    {href: "/home", nama:"home"},
    {href: "/pesanan", nama:"pesanan"},
    {href: "/profile", nama:"profile"},
    {href: "/admin", nama:"admin"},
]

// bantu saya membuat middleware untuk membatasi akses user pengunjung dengan admin pada