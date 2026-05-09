import Image from "next/image"
import "./LoginFormSideContent.scss"

const LoginFormSideContent = () => {
    return (
   <div className="sidFormImageComponent">
            <div className="sidFormImageComponent__imgComponent1">
                <Image src="/SideFormContentImage/menu10.png" alt="food image"  height={200} width={200}/>
            </div>
            <div className="sidFormImageComponent__imgComponent2">
                <Image src="/SideFormContentImage/menu11.png" alt="food image" height={200} width={200} />
            </div>
            <div className="sidFormImageComponent__imgComponent3">
                <Image src="/SideFormContentImage/menu12.png" alt="food image" height={200} width={200}/>
            </div>

        </div>
    )
}

export default LoginFormSideContent