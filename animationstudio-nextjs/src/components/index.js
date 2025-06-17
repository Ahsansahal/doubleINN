// Next
import dynamic from "next/dynamic"

import CTA from "./CTA"
const Header = dynamic(() => import("./Header"))
const Hero = dynamic(() => import("./Hero"))
import ToggleBtn from "./ToggleBtn"
import { ButtonVariants, Button } from "./ui/Button"
const HomeGrid = dynamic(() => import("./Home/Grid"))
const FullViewVideo = dynamic(() => import("./FullViewVideo"))
const Portfolio = dynamic(() => import("./Portfolio/Portfolio"))
const AutoPlaySlider = dynamic(() => import("./AutoPlaySlider"))
const AutoScrollSlider = dynamic(() => import("./AutoScrollSlider"))
const Industries = dynamic(() => import("./Industries"))
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/Accordion"
const FAQs = dynamic(() => import("./FAQs"))
const Partners = dynamic(() => import("./Partners"))
const SuccessClients = dynamic(() => import("./SuccessClients"))
const WeAre = dynamic(() => import("./WeAre"))
const Grid = dynamic(() => import("./Grid"))
const Process = dynamic(() => import("./Process"))
const TypesOfVideos = dynamic(() => import("./TypesOfVideos"))
const Reviews = dynamic(() => import("./Reviews"))
const Footer = dynamic(() => import("./Footer"))
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/Sheet"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/Form"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "./ui//Dialog"
import { Input } from "./ui/Input"
import { Textarea } from "./ui/Textarea"
import { Label } from "./ui/Label"
const FrontEndForm = dynamic(() => import("./FrontEndForm"))
const ContactUs = dynamic(() => import("./ContactUs"))
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs"
const PortfolioTabs = dynamic(() => import("./PortfolioTabs"))
const PackageCard = dynamic(() => import("./PackageCard"))

export {
    Header,
    ToggleBtn,
    CTA,
    ButtonVariants,
    Hero,
    HomeGrid,
    FullViewVideo,
    Portfolio,
    AutoPlaySlider,
    AutoScrollSlider,
    Industries,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    FAQs,
    Footer,
    Partners,
    SuccessClients,
    WeAre,
    Grid,
    Process,
    TypesOfVideos,
    Reviews,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Input,
    Textarea,
    Label,
    FormDescription,
    FormLabel,
    FrontEndForm,
    Button,
    ContactUs,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    PortfolioTabs,
    PackageCard
}