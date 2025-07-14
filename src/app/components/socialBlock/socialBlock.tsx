import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './socialBlock.css'
import Image from "next/image";


interface IData {
    url: string,
    customClass: string
}

interface IconRequired extends IData {
    Icon: typeof GitHubIcon,
    iconUrl?: never;

}
interface IconURLRequired extends IData {
    Icon?: never,
    iconUrl: string
}

type Data = IconRequired | IconURLRequired



const data: Data[] = [
    {
        url: 'https://www.linkedin.com/in/davit-sahakyan-364a51184',
        Icon: LinkedInIcon,
        customClass: "linkedIn",
    },
    {
        Icon: GitHubIcon,
        url: 'https://github.com/davitSahakyan',
        customClass: "github",
    },
    {
        iconUrl: "/assets/icons/stackoverflow.png",
        url: 'https://stackoverflow.com/users/12356491',
        customClass: "stackoverflow",
    }
]

const SocialBlock = () => {
  return (
    <div className="socialBlock-container">
      {
        data.map(({Icon, url, iconUrl, customClass}) => {
            return <a key={url} target="_blank" href={url} className={customClass}> {Icon ? <Icon /> : <Image width={23} height={23} src={iconUrl} alt='social'/>}</a>
        })
      }
    </div>
  )
};

export default SocialBlock;
