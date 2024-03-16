import { Group } from '@material-ui/icons';
import { ListAlt, LocalHospital, PlusOne } from '@mui/icons-material';
import AddHomeIcon from '@mui/icons-material/AddHome';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';

export const menuData = [
    {
        label: "Home",
        link: "/admin",
        submenu: null,
        icon: <AddHomeIcon />
    },
    {
        label: "Patient",
        link: "/admin/patient",
        submenu: null,
        icon: <Group />
    },
    // {
    //     label: "Department",
    //     link: "/admin/department",
    //     submenu: null,
    //     icon: <DepartureBoardIcon />
    // },
    // {
    //     label: "Products",
    //     link: "admin/products",
    //     icon: <ShoppingBasketIcon />,
    //     submenu: [
    //         {
    //             label: "Electronics",
    //             link: "products/electronics",
    //             icon: <ElectricBoltIcon />,
    //             submenu: [
    //                 {
    //                     label: "Smartphones",
    //                     link: "/products/electronics/smartphone",
    //                     icon: <TabletAndroidIcon />,
    //                     submenu: null
    //                 },
    //                 {
    //                     label: "Laptops",
    //                     link: "/products/electronics/laptop",
    //                     icon: <LaptopIcon />,
    //                     submenu: null
    //                 }
    //             ]
    //         },
    //         {
    //             label: "Clothing",
    //             link: "home",
    //             icon: <CheckroomIcon />,
    //             submenu: [
    //                 {
    //                     label: "Men's Clothing",
    //                     link: "home",
    //                     icon: <ManIcon />,
    //                     submenu: null
    //                 },
    //                 {
    //                     label: "Women's Clothing",
    //                     link: "home",
    //                     icon: <WomanIcon />,
    //                     submenu: null
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: "Home",
    //     link: "home",
    //     submenu: null
    // },
    {
        label: "Hospital",
        link: "admin/hospital",
        icon: <LocalHospital />,
        submenu: [
            {
                label: "Add Patient",
                link: "/admin/add-patient",
                icon: <PlusOne />,

            },
            {
                label: "Patient List",
                link: "/admin/patient-list",
                icon: <ListAlt />,
            }
        ]
    },
    // {
    //     label: "Products 5",
    //     link: "admin/products",
    //     icon: <ShoppingBasketIcon />,
    //     submenu: [
    //         {
    //             label: "Electronics",
    //             link: "products/electronics",
    //             icon: <ElectricBoltIcon />,
    //             submenu: [
    //                 {
    //                     label: "Smartphones",
    //                     link: "/products/electronics/smartphone",
    //                     icon: <TabletAndroidIcon />,
    //                     submenu: null
    //                 },
    //                 {
    //                     label: "Laptops",
    //                     link: "/products/electronics/laptop",
    //                     icon: <LaptopIcon />,
    //                     submenu: null
    //                 }
    //             ]
    //         },
    //         {
    //             label: "Clothing",
    //             link: "home",
    //             icon: <CheckroomIcon />,
    //             submenu: [
    //                 {
    //                     label: "Men's Clothing",
    //                     link: "home",
    //                     icon: <ManIcon />,
    //                     submenu: null
    //                 },
    //                 {
    //                     label: "Women's Clothing",
    //                     link: "home",
    //                     icon: <WomanIcon />,
    //                     submenu: null
    //                 }
    //             ]
    //         }
    //     ]
    // },
]