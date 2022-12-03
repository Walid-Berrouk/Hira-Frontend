import   "../../styles/home.css"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as User } from "../../assets/user.svg";

const BubbleBot = ({text }) => {
    return ( 
        <div className="flex items-start mb-4">
           <div className=" w-[32px]sm:w-[64px] h-[32px]sm:h-[64px] sm:mr-5">
                <Logo className="object-contain w-[64px] h-[64px]"  />
            </div>
            <div className="w-full sm:w-[350px] md:w-[640px]">
                <div className="mr-auto rounded-[16px] max-w-[850px] w-fit h-fit px-4 py-4 border-[#707070] border  bubble text-white font-[24px] text-center ">
                    {text}  
                </div>
            </div>
            <div className="opacity-0 w-[26px] h-[26px] sm:w-[58px] sm:h-[58px] sm:ml-5">
                <User className="object-contain w-[58px] h-[58px]"  />
            </div>
        </div> 
    );
}
 
export default BubbleBot;