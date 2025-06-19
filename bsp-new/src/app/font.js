import localFont from "next/font/local";
import { Montserrat } from 'next/font/google';

const fontPrimary = localFont({
    src: [{
        path: "../../public/font/SFProDisplay-Regular.ttf",
        weight: '400',
        style: 'normal',
    }, {
        path: '../../public/font/SFProDisplay-Medium.woff',
        weight: '500',
        style: 'normal',
    },
    {
        path: '../../public/font/SFProDisplay-Semibold.woff',
        weight: '600',
        style: 'normal',
    },
    {
        path: '../../public/font/SFProDisplay-Bold.woff',
        weight: '700',
        style: 'normal',
    },
    {
        path: '../../public/font/SFProDisplay-Heavy.woff',
        weight: '900',
        style: 'normal',
    }],
    variable: '--font-sfprodisplay',
    subsets: ['latin'],
    display: 'swap',
});
const montserrat = Montserrat({
    weight: ['300', '400', '500','600', '700', '800'],
    subsets: ['latin'],
    display:'swap',
    variable: '--font-montserrat',
    fallback: ['Arial', 'sans-serif'],
  });
  
export { fontPrimary, montserrat }
