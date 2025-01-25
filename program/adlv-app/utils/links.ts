type pathDestination = {
    href: string;
    nama: string;
}

export const pathLink: pathDestination[] = [
    {href: "/home", nama:"home"},
    {href: "/pesanan", nama:"pesanan"},
    {href: "/admin", nama:"admin"},
    {href: "/profile", nama:"profile"},
]

// bantu saya membuat middleware untuk membatasi akses user pengunjung dengan admin pada