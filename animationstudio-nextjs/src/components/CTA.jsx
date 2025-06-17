// Shadcn
import { ButtonVariants } from "@/components"

const CTA = ({
    variant = "default",
    href = "javascript:;",
    text,
    className = " "
}) => {
    return (
        <div className={ButtonVariants({ variant: variant, size: "default", className })} dangerouslySetInnerHTML={{
            __html: `
            <a tabIndex="0" href=${href} class="px-[2rem] mx-auto h-full flex items-center">
                <span>${text}</span>
            </a>
        ` }} />
    )
}

export default CTA